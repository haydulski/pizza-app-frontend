import React, { useRef, useEffect } from 'react'
import Link from 'next/link'


const Navbar = ({ isOpen, menuAction }) => {
    const nav = useRef()

    useEffect(() => {
        handleMenu()
    }, [isOpen])

    const handleMenu = () => {

        if (isOpen === 'close') {
            nav.current.classList.remove('-translate-x-12')
            nav.current.classList.add('-translate-x-96')
        } else {
            nav.current.classList.remove('-translate-x-96')
            nav.current.classList.add('-translate-x-12')
        }
    }

    const mouseEnter = () => {
        if (isOpen === 'close') { return menuAction() }
    }
    const mouseLeave = () => {
        if (isOpen === 'open') { return menuAction() }
    }

    return (
        <>
            <div ref={nav}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className='navbar bg-dark-orange max-w-[400px] min-w-[300px] lg:min-w-[400px]
             py-8 pl-8 pr-8 lg:pr-16 rounded-md rotate-0 lg:-rotate-6
             fixed top-[20%] lg:top-[30%] -translate-x-96 z-50 shadow-3xl
             transition-translate duration-300
             ' >
                <ul className='text-red text-3xl font-semibold leading-[4rem]
                 uppercase text-right' onClick={menuAction}>
                    <li className='hover:text-light-gray transition-colors duration-500 cursor-pointer'>
                        <Link href="/" >
                            <a>home</a>
                        </Link>
                    </li>
                    <li className='hover:text-light-gray transition-colors duration-500 cursor-pointer'>
                        <Link href="/menu">
                            <a>menu</a>
                        </Link>
                    </li>
                    <li className='hover:text-light-gray transition-colors duration-500 cursor-pointer'>
                        <Link href="/custom-pizza">
                            <a>custom pizza</a>
                        </Link>
                    </li>
                    <li className='hover:text-light-gray transition-colors duration-500 cursor-pointer'>
                        <Link href="/account">
                            <a>my account</a>
                        </Link>
                    </li>
                    <li className='hover:text-light-gray transition-colors duration-500 cursor-pointer
                    block lg:hidden'>
                        <Link href="/cart">
                            <a>cart</a>
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Navbar;