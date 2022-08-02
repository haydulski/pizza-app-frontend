import React, { useState } from 'react'
import axios from 'axios'
import { displayMessage } from '../lib/displayMessage'

const UserUpdate = ({ isUpdate, hide }) => {

    const [form, setForm] = useState({
        name: null,
        surname: null,
        email: null,
        phone: null,
        street: null,
        house_number: null,
        post_code: null,
        city: null,
    })

    const formChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value.toString() })
    }

    const handleHide = (e) => {
        if (e.target.id === 'modal') {
            return hide(0)
        }
    }

    const handleUpdate = async () => {

        const data = {}
        Object.keys(form).forEach(key => {
            if (form[key] !== null && form[key] !== '') data[key] = form[key];
        });

        axios.post('api/user-update', data)
            .then(res => {
                if (res.status === 200) return isUpdate()
                displayMessage('Wrong data provide', true)
            })
    }

    return (
        <div id='modal' className="fixed top-0 left-0 w-screen bg-opacity-black h-screen z-50" onClick={handleHide}>
            <div className="absolute min-w-1/2 shadow-2xl bg-gray-100 px-6
         py-8 -translate-x-1/2 left-1/2 top-[20vh] rounded-lg z-[60] min-w-[50%]" >
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
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="email"
                    placeholder="Email"
                    onChange={formChange}
                />
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="phone"
                    onChange={formChange}
                    placeholder="Phone" />
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="street"
                    onChange={formChange}
                    placeholder="Street" value={form.password} />

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="house_number"
                    onChange={formChange}
                    placeholder="House number" />
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="post_code"
                    onChange={formChange}
                    placeholder="Post code" />
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-orange"
                    name="city"
                    onChange={formChange}
                    placeholder="City" />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-dark-orange text-white
                         hover:bg-orange focus:outline-none my-1" onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
}

export default UserUpdate;