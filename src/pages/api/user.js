import { axios } from "../../lib/axios"
import { serialize } from "cookie"

export default async function handler(req, res) {

    const { cookies } = req;
    if (!cookies.jwt) return res.status(401).json('you not logged')

    const bearerToken = 'Bearer ' + cookies.jwt
    const ask = await axios.get('/api/user', {
        headers: {
            "Authorization": bearerToken
        },
    })
    const data = await ask.data

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(401).json('invalid credentials')
    }
}