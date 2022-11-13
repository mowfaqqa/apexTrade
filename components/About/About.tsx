import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BarChart, CreditCard, DollarSign, FastForward, Lock, PenTool, Users } from 'react-feather'
import Button from '../Button'

const About = () => {
  const router = useRouter()
  return (
    <div className="">
    <div>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center py-4'>
        <div className='my-4 mx-4'>
            <Image src="/assets/bitcoin.jpg" width={400} height={300} alt="bitcoin" />
        </div>
        <div className='col-span-2 px-5'>
        <h2 className='text-center text-4xl font-semibold text-yellow-600 py-2 flex items-center justify-center'><PenTool size={35}/> About Apex Trade <PenTool size={35}/></h2>
            <p className='text-gray-500 py-4 text-justify '>Apextraders is a company established in 2020 with the Sole purpose of exploring new financial terrains and conquering. We are an asset management company stretching across the globe through strategic trading and accurate analysis. Are you looking for the highest returns on your investments? Apextraders- an automated online investment platform is a top secured and profitable option for you.  </p>
            <Button
            className="bg-yellow-600 text-white"
            onClick={() => router.push("/about")}
            >Read More</Button>
            </div>
        </div>
        </div>
        <div className="bg-[url('/assets/cryptochart.jpg')] bg-cover bg-no-repeat my-4 py-4">
          <div className='max-w-7xl mx-auto px-5 text-yellow-600'>
        <h2 className='text-center text-4xl font-semibold text-yellow-600 py-2 flex items-center justify-center'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-5'>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <FastForward size={40}/>
            <h4 className='text-center text-yellow-600 text-xl font-medium '>Instant Trading</h4>
            <p className='text-gray-200 text-justify'>Get your payment instantly as you request for it. There is no fee for Withdrawal of hourly interests.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
          <Users size={40}/>
            <h4 className='text-center text-yellow-600 text-xl font-medium'>Instant Account</h4>
            <p className='text-gray-200 text-justify'>An account is instantly created for you with us in real time as you register with us</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <Lock size={40} />
            <h4 className='text-center text-yellow-600 text-xl font-medium'>Safe and Secure</h4>
            <p className='text-gray-200 text-justify'>Your funds are very safe and secure with us as we use a top notch encrypted and trusted protection against fraudsters.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
             <DollarSign size={40}/>
            <h4 className='text-center text-yellow-600 text-xl font-medium'>Anti DDOS Protection</h4>
            <p className='text-gray-200 text-justify'>We are using one of the most professional and trsusted DDOs Protection and mitigation provider.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <BarChart size={40} />
            <h4 className='text-center text-yellow-600 text-xl font-medium'>Detailed Statistics</h4>
            <p className='text-gray-200 text-justify'>We provide a detailed graphical statistics of how your transactions are being carried out.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <CreditCard size={40} />
            <h4 className='text-center text-yellow-600 text-xl font-medium'>Customer Support</h4>
            <p className='text-gray-200 text-justify'>Our customer service is great having professionals that are dedicated and accessible anytime you require any form of assistance.</p>
          </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default About