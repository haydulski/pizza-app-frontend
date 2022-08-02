import { axios } from "../../lib/axios"
import { serialize } from "cookie"

export default async function handler(req, res) {

    axios.post('/login', req.body)
        .then(ask => {
            const serialized = serialize('jwt', ask.data, {
                secure: true,
                httpOnly: true,
                maxAge: 60 * 60,
                sameSite: 'lax',
                path: '/api'

            })
            const vendor = serialize('vendor', 'logged', {
                secure: false,
                httpOnly: false,
                maxAge: 60 * 60,
                sameSite: 'lax',
                path: '/'
            })
            res.setHeader('Set-Cookie', [serialized, vendor]).status(200).json('token dodany')
            res.end(res.getHeader('Set-Cookie'))
        })
        .catch(err => {
            if (err.response) {
                res.status(206).json(err.response.data.errors)
            }
        })
}
