import Head from 'next/head'
import Footer from '@components/Footer/Footer'
import { attributes } from '../../content/contact/index.md';
import styles from './contact.module.scss'
import Navigation from '@components/Navigation/Navigation'

export default function Contact() {

    let { text } = attributes;
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main>
                {/* <ContactContent /> */}
                <p className={styles.text}>
                    {text}
                </p>
            </main>
        </div>
    )
}
