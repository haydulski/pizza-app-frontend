import React, { useEffect } from 'react'
import SingleItem from '../components/SingleMenuItem'
import { axios } from '../lib/axios'

export async function getStaticProps() {
    // Fetch data from external API
    const res = await axios('api/pizza')
    const data = await res.data

    // Pass data to the page via props
    return { props: { data }, revalidate: 60 }
}


const Menu = ({ data }) => {

    const items = () => {
        return data.map(item => {
            return <SingleItem key={item.id} imgSrc={item.thumbnail} title={item.name} price={item.price} slug={item.slug} />
        })
    }
    return (
        <div className="max-w-7xl mx-auto bg-orange px-10 py-20 rounded-md mt-20 shadow-2xl mb-48">
            <h1 className='text-6xl font-bold text-green'>Our Menu</h1>
            <div className='container grid gap-10 xl:grid-cols-2 pt-20 lg:grid-cols-1'>
                {items()}
                {/* {<SingleItem imgSrc={url} /> || <Skeleton height={500} baseColor='#f2e6df' highlightColor='#D6F2C9' />} */}
            </div>

        </div>
    );
}

export default Menu;
