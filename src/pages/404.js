import Head from "next/head"

export default function Custom404() {
    return (
        <div className="max-w-7xl mx-auto text-center">
            <Head>
                <title>Pizza | 404</title>
                <meta name="description" content="404 error page"></meta>
            </Head>

            <h1 className="font-semibold text-7xl text-orange mt-24">404 - Page Not Found</h1>
        </div>
    )
}