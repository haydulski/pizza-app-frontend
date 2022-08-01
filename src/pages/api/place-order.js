import { axios } from "../../lib/axios"

export default async function handler(req, res) {

    const { cookies } = req;
    if (!cookies.jwt) return res.status(401).json('you not logged')

    const bearerToken = 'Bearer ' + cookies.jwt
    axios.post('/api/order', req.body, {
        headers: {
            "Authorization": bearerToken
        },

    })
        .then(ask => {
            const data = ask.data
            res.status(200).json(data)
        }
        )
        .catch(err => {
            res.status(206).json(err.response.data.errors)
        })
}
