import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import img from '../../public/landing-img-min.png'
import Inputs from '../components/CustomizerInputs'
import { connect } from 'react-redux'
import { addCustomProduct } from '../../actions'
import { displayMessage } from '../lib/displayMessage'
import Head from 'next/head'

const Custom = ({ addCustomProduct }) => {

    const emptyOrder = {
        isCustom: 1,
        amount: 1,
        dough: null,
        doughSize: null,
        doubleCheese: null,
        ingredients: []
    }
    const [order, setOrder] = useState(emptyOrder)

    const [ing, setIng] = useState(null);
    const [costs, setCosts] = useState(2);

    const fetchIngredients = async () => {
        axios.get('/api/ingredients')
            .then(res => {
                setIng(res.data)
            })
    }

    useEffect(() => {
        fetchIngredients()
    }, [])

    useEffect(() => {
        recalculateCosts()
    }, [order])

    const modal = useRef()

    // handle functions 

    const handleOrder = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value })
    }

    const showAdd = () => {
        modal.current.classList.toggle('hidden')
    }

    const addIng = (name, cost) => {
        const gate = order.ingredients.find(ing => ing.name === name);
        if (gate) return
        if (order.ingredients.length === 5) return alert('You can add up to 6 ingredients')
        setOrder({ ...order, ingredients: [...order.ingredients, { name, qty: 1, cost }] })
    }

    const changeQty = (name, cost, isIncrement) => {
        let newQty = null
        let find = order.ingredients.findIndex(ing => ing.name === name)
        let data = [...order.ingredients]
        if (isIncrement) {
            newQty = { name, qty: order.ingredients[find].qty + 1, cost }
        } else {
            newQty = { name, qty: order.ingredients[find].qty - 1, cost }
        }
        if (newQty.qty < 1) {
            data.splice(find, 1)
            setOrder({ ...order, ingredients: data })
            return
        }
        data[find] = newQty
        setOrder({ ...order, ingredients: data })
    }
    const recalculateCosts = () => {
        let base = 2
        let ingCosts = 0
        if (order.doughSize == '38') { base += 1 }
        if (order.doubleCheese == 'yes') {
            base += 1
        }
        if (order.ingredients.length > 0) {
            ingCosts = order.ingredients.reduce((acc, ing) => { return acc + (ing.cost * ing.qty) }, 0)
            base += ingCosts
        }

        setCosts(base);
    }

    // display functions

    const displayIng = (ings) => {
        return ings.map(i =>
        (
            <div id={i.id} key={i.id}
                className='bg-gray-100 px-4 py-5 sm:grid
                 sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2'>
                <p>{i.id}</p>
                <dd onClick={() => addIng(i.name, i.cost)}
                    className="mt-1 text-sm text-black text-base
                         capitalize sm:mt-0 sm:col-span-2 cursor-cell">
                    {i.name}
                </dd>
            </div>
        )
        )
    }

    const addedIngs = () => {
        return order.ingredients.map((ii, key) => (
            <li key={key} className="my-2 flex justify-between">
                {ii.qty} - {ii.name}
                <div>
                    <span className='px-1 bg-orange text-green rounded-md select-none
                         font-regular  cursor-pointer' onClick={() => changeQty(ii.name, ii.cost, true)}>
                        +
                    </span>
                    <span className='px-2 bg-orange text-green rounded-md select-none
                         font-regular ml-2 cursor-pointer' onClick={() => changeQty(ii.name, ii.cost, false)}>
                        -
                    </span>
                </div>
            </li>
        )
        )
    }

    // order 
    const placeOrder = () => {
        addCustomProduct(order, costs)
        displayMessage('Your custom pizza is in cart')
        setOrder(emptyOrder)
    }

    return (
        <div className="max-w-7xl mx-auto bg-light-gray mt-12 px-10 py-20 shadow-2xl mb-40 rounded-md">
            <Head>
                <title>Pizza customizer</title>
                <meta name="description" content="Create your own pizza"></meta>
            </Head>

            <h1 className='text-4xl lg:text-6xl font-semibold text-dark-orange uppercase'>
                YOUR CUSTOM PIZZA GENERATOR
            </h1>
            <div className='flex px-2 py-2 mt-10 flex-wrap'>
                <div className='col1 min-w-full md:min-w-[50%] lg:min-w-[25%]  border-r-2 pr-2 border-orange'>
                    <Inputs handleOrder={handleOrder} />
                </div>
                <div className='col2 min-w-full md:min-w-[50%] lg:min-w-[25%] relative my-8 pb-8 min-h-[200px]'>
                    <button className='bg-dark-orange font-semibold
                     text-2xl capitalize text-light-gray py-2 px-8 ml-10 block
                     transition-color duration-100 hover:bg-red rounded-md' onClick={showAdd}>
                        + Add ingredient
                    </button>
                    <ul className='ingredients list-none pl-0 lg:pl-10 mt-8 text-orange text-2xl'>
                        {addedIngs()}
                    </ul>
                    <div className="static lg:absolute my-4 bottom-0 lg:-bottom-8 font-bold text-dark-orange text-3xl uppercase left-8">
                        Total cost: ${costs}
                    </div>
                    <div ref={modal} className="modal rounded-md shadow-3xl
                     bg-white fixed top-40 w-[340px] lg:w-[400px] max-h-96 overflow-x-hidden
                      left-1/2 -translate-x-1/2 z-50 hidden overscroll-y-auto ">
                        <span onClick={showAdd} className='ml-[90%] pt-4 font-semibold
                         cursor-pointer text-red block'>X</span>
                        <dl>
                            {ing && ing.map(cat => (
                                <div key={cat.id}>
                                    <h5 className='ml-6 text-lg font-semibold font-red py-2
                                         capitalize'>{cat.category}</h5>
                                    {displayIng(cat.ingredients)}
                                </div>
                            )
                            )}
                        </dl>
                    </div>
                </div>
                <div className='col3 min-w-full md:min-w-[50%] lg:min-w-[25%]'>
                    <Image src={img} alt='order image' width={500} height={300} />
                </div>
            </div>

            <div className='text-right'>
                <button className='font-semibold text-light-gray hover:bg-dark-orange transition duration-100
                     bg-red text-3xl py-2 px-4 rounded-md mt-20' onClick={placeOrder}>
                    Add to cart</button>
            </div>
        </div>
    )
}

export default connect((state) => { return state }, { addCustomProduct })(Custom);
