import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-16 justify-between items-center bg-transparent text-yellow-600'>
        <div>
            <h1 className='text-4xl font-bold'>Apex Traders</h1>
        </div>
        <div className='flex list-none items-center'>
            <Link href='/'><li className='px-3 text-base cursor-pointer'>Home</li></Link>
            <Link href='/about/' passHref><li className='px-3 text-base cursor-pointer'>About</li></Link>
            <Link href='/auth/login'><li className='px-3 text-base cursor-pointer'>Login</li></Link>
        </div>
    </div>
  )
}

export default Navbar