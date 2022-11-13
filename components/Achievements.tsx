import Image from 'next/image'
import React from 'react'
import { Calendar, CreditCard, Layers, UserPlus } from 'react-feather'

const Achievements = () => {
  return (
    <div className=''>
        <h1 className='text-center text-4xl font-semibold'>Our Achievements</h1>
        <div className='max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 my-3 gap-4'>
          <div className='text-center bg-white'>
          <div className=''><Calendar size={40} className='block mx-auto text-yellow-500'/></div>
            <h3 className='text-2xl font-semibold text-yellow-500'>1356</h3>
            <h4 className='font-bold p-2 rounded-lg bg-yellow-500 text-white'>Running Days</h4>
          </div>
          <div className='text-center  bg-white'>
          <div className=''><UserPlus size={40} className='block mx-auto text-gray-500'/></div>
            <h3 className='text-2xl font-semibold text-gray-500'>3000</h3>
            <h4 className='font-bold p-2 rounded-lg bg-gray-500 text-white'>Current Investors</h4>
          </div>
          <div className='text-center bg-white'>
            <div className=''><Layers size={40} className='block mx-auto text-indigo-500'/></div>
            <h3 className='text-2xl font-semibold text-indigo-500'>2186</h3>
            <h4 className='font-bold p-2 rounded-lg bg-indigo-500 text-white'>Total Withdrawals</h4>
          </div>
          <div className='text-center bg-white'>
            <div className=''><CreditCard size={40} className='block mx-auto text-green-500'/></div>
            <h3 className='text-2xl font-semibold text-green-500'>$30,000</h3>
            <h4 className='font-bold p-2 rounded-lg bg-green-600 text-white'>Total Deposit</h4>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center">
          <div className='md:col-span-2 text-center'><Image src="/assets/bitcoin3d.png" width={900} height={300} alt='crypto-currency'/></div>
          <div className='text-center'><Image src="/assets/Apexcert-img1.png" width={500} height={300} alt='crypto-currency'/></div>
        </div>
    </div>
  )
}

export default Achievements