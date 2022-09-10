import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import SubscriptionPlans from '../components/SubscriptionPlans/SubscriptionPlans'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apex Traders</title>
        <meta name="description" content="Apextraders- deal site to trade your crypto currencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] bg-[url('/assets/showcase.jpg')] bg-cover bg-no-repeat">
        <Navbar />
        <div className='flex justify-center items-center mt-52 w-[50%] mx-36'>
          <h1 className='text-yellow-600 text-5xl font-bold'>APEXTRADER- TRADING EFFICIENTLY, SECURELY AND RELIABLE</h1>
        </div>
      </div>
      <SubscriptionPlans />
    </div>
  )
}

export default Home
