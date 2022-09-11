import Link from 'next/link'
import React from 'react'
import Hamburger from './Hamburger/Hamburger'

const ResNavbar = () => {
  return (
    <div className='flex md:hidden py-1 px-4 justify-between items-center bg-transparent text-yellow-600'>
        <div>
            <h1 className='text-4xl font-bold'>Apex Traders</h1>
        </div>
        <div>
            <Hamburger />
        </div>
    </div>
  )
}

export default ResNavbar