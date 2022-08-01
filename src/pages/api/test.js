import { axios } from "../../lib/axios"
import { serialize } from "cookie"

export default async function handler(req, res) {

    const ask = await axios.get('/test/1')
    const token = await ask.data

    if (token) {

        const serialized = serialize('jwt', token, {
            secure: true,
            httpOnly: true,
            maxAge: 60 * 60,
            sameSite: 'strict',
            path: '/api'

        })

        res.setHeader('Set-Cookie', serialized).status(200).json('token dodany')
    } else {
        res.status(401)
    }
}
