import Image from 'next/image'
import React from 'react'

const Procedure = () => {
  return (
    <div className="bg-[url('/assets/showcase.jpg')] bg-cover bg-no-repeat text-white pt-4 pb-12"> 
        <h1 className='text-4xl font-bold text-center mb-4 py-5 max-w-2xl mx-auto text-yellow border-b-4 border-yellow-800'>How It Works</h1>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 px-4'>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='text-gray-400 text-end text-xl font-semibold '>STEP 1</h2>
                <Image src="/assets/newcontact.png" width={50} height={50} alt="sign-up"/>
                <h2 className='text-gray-500 text-3xl'>REGISTER</h2>
            </div>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='text-gray-400 text-end text-xl font-semibold'>STEP 2</h2>
                <Image src="/assets/project.png" width={50} height={50} alt="sign-up"/>
                <h2 className='text-gray-500 text-3xl'>INVEST</h2>
            </div>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='text-gray-400 text-end text-xl font-semibold'>STEP 3</h2>
                <Image src="/assets/manWithmoney.png" width={50} height={50} alt="sign-up"/>
                <h2 className='text-gray-500 text-3xl'>PROFIT GROWS</h2>
            </div>
        </div>
    </div>
  )
}

export default Procedure