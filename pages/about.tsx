import Image from 'next/image';
import React from 'react'
import { PenTool, CreditCard, BarChart, DollarSign, Lock, Users, FastForward } from 'react-feather';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ResNavbar from '../components/ResponsiveNavbar';

const AboutPage = () => {
  return (
    <>
    <div className="h-full bg-[url('/assets/barchart.jpg')] bg-cover bg-no-repeat">
        <Navbar />
        <ResNavbar />
        <div className='flex flex-col justify-center mt-28 md:mt-52 w-[50%] mx-8 md:mx-36'>
            <h1 className='text-white text-7xl font-bold'>About Us</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center py-4'>
        <div className='my-4 mx-auto px-4'>
            <Image src="/assets/bitcoin.jpg" width={500} height={300} alt="bitcoin" />
            </div>
        <div className='px-4'>
        <h2 className='text-center text-4xl font-semibold text-orange-400 py-2 flex items-center justify-center'><PenTool size={35}/> About Apex Trade <PenTool size={35}/></h2>
          <p className='text-gray-300 py-4 text-justify '>Apextraders is a company established in 2020 with the Sole purpose of exploring new financial terrains and conquering. We are an asset management company stretching across the globe through strategic trading and accurate analysis.

          Are you looking for the highest returns on your investments? Apextraders- an automated online investment platform is a top secured and profitable option for you. 




          We are a trading company specialized in cryptocurrency trading, especially Bitcoin and Usdt Among many others. We also engage in binary options as well as forex trading, which is the largest financial market and the only market known to operate 24/7. 

          the team of professional traders focusing mainly on Bitcoin and other cryptocurrencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our finances, we can deliver steady returns for our investors.

          We stand as a strong bridge eliminating the gap between financial freedom and bankruptcy generating pasive income on a consistent basis within a safe, secure and encrypted personalized wallet address.


          The foreign exchange market alone has a daily turnover of about $5.6 trillion and more, and we guarantee you a piece of the pie. What we do is trade for our clients who are inexperienced in the market and cannot make the best trading decisions due to the complex nature of the market and the need for quick analytical skills to make a profit. We trade for our clients and they monitor the progress of the investment as it progresses.

          We have a range of long term strategies aimed at achieving a consistent stream of income to suite whatever size of investment portfolio you wish to have.


          We intend to generate passive cash flow for our investor to eliminate the reliance on a day&apos;s work to meet the basic needs of our customers. We are here to improve your standard of living as our investor so you can maximize their full potential with us.



          With Apextraders, investors choose one of our three simple investment designs, make a deposit and sit back while our experts take the control. Apextradersofficial website is fully automated. Our clients can enjoy the first time experience. If you are looking for a steady and secure investment platform, then Apextraders is the best option available right now. 
          Join apextraders today and let our professional service help you succeed in this volatile crypto markets! </p>
            </div>
        </div>
    </div>
    <div className='my-4 py-4'>
        <h2 className='text-center text-4xl font-semibold text-yellow-600 py-2 flex items-center justify-center'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-5'>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <FastForward size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium '>Instant Trading</h4>
            <p className='text-gray-500 text-justify'>Get your payment instantly as you request for it. There is no fee for Withdrawal of hourly interests</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
          <Users size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium'>Instant Account</h4>
            <p className='text-gray-500 text-justify'>An account is instantly created for you with us in real time as you register with us</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <Lock size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Safe and Secure</h4>
            <p className='text-gray-500 text-justify'>Your funds are very safe and secure with us as we use a top notch encrypted and trusted protection against fraudsters.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
             <DollarSign size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium'>Anti DDOS Protection</h4>
            <p className='text-gray-500 text-justify'>We are using one of the most professional and trusted DDOs Protection and mitigation provider.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <BarChart size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Detailed Statistics</h4>
            <p className='text-gray-500 text-justify'>We provide a detailed graphical statistics of how your transactions are being carried out.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <CreditCard size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Customer Support</h4>
            <p className='text-gray-500 text-justify'>Our customer service is great having professionals that are dedicated and accessible anytime you require any form of assistance.</p>
          </div>
        </div>
        </div>
    <Footer />
    </>
  )
}

export default AboutPage