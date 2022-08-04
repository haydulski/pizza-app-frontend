import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { gsap } from "gsap"

import ladingImg from '../../public/landing-img-min.png'

export default function Home() {

    const img = useRef()

    useEffect(() => {

        gsap.timeline().to(img.current, 1, { y: -100, opacity: 1 }, "0.1");
    }, [])

    return (
        <>
            <Head>
                <title>Pizza Time App</title>
                <meta name="description" content="Next app pizza application" />
            </Head>

            <div className="max-w-6xl mx-auto pt-36 lg:pt-60 translate-y-20 opacity-0 text-center" ref={img}>
                <Image src={ladingImg} alt="Pizza banner"
                    height={500} />
            </div>
        </>
    )
}
