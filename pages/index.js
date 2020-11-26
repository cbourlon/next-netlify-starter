import Head from 'next/head'
import Link from "next/link"
// import Footer from '@components/Footer/Footer'
import Navigation from '@components/Navigation/Navigation'
import Hero from '@components/Hero/Hero'
import { attributes } from '../content/home.md';

export default function Home() {

  let { heroHeading, heroSubHeading } = attributes;
  return (
    <>
      <Head>
        <title>Architecture végétale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <Hero isHomePage={true} title={heroHeading} text={heroSubHeading} />
      </main>

      {/* <Footer /> */}
    </>
  )
}
