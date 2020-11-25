// import "./Hero.scss"
import Link from 'next/link'
import styles from '../Hero/Hero.module.scss'
import Image from 'next/image'
import cx from 'classnames';
import { attributes, react as HomeContent } from '../../content/home.md';

export default function Hero() {

    let { heroHeading, heroSubHeading } = attributes;
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        {/* <h1 className={styles.h1}>
                            {heroHeading}
                        </h1> */}
                        <HomeContent />
                        <img src="/images/home.svg" alt="Architecture végétale" className={styles.h1_logo} />
                        <p>
                            {heroSubHeading}
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}
