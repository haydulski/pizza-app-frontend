import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const Register = () => {

    const router = useRouter()
    const [form, setForm] = useState({
        name: null,
        surname: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const handleRegister = async () => {

        const formInputs = form.find(inp => inp === null)
        if (formInputs.length > 0) {
            return alert('Please fill all fields !')
        }

        axios.post('api/register', form)
            .then(res => {
                if (res.status === 200) return router.push('/account')
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const formChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value.toString() })
        console.log(form);
    }

    return (

        <div className="flex flex-col mt-20">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="px-6 pb-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-semibold text-dark-orange">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                        name="name"
                        onChange={formChange}
                        placeholder="Name" />
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                        name="surname"
                        onChange={formChange}
                        placeholder="Surname"
                    />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                        name="email"
                        placeholder="Email"
                        onChange={formChange}
                    />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                        name="password"
                        onChange={formChange}
                        placeholder="Password" value={form.password} />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                        name="password_confirmation"
                        onChange={formChange}
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-dark-orange text-white
                         hover:bg-orange focus:outline-none my-1" onClick={handleRegister}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark ml-2" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link href="/login">
                        <a className="no-underline border-b border-blue text-blue ml-2">
                            Log in
                        </a>
                    </Link>.
                </div>
            </div>
        </div>
    );
}

export default Register;