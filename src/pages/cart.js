import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '@/../actions'

const Cart = ({ cart, removeProduct }) => {

    useEffect(() => { }, [cart])

    const items = cart.orderedItems

    return (
        <div className="text-2xl px-8 py-20 max-w-7xl mx-auto mt-8 rounded-md bg-light-gray shadow-xl">
            <h1 className='lg:text-7xl md:text-3xl text-red font-bold
              uppercase mt-5'>My cart</h1>
            <div className="items mt-4 border-t-2 w-full border-gray-300">
                <ul className='list-none pt-4'>
                    {items && items.map((it, key) => {
                        return (
                            <li key={key} id={key} className='flex justify-between'>
                                <div className='w-1/2'>
                                    <h4>{it.name || 'Custom pizza'}</h4>
                                    <p className='text-gray-400 text-sm'>
                                        ({it.ingredient_1.name || null}
                                        {', ' + it.ingredient_1.name || null}
                                        )
                                    </p>
                                </div>
                                <p>qty:{it.amount}</p>
                                <p>${it.price}</p>
                                <span className='px-2 pt-2 bg-orange text-gray-100 hover:bg-dark-orange cursor-pointer'
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