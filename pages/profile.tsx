import React from 'react'
import AppLayout from '../components/AppLayout';
import { InputField } from '../components/Inputs';
import Button from '../components/Button';


const Profile = () => {
  return (
    <div>
        <h1 className='text-center text-base font-semibold lg:text-3xl my-3'>User Profile</h1>
        <div className='max-w-5xl mx-auto'>
            <h2 className='my-3 font-medium text-xl'>Edit Account Details</h2>
            <div>
                <InputField
                    placeholder='name'
                    label='Name'
                    id='name'
                    type='text'
                />
                <InputField
                    placeholder='email'
                    label='Email'
                    id='email'
                    type='email'
                />
                 <div>
                <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800">Save Changes</Button>
            </div>
                </div>
                <div>
                    <h3 className='my-3 font-medium text-lg'>Change Password</h3>
                <InputField
                    placeholder='Password'
                    label='Change Password'
                    id='password'
                    type='password'
                />
                 <div>
                <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800">Save Changes</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile

Profile.getLayout = function getLayout(login: React.ReactElement) {
    return <AppLayout>{login}</AppLayout>;
  };