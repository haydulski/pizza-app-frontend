import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/router'

const Account = () => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        axios.get('api/user')
            .then(res => setUser(res.data))
            .catch(err => router.push('/login'))

    }, [])

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
            <div className="container flex gap-4 mt-8">
                <div className="bg-green rounded-md shadow-lg text-dark-orange w-1/2 p-4">
                    <h2 className='text-2xl font-semibold'>Account details:</h2>
                    <p className="my-4">Name: <span className='font-semibold'>{user.name} {user.surname}</span></p>
                    <p className="my-4">Email: <span className='font-semibold'>{user.email}</span></p>
                    <p className="my-4">Phone: <span className='font-semibold'>{user.phone}</span></p>
                    <p className="my-4">Street: <span className='font-semibold'>{user.street}</span></p>
                    <p className="my-4">House: <span className='font-semibold'>{user.house_number}</span></p>
                    <p className="my-4">Post code: <span className='font-semibold'>{user.post_code}</span></p>
                    <p className="my-4">City: <span className='font-semibold'>{user.city}</span></p>
                </div>
                <div className="bg-green rounded-md shadow-lg text-dark-orange w-1/2 p-4">
                    <h2 className='text-2xl font-semibold'>Orders:</h2>
                </div>
            </div>
        </div>
    );
}

export default Account;
