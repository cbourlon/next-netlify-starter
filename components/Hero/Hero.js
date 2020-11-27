import React, { useState, useEffect, useRef } from "react";
import styles from '../Hero/Hero.module.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function Hero({ title, text, isHomePage, bgImageSrc }) {

    const [imgIsLoaded, setImgIsLoaded] = useState(false)
    const [imgIsVisible, setImgIsVisible] = useState(false)

    const imgRef = useRef();

    const loaded = () => {
        setImgIsLoaded(true)
    }

    useEffect(() => {
        if (imgIsLoaded) {
            setImgIsVisible(true)
        } else if (imgRef.current && imgRef.current.complete) {
            loaded();
        }
    }, [imgIsLoaded])


    const heroClass = cx({
        hero: true,
        heroImgLoaded: imgIsVisible,
    });

    return (
        <>
            <div className={heroClass}>
                <img ref={imgRef} src={bgImageSrc || `/img/home-1600.jpg`}
                    alt="illustration jardin" className={styles.img} onLoad={loaded} />
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
