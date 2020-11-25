import Head from 'next/head'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Get started by editing <code>pages/index.js</code>
                </p>
            </main>

            <Footer />
        </div>
    )
}
