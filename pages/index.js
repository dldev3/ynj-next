import Head from 'next/head'
import Footer from './footer.js';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>YNJ Immigration</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-purple-400">Hello YNJ</h1>

      </main>


      <Footer />


    </div>
  )
}
