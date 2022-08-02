import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SingleItem = ({ imgSrc, title, price, slug }) => {


    return (
        <div className='single-item
         min-w-[200px] lg:min-w-[500px] min-h-[500px] overflow-hidden
        bg-light-gray relative rounded-md shadow-lg'>
            <Image src={imgSrc} width='500' height='500' layout="fill" objectFit="cover" />
            <div className="desc absolute bottom-[10%]
             -left-2 min-w-[120%] bg-dark-orange
              px-5 py-10 opacity-90 -rotate-2">
                <h3 className='text-green font-bold uppercase text-2xl lg:text-4xl pb-5'>{title}</h3>
                <Link href={'pizza/' + slug}><a className="text-green text-2xl hover:text-red
                 transition-color duration-100 cursor-pointer">details...</a>
                </Link>
                <h4 className='font-bold text-2xl lg:text-6xl
                 text-light-gray absolute right-44 lg:right-56 xl:right-40 bottom-10'>${price}</h4>
            </div>
        </div>
    );
}

export default SingleItem;