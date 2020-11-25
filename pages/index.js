import Head from 'next/head'
import Link from "next/link"
// import Footer from '@components/Footer/Footer'
import Navigation from '@components/Navigation/Navigation'
import Hero from '@components/Hero/Hero'

export default function Home() {
  return (
    <>
      <Navigation />
      <Head>
        <title>Architecture végétale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Hero />
      </main>

      {/* <Footer /> */}
    </>
  )
}
