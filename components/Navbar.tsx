import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-16 justify-between items-center bg-transparent text-gray-50'>
        <div>
            <h1 className='text-4xl font-bold'>Apex Traders</h1>
        </div>
        <div className='flex list-none items-center'>
            <li className='px-3 text-base'>Home</li>
            <li className='px-3 text-base'>About</li>
            <li className='px-3 text-base'>Login</li>
        </div>
    </div>
  )
}

export default Navbar