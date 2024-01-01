import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Onyx</title>
        <meta name="description" content="sample project for front-end skil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
      </main>
    </>
  )
}
