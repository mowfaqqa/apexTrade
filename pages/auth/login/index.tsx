import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '../../../components/AuthLayout'
import { InputField } from '../../../components/Inputs'
import Button from '../../../components/Button';

const Login = () => {
  return (
    <div className='bg-stone-900 my-10 rounded-lg py-8'> 
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-50'>Sign In</h1>
        <p className='text-base text-gray-50'>Dont have an account? <span><Link href="/auth/signup" passHref><a className='text-stone-400'> Sign Up</a></Link></span></p>
    </div>
    <div className='max-w-[1200px] mx-auto py-8'>
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
       <Button variant="primary" className="py-2 my-3">
        Sign In
       </Button>
    </div>
    </div>
  )
}

export default Login

Login.getLayout = function getLayout(login: React.ReactElement) {
    return <AuthLayout>{login}</AuthLayout>;
  };