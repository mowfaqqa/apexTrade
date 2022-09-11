import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About/About'
import Button  from '../components/Button'
import Consultants from '../components/Consultants/Consultants'
import Procedure from '../components/HowItWorks/Procedure'
import Navbar from '../components/Navbar'
import SubscriptionPlans from '../components/SubscriptionPlans/SubscriptionPlans'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import ResNavbar from '../components/ResponsiveNavbar';
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Apex Traders</title>
        <meta name="description" content="Apextraders- deal site to trade your crypto currencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] bg-[url('/assets/showcase.jpg')] bg-cover bg-no-repeat">
        <Navbar />
        <ResNavbar />
        <div className='flex flex-col justify-center mt-32 md:mt-52 w-[50%] mx-8 md:mx-36'>
          <h1 className='text-yellow-600 text-5xl font-bold'>APEXTRADER- TRADING EFFICIENTLY, SECURELY AND RELIABLE</h1>
          <div>
            <Button
            className="bg-yellow-500 text-white mt-4"
            onClick={() => router.push("/auth/signup")}
            >JOIN US</Button>
            
          </div>
        </div>
      </div>
      <About />
      <Procedure />
      <SubscriptionPlans />
      <Consultants />
      <Footer />
    </div>
  )
}

export default Home
