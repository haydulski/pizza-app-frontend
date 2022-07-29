import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { axios } from '../../lib/axios'

export async function getStaticPaths() {
    const res = await axios('api/pizza')
    const data = await res.data

    const paths = data.map((pizza) => ({
        params: { slug: pizza.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    const res = await axios('api/pizza/' + params.slug)
    const data = await res.data
    if (res.status !== 200) return { props: { data: 'pizza missing' }, revalidate: 10 }
    return { props: { data } }
}

const Pizza = ({ data }) => {

    console.log(data);

    return (
        <div className='container max-w-7xl bg-light-gray py-20 px-10 mx-auto mt-12'>
            <h1 className='text-orange font-semibold uppercase sm:text-4xl md:text-5xl xl:text-6xl'>{data.name}</h1>
            <div className='desc grid gap-2 lg:grid-cols-2 md:grid-cols-1 p-4  mt-10'>
                <div className='pizza-image min-h-[500px]  pr-4 flex items-center
                 rounded-md overflow-hidden'>
                    {<Image src={data.img} className='top-3'
                        height={800} width={800} /> || <Skeleton height={500} baseColor='#f2e6df' highlightColor='#D6F2C9' />}
                </div>

                <div className='px-8 border-l-2
                 border-orange'>
                    <h3 className='font-semibold text-3xl text-orange'>Ingredients:</h3>
                    <ul className="mt-6 text-orange text-3xl">
                        {data.ingredient_1 && <li>- {data.ingredient_1}</li>}
                        {data.ingredient_2 && <li>- {data.ingredient_2}</li>}
                        {data.ingredient_3 && <li>- {data.ingredient_3}</li>}
                        {data.ingredient_4 && <li>- {data.ingredient_4}</li>}
                        {data.ingredient_5 && <li>- {data.ingredient_5}</li>}
                        {data.ingredient_6 && <li>- {data.ingredient_6}</li>}
                    </ul>

                    <p className='price uppercase font-bold text-dark-orange text-5xl pt-10'>${data.price}</p>
                    <button className='bg-red hover:bg-dark-orange p-4 rounded-xl text-green
                     font-semibold text-3xl mt-40 ml-[50%]'>
                        Add to order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pizza;