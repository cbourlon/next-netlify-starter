import React, { useState, useEffect } from "react";
import Link from 'next/link'
import styles from '../Hero/Hero.module.scss'
import Image from 'next/image'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Hero({ title, text, isHomePage, bgImageSrc }) {

    const [imgIsLoaded, setImgIsLoaded] = useState(false)
    const [imgIsVisible, setImgIsVisible] = useState(false)

    const loaded = (e) => {
        console.log('e', e)
        setImgIsLoaded(true)
    }

    useEffect(() => {
        if (imgIsLoaded) {
            setImgIsVisible(true)
        }

    }, [imgIsLoaded])

    console.log('cx', cx)
    console.log('imgIsVisible', imgIsVisible)
    const heroClass = cx({
        hero: true,
        heroImgLoaded: imgIsVisible,
    });

    console.log('heroClass', heroClass)

    return (
        <>
            <div className={heroClass}>
                <Image
                    src={bgImageSrc || `/img/home-1600.jpg`}
                    alt="illustration jardin"
                    layout='fill'
                    onLoad={loaded}
                />
                <div className={styles.container}>
                    <div className={styles.text}>

                        {/* <HomeContent /> */}
                        {
                            isHomePage ?
                                (<img src="/img/home.svg" alt="Architecture végétale" className={styles.h1_logo} />)
                                :
                                (<h1 className={styles.h1}>
                                    {title}
                                </h1>)
                        }
                        <p className={styles.p}>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
