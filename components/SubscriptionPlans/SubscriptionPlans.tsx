import React from 'react'
import { CheckCircle } from 'react-feather'
import Button from '../Button';

const SubscriptionPlans = () => {
  return (
    <div className='py-5 max-w-6xl mx-auto px-10'>
        <h1 className='text-gray-700 text-center text-4xl font-bold'>Our Investment Plans</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-4'>
        <div className='px-4 mx-3 bg-white border border-solid border-gray-300 rounded-xl'>
            <div className='text-center py-8'>
            <h3 className='text-yellow-600 font-semibold text-2xl text-center flex items-center justify-center mt-3'> <CheckCircle size={25} className="mx-2"/> Starter Plan</h3>
            <p className='text-gray-500'>Minimum Deposit : $10,000</p>
            <p className='text-gray-500'>Profit : 1,000, 000</p>
            </div>
            <Button 
            className="bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white mb-4 mx-auto block border border-yellow-500"
            >Subscribe</Button>
        </div>
        <div className='px-4 mx-3 bg-white border border-solid border-gray-300 rounded-xl'>
            <div className='text-center py-8'>
            <h3 className='text-yellow-600 font-semibold text-2xl text-center flex items-center justify-center'> <CheckCircle size={25} className="mx-2" /> Bronze Plan</h3>
            <p className='text-gray-500'>Minimum Deposit : $10,000</p>
            <p className='text-gray-500'>Profit : 1,000, 000</p>
            </div>
            <Button 
            className="bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white mb-4 mx-auto block border border-yellow-500"
            >Subscribe</Button>
        </div>
        <div className='px-4 mx-3 bg-white border border-solid border-gray-200 rounded-xl'>
            <div className='text-center py-8'>
            <h3 className='text-yellow-600 font-semibold text-2xl text-center flex items-center justify-center'> <CheckCircle size={25} className="mx-2"/> Premium Plan</h3>
            <p className='text-gray-500'>Minimum Deposit : $10,000</p>
            <p className='text-gray-500'>Profit : 1,000, 000</p>
            </div>
            <Button 
            className="bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white mb-4 mx-auto block border border-yellow-500"
            >Subscribe</Button>
        </div>
        </div>
    </div>
  )
}

export default SubscriptionPlans