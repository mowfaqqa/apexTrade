import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-4 mb-5 justify-between items-center bg-transparent text-gray-50'>
        <div>
            <h1>Apex Traders</h1>
        </div>
        <div>
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
        </div>
    </div>
  )
}

export default Navbar