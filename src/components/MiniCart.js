import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { dPath } from '../misc/cartDPath'

const MiniCart = () => {

    const cart = useSelector(state => state.cart)
    const items = cart.orderedItems?.length

    useEffect(() => {

    }, [items])

    return (
        <div className="absolute left-8 top-[20vh] lg:top-20 hidden lg:block">
            <Link href='/cart'>
                <svg className='hover:scale-105 cursor-pointer transition-transform duration-100 easy-out'
                    width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={dPath} fill="#A61508" />
                </svg>
            </Link>
            {items > 0 &&
                <span className="rounded-full bg-gray-100 ml-4 px-2 text-sm text-red absolute -top-2 left-[50%]">
                    {items}
                </span>}
        </div>
    )
}

export default MiniCart;