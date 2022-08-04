import { serialize } from "cookie"

export default async function handler(req, res) {

    res.setHeader('Set-Cookie', [
        serialize(
            'jwt', '', {
            expires: new Date(0),
            path: '/api'
        }
        ),
        serialize(
            'vendor', '', {
            expires: new Date(0),
            path: '/'
        }
        )
    ])

    return res.status(200).json({
        success: 'Successfully logged out'
    })
}
