import Image from 'next/image'
import React from 'react'

const Consultants = () => {
  return (
    <div className="bg-[url('/assets/barchart.jpg')] bg-cover bg-no-repeat text-white pt-4 pb-12">
        <h2 className='text-4xl font-bold text-center mb-4 py-5 max-w-2xl mx-auto text-yellow border-b-4 border-yellow-800'>Our Consultants</h2>
        <p className='text-center text-white text-lg'>A community founded to revolutionize trading of crypto for our clients</p>
        <div className='grid grid-cols-1 justify-center items-center md:grid-cols-3 max-w-7xl mx-auto my-4 px-7'>
            <span className='my-3'>
                <Image src="/assets/person-1.jpg" width={350} height={300} alt="person"/>
                <div>
                    <h4>Samuel Smith</h4>
                    <p>Marketing Consultant</p>
                </div>
            </span>
            <span className='my-3'>
                <Image src="/assets/person-3.jpg" width={350} height={300} alt="person"/>
                <div>
                    <h4>Rebecca Holding</h4>
                    <p>Analyst Expert</p>
                </div>
            </span>
            <span className='my-3'>
                <Image src="/assets/person-2.jpg" width={350} height={300} alt="person"/>
                <div>
                    <h4>Samuel Smith</h4>
                    <p>Marketing Consultant</p>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Consultants