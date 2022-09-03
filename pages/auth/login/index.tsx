import Link from 'next/link'
import React from 'react'
import { InputField } from '../../../components/Inputs'

const login = () => {
  return (
    <div className='bg-gray-400'> 
    <div>
        <h1 className='text-xl'>Sign In</h1>
        <p>Dont have an account? <span><Link href="/auth/signup" passHref><a className='text-sky-400'> Sign Up</a></Link></span></p>
    </div>
    <div>
        <InputField 
         required
         id="username"
         type="text"
         label="Username"
         placeholder="Enter your username"
        />
        <InputField 
         required
         id="password"
         type="password"
         label="Password"
         placeholder="Enter password"
        />
       
    </div>
    </div>
  )
}

export default login