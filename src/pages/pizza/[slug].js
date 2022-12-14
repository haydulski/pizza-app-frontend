import React from 'react'
import Image from 'next/image'
import 'react-loading-skeleton/dist/skeleton.css'
import { axios } from '../../lib/axios'
import { useDispatch } from 'react-redux'
import { displayMessage } from '../../lib/displayMessage'
import Head from 'next/head'

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

    const dispatch = useDispatch()

    const product = {
        name: data.name,
        pizza_id: data.id,
        is_custom: 0,
        amount: 1,
        price: data.price,
        dough: 'medium',
        dough_size: '30',
        double_cheese: 'no',
        ingredient_1: data.ingredient_1,
        ingredient_2: data.ingredient_2,
        ingredient_3: data.ingredient_3,
        ingredient_4: data.ingredient_4,
        ingredient_5: data.ingredient_5,
        ingredient_6: data.ingredient_6,
    }

    return (
        <div className='container max-w-7xl bg-light-gray py-20 px-10 mx-auto mt-12'>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content="Best pizza in all country is ready to order for you!"></meta>
            </Head>
            <h1 className='text-orange font-semibold uppercase text-4xl lg:text-6xl'>{data.name}</h1>
            <div className='desc grid gap-2 lg:grid-cols-2 md:grid-cols-1 p-4  mt-10'>
                <div className='pizza-image min-h-[200px] pb-8 lg:min-h-[500px]  pr-4 flex items-center
                 rounded-md overflow-hidden'>
                    <Image src={data.img} className='top-3'
                        height={800} width={800} />
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
                    <button className='bg-red hover:bg-dark-orange p-4 rounded-xl text-gray-200
                     font-semibold text-xl lg:text-3xl mt-10 lg:mt-40 ml-2 lg:ml-[50%]'
                        onClick={() => {
                            dispatch({ type: 'ADD_ITEM', payload: product })
                            displayMessage("product added to cart!")
                        }}>
                        Add to order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pizza;