import { useRouter } from 'next/router';
import React from 'react'
import { Box, CheckCircle, Circle, Shield, Triangle } from 'react-feather'
import Button from '../Button';

const SubscriptionPlans = () => {
  const router = useRouter();
  return (
    <div className='py-5 max-w-6xl mx-auto px-10'>
        <h1 className='max-w-[400px] mx-auto py-3  border-b-4 border-yellow-800 text-gray-700 text-center text-4xl font-bold'>Our Investment Plans</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-4'>
          {SUBSCRIPTIONS.map((subs: any, index: number) => (
          <div key={index} className='px-4 mx-3 my-3 bg-white border border-solid border-gray-300 rounded-xl shadow-xl'>
            <div className='text-center py-8'>
            <h3 className={`${subs.text} font-bold text-3xl text-center flex flex-col lg:flex-row items-center justify-center my-3`}> <Shield size={30} className="mx-2"/> {subs.type}</h3>
            <p className='text-gray-500'><span className='font-semibold'> Minimum Deposit</span> : {subs.minimum_amount} USD</p>
            <p className='text-gray-500'><span className='font-semibold'>Maximum Deposit</span> : {subs.maximum_amount} USD</p>
            <p className='text-gray-500'><span className='font-semibold'>Profit </span>: {subs.profit}</p>
            <p className='text-gray-500'><span className='font-semibold'>Instant Profit</span></p>
            <p className='text-gray-500'><span className='font-semibold'>Referral Bonus</span> : {subs.referralBonus}%</p>
            </div>
            <Button 
            className="bg-white text-gray-600 hover:bg-gray-600 hover:text-white mb-4 mx-auto block border border-gray-500"
            onClick={() => {router.push('/subscription')}}
            >Subscribe</Button>
          </div>
          ))}
        </div>
    </div>
  )
}

export default SubscriptionPlans

const SUBSCRIPTIONS = [
  {
    type: 'Marble Plan',
    minimum_amount: 200,
    maximum_amount: 500,
    profit: "20% after 12hours",
    referralBonus: 3,
    text: "text-stone-500",
  },
  {
    type: 'Bronze Plan',
    minimum_amount: 501,
    maximum_amount: 700,
    profit: "20% after 24hours",
    referralBonus: 5,
    text: "text-amber-800",
  },
  {
    type: 'Silver Plan',
    minimum_amount: 701,
    maximum_amount: 1000,
    profit: "20% after 48hours",
    referralBonus: 7,
    text: "text-gray-400",
  },
  {
    type: 'Gold Plan',
    minimum_amount: 1001,
    maximum_amount: 5000,
    profit: "20% after 72hours",
    referralBonus: 10,
    text: "text-yellow-500",
  },
  {
    type: 'Diamond Plan',
    minimum_amount: 5001,
    maximum_amount: 10000,
    profit: "20% after 96hours",
    referralBonus: 15,
    text: "text-indigo-500",
  },
  {
    type: 'Platinum Plan',
    minimum_amount: 10001,
    maximum_amount: "Unlimited",
    profit: "20% after 7 days",
    referralBonus: 20,
    text: "text-green-400",
  },
]