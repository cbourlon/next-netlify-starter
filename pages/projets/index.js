import Head from 'next/head'
import Footer from '@components/Footer/Footer'
import { attributes } from '../../content/contact/index.md';
import styles from './contact.module.scss'
import Hero from '@components/Hero/Hero';
import Navigation from '@components/Navigation/Navigation'

export default function Projets() {

    let { heroHeading, heroSubHeading } = attributes;
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main>
                <Hero isHomePage={false} title={heroHeading} text={heroSubHeading} />
            </main>
        </div>
    )
}
