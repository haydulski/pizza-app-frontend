import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/router'
import { displayMessage } from '../lib/displayMessage'

import UserUpdate from '../components/userUpdateModal'

const Account = () => {
    const [user, setUser] = useState(null)
    const [modal, setModal] = useState(0)
    const router = useRouter()

    useEffect(() => {
        axios.get('api/user')
            .then(res => setUser(res.data))
    }, [])

    const handleLogout = () => {
        axios.post('api/logout')
            .then(res => {
                return router.push('/login')
            })
    }

    const refreshPage = () => {
        setModal(0)
        axios.get('api/user')
            .then(res => setUser(res.data))
        displayMessage('Your presonal data was updated')
    }

    if (user === null) return (
        <div className="max-w-7xl mx-auto bg-light-gray mt-10 px-8 py-20">
            <h1 className='text-6xl font-bold text-red'>My Account</h1>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Skeleton height={350} baseColor='#d6f2c9' />
                <Skeleton height={350} baseColor='#d6f2c9' />
            </div>
        </div>)

    return (
        <div className="max-w-7xl mx-auto bg-light-gray mt-10 px-8 py-20">
            <h1 className='text-6xl font-bold text-red'>My Account</h1>
            <div className="container flex flex-wrap gap-4 mt-8 w-full min-w-full">
                <div className="bg-green rounded-md shadow-lg text-dark-orange w-full lg:w-[49%] p-4">
                    <h2 className='text-2xl font-semibold'>Account details:</h2>
                    <p className="my-4">Name: <span className='font-semibold'>{user.name} {user.surname}</span></p>
                    <p className="my-4">Email: <span className='font-semibold'>{user.email}</span></p>
                    <p className="my-4">Phone: <span className='font-semibold'>{user.phone}</span></p>
                    <p className="my-4">Street: <span className='font-semibold'>{user.street}</span></p>
                    <p className="my-4">House: <span className='font-semibold'>{user.house_number}</span></p>
                    <p className="my-4">Post code: <span className='font-semibold'>{user.post_code}</span></p>
                    <p className="my-4">City: <span className='font-semibold'>{user.city}</span></p>
                </div>
                <div className="bg-green rounded-md shadow-lg text-dark-orange w-full lg:w-[49%] p-4">
                    <h2 className='text-2xl font-semibold'>Orders:</h2>
                    <ul className="list-none">
                        {user.orders.map(or => {
                            return (
                                <li key={or.id} className='my-4 border-b-2 border-light-gray font-semibold'>
                                    Order id: {or.id} <span className='ml-[30%]'>Total cost:  ${or.total_price}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-8 py-4">
                <button className='bg-dark-orange px-4 py-2 text-gray-100 text-regular rounded-md'
                    onClick={handleLogout}>
                    Logout
                </button>
                <button className='bg-dark-orange px-4 py-2 text-gray-100
                 text-regular rounded-md ml-2'
                    onClick={() => modal === 0 ? setModal(1) : setModal(0)}>
                    Modify your data
                </button>
            </div>
            {modal === 1 && <UserUpdate isUpdate={refreshPage} hide={setModal} />}
        </div>
    );
}

export default Account;
