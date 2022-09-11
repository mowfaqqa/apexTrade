import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BarChart, CreditCard, DollarSign, FastForward, Lock, PenTool, Users } from 'react-feather'
import Button from '../Button'

const About = () => {
  const router = useRouter()
  return (
    <div className='max-w-7xl mx-auto px-5'>
        <div className='flex flex-col md:flex-row items-center justify-center py-4'>
        <div className='my-4 mx-4'>
            <Image src="/assets/bitcoin.jpg" width={500} height={300} alt="bitcoin" />
            </div>
        <div className='flex-1 px-5'>
        <h2 className='text-center text-4xl font-semibold text-yellow-600 py-2 flex items-center justify-center'><PenTool size={35}/> About Apex Trade <PenTool size={35}/></h2>
            <p className='text-gray-500 py-4 text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, voluptas. Consequatur quod non explicabo in blanditiis! Doloremque natus, fugit vel voluptatibus error nemo eligendi ratione a minus, quam excepturi numquam, rerum praesentium quis facere odit necessitatibus consectetur quia corporis sed veritatis amet. Harum, velit quod consectetur sequi accusamus recusandae soluta voluptate? Cum consequuntur magni repellendus nihil voluptatibus voluptates quod expedita itaque </p>
            <Button
            className="bg-yellow-600 text-white"
            onClick={() => router.push("/about")}
            >Read More</Button>
            </div>
        </div>
        <div className='my-4 py-4'>
        <h2 className='text-center text-4xl font-semibold text-yellow-600 py-2 flex items-center justify-center'>Why Choose Us?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-5'>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <FastForward size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium '>Instant Trading</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae facere. Rerum cumque</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
          <Users size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium'>Instant Account</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae </p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <Lock size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Safe and Secure</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae facere. Rerum cumque .</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
             <DollarSign size={40}/>
            <h4 className='text-center text-gray-900 text-xl font-medium'>Investment Planning</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae facere. Rerum cumque veritatis iusto,</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <BarChart size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Detailed Statistics</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae facere. Rerum cumque veritatis.</p>
          </div>
          <div className='rounded-lg shadow-md p-6 flex flex-col justify-center items-center border border-gray-300'>
            <CreditCard size={40} />
            <h4 className='text-center text-gray-900 text-xl font-medium'>Customer Support</h4>
            <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora ipsa odit est, quod error repudiandae facere. Rerum cumque .</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About