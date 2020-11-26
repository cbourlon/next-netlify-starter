// import "./Hero.scss"
import Link from 'next/link'
import styles from '../Hero/Hero.module.scss'
import Image from 'next/image'
import cx from 'classnames';


export default function Hero({ title, text, isHomePage }) {
    return (
        <>
            <div className={styles.hero}>
                <Image
                    src="/images/home-1600.jpg"
                    alt="illustration jardin"
                    layout='fill'
                />
                <div className={styles.container}>
                    <div className={styles.text}>

                        {/* <HomeContent /> */}
                        {
                            isHomePage ?
                                (<img src="/images/home.svg" alt="Architecture végétale" className={styles.h1_logo} />)
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
