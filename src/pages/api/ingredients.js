// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { axios } from "../../lib/axios"


export default async function handler(req, res) {
    try {
        const ask = await axios.get('/api/ingredients/categories')
        res.status(200).json(ask.data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
