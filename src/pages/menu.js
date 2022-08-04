import React from 'react'
import SingleMenuItem from '../components/SingleMenuItem'
import { axios } from '../lib/axios'
import Head from 'next/head'

export async function getStaticProps() {

    const res = await axios('api/pizza')
    const data = await res.data

    return { props: { data }, revalidate: 60 }
}


const Menu = ({ data }) => {

    const items = () => {
        return data.map(item =>
            <SingleMenuItem
                key={item.id}
                imgSrc={item.thumbnail}
                title={item.name}
                price={item.price}
                slug={item.slug} />
        )
    }

    return (
        <div className="max-w-7xl mx-auto bg-orange px-2 lg:px-10 py-20 rounded-md mt-20 shadow-2xl mb-48">
            <Head>
                <title>Pizza | Menu</title>
                <meta name="description" content="Pizza menu. Find your best pizza for meal"></meta>
            </Head>

            <h1 className='text-3xl lg:text-6xl font-bold text-green'>Our Menu</h1>
            <div className='container grid gap-1 lg:gap-10 xl:grid-cols-2 pt-20 lg:grid-cols-1'>
                {items()}
            </div>
        </div>
    )
}

export default Menu;
