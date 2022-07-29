import Axios from 'axios'

export const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true,
})
