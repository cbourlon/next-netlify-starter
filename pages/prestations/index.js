import Head from 'next/head'
import Footer from '@components/Footer/Footer'
import { attributes } from '../../content/prestations/index.md';
import styles from './prestations.module.scss'
import Hero from '@components/Hero/Hero';
import Navigation from '@components/Navigation/Navigation'

export default function Prestations() {

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
