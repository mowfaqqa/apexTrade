import React from 'react'
import Link from 'next/link'
import { AuthLayout } from '../../../components/AuthLayout'
import { InputField } from '../../../components/Inputs'
import Button from '../../../components/Button';

const SignUp = () => {
  return (
    <div className='bg-stone-900 my-10 rounded-lg py-8 px-4 mx-3'> 
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-yellow-600'>Create An Account</h1>
        <p className='text-base text-yellow-600'>Have an account? <span><Link href="/auth/login" passHref><a className='text-stone-400'> Log In</a></Link></span></p>
    </div>
    <div className='max-w-[1200px] mx-auto py-8'>
        <div className='grid grid-cols-2 gap-2'>
        <InputField 
         required
         id="firstName"
         type="text"
         label="First Name"
         placeholder="Enter your First Name"
        />
        <InputField 
         required
         id="lastName"
         type="text"
         label="Last Name"
         placeholder="Enter Last Name"
         />
         </div>
         <InputField 
         required
         id="email"
         type="email"
         label="Email Address"
         placeholder="your email address"
         />

         <InputField 
         required
         id="dateOfBirth"
         type="date"
         label="Date of Birth"
         placeholder="Date of Birth"
         />
         <InputField 
         required
         id="newPassword"
         type="password"
         label="New Password"
         />

       <Button variant="primary" className="py-2 my-3">
        Submit
       </Button>
    </div>
    </div>
  )
}

export default SignUp
SignUp.getLayout = function getLayout(page: React.ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
  };