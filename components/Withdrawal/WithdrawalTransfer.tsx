import React from 'react'
import { AlertCircle } from 'react-feather'
import Button from '../Button';
import { InputField, SelectField } from '../Inputs';

const WithdrawalTransfer = () => {
  return (
     <div className='px-5'>
    <h1 className='font-bold text-base lg:text-2xl text-center'>Withdrawal Request with Bank Transfer</h1>
    <div>
    <p className='p-2 bg-orange-300 flex items-start  text-orange-500 text-lg font-medium'>
        <span className='mx-1 py-0.5'><AlertCircle size={20}/></span> Please note that minimum withdrawal amount is $500. contact support@apextrade.com for a more detailed description. Your account will be credited once payment is confirmed
    </p>
    <div>
        <h2 className='font-medium text-xl my-3'>Account Details</h2>
        <InputField 
            label='Account Number'
            id='walletAddress'
            placeholder='Enter your account number here...'
            type='text'
        />
        <InputField 
            label='Account Name'
            id='acccountName'
            placeholder='Enter your account name here...'
            type='text'
        />
        <InputField 
            label='Bank Name'
            id='bankName'
            placeholder='Enter your bank name here...'
            type='text'
        />
        <InputField 
        label='Amount'
        id='amount'
        placeholder='enter amount'
        type='number'
        />
        <SelectField id='withdrawalType' label='Withdrawal Type'>
            <option value="bankTransfer" selected>Bank Transfer</option>
        </SelectField>
        <div>
            <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800">Request Withdrawal</Button>
        </div>
    </div>
    </div>
</div>
  )
}

export default WithdrawalTransfer