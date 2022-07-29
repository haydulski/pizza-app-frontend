import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo-min.png'
import Navbar from '../navbar'

const Layout = ({ children }) => {

    const [openNav, setnav] = useState('close');
    const handleMenu = () => {
        setnav(openNav === 'open' ? 'close' : 'open');
    }

    return (
        <div className='min-h-screen'>
            <header className="max-screen">
                <div className='max-w-3xl mx-auto pt-10 text-center
                 hover:scale-105 transition-translate duration-300 relative z-50'>
                    <Image src={Logo} alt="site logo"
                        onClick={handleMenu}
                        className='cursor-pointer ' />
                </div>
                <Navbar isOpen={openNav} menuAction={handleMenu} />
            </header>

            <main>
                {children}
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Layout;