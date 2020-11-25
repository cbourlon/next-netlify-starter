import Head from 'next/head'
import Footer from '@components/Footer/Footer'
import { attributes } from '../../content/contact/index.md';
import styles from './contact.module.scss'

export default function Contact() {

    let { text } = attributes;
    console.log('attributes', attributes)
    console.log('text', text)
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <main>
                {/* <ContactContent /> */}
                <p className={styles.text}>
                    {text}
                </p>
            </main>
        </div>
    )
}
