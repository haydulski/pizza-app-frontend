import { axios } from "../../lib/axios"
import { serialize } from "cookie"

export default async function handler(req, res) {

    axios.post('/register', req.body)
        .then(ask => {
            const serialized = serialize('jwt', ask.data, {
                secure: true,
                httpOnly: true,
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/api'

            })

            res.setHeader('Set-Cookie', serialized).status(200).json('token dodany')
        })
        .catch(err => {
            if (err.response) {
                console.log(err.response.data.errors);
                res.status(206).json(err.response.data.errors)
            }
        })
}
