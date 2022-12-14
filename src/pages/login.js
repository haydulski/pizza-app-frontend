import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { displayMessage } from '../lib/displayMessage'
import Head from 'next/head'

const Login = () => {

    const route = useRouter()
    const [form, setForm] = useState({
        email: null,
        password: null
    })

    const handleLogin = async () => {
        axios.post('api/login', form)
            .then(res => {
                if (res.status === 200) {
                    return route.reload()
                }
                displayMessage('Wrong email or password', true)
            }).catch(err => displayMessage('Connection error', true))
    }

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Pizza | Login</title>
                <meta name="description" content="login to your Pizza application" />
            </Head>

            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold
                     text-orange">Sign in to your account</h2>
                </div>
                <div className="mt-8 space-y-6">

                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email"
                                required className="appearance-none rounded-none relative block w-full
                                  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
                                   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                                    focus:z-10 sm:text-sm" placeholder="Email address"
                                onChange={handleForm} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                            border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                            focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
                                onChange={handleForm} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                className="h-4 w-4 text-dark-orange focus:ring-gray-400 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-red"> Remember me </label>
                        </div>

                        <div className="text-sm">
                            <Link href="/register">
                                <a className="font-medium text-red
                                 hover:text-dark-orange"> Want to register? </a>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex
                             justify-center py-2 px-4 border border-transparent text-sm font-medium
                              rounded-md text-white bg-dark-orange hover:bg-orange focus:outline-none
                               focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleLogin}>
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2
                                     2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
