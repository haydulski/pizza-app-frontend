import { NextResponse } from "next/server"

export default function middleware(req, res) {

    let verify = req.cookies.get('vendor')

    if (!verify && req.url.includes('/account')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if ((verify && req.url.includes('/login')) || (verify && req.url.includes('/register'))) {
        return NextResponse.redirect(new URL('/account', req.url))
    }

}