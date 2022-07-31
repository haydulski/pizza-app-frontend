import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '@/../actions'

const Cart = ({ cart, removeProduct }) => {

    useEffect(() => { }, [cart])

    const items = cart.orderedItems

    const showIng = (ing) => {
        if (ing instanceof Object) return ing.name
        return ing
    }

    return (
        <div className="text-2xl px-8 py-20 max-w-7xl mx-auto mt-8 rounded-md bg-light-gray shadow-xl">
            <h1 className='lg:text-6xl md:text-3xl text-red font-bold
              uppercase mt-5'>My cart</h1>
            <div className="items mt-4 border-t-2 w-full border-gray-300">
                <ul className='list-none pt-4'>
                    {items && items.map((it, key) => {
                        return (
                            <li key={key} id={key} className='flex justify-between my-4'>
                                <div className='w-1/2'>
                                    <h4>{it.name || 'Custom pizza ' + key}</h4>
                                    <p className='text-sm text-gray-500'>(
                                        {it.ingredient_1 !== null ? showIng(it.ingredient_1) : null}
                                        {it.ingredient_2 !== null ? ', ' + showIng(it.ingredient_2) : null}
                                        {it.ingredient_3 !== null ? ', ' + showIng(it.ingredient_3) : null}
                                        )</p>
                                </div>
                                <p>qty:{it.amount}</p>
                                <p>${it.price}</p>
                                <span className='px-2 rounded-md py-2 bg-orange text-gray-100
                                 hover:bg-dark-orange cursor-pointer shadow-md'
                                    onClick={() => removeProduct(key)}>
                                    remove</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>


    );
}

export default connect(state => ({
    cart: state.cart
}), { removeProduct })(Cart);