import React from 'react'
import { AlertCircle, ChevronRight } from 'react-feather'
import Button from '../Button'
import { InputField } from '../Inputs'

const BankTransfer = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='font-semibold flex items-center text-2xl'> <ChevronRight size={20}/> <span className='mx-1'>BANK TRANSFER</span></h1>
        <h2 className='text-base lg:text-2xl font-bold px-2 py-4'>kjiuwfr92f78384fvit382t7297fi9028fnfiwg4202847gfii</h2>
        <p className='px-2 mb-2'>To make payment from your trading accoutnt please use our wallet address above and click on <span className='text-orange-500'>Make payment</span></p>
        <div>
            <p className='p-2 bg-orange-300 flex items-start  text-orange-500 text-lg font-medium'>
                <span className='mx-1 py-0.5'><AlertCircle size={20}/></span> Please note that minimum fund amount is $500. contact support@apextrade.com for a more detailed description. Your account will be credited once payment is confirmed
            </p>
            <div className='mt-5'>
                <InputField 
                label='Name'
                id='depositName'
                placeholder='name....'
                type='text'
                />
                <InputField 
                label='Email'
                id='email'
                placeholder='email address....'
                type='text'
                />
                <InputField 
                label='Deposit Amount'
                id='depositAmount'
                placeholder='amount'
                type='number'
                />
                <InputField 
                label='Senders Wallet Address'
                id='sendersWalletAddress'
                placeholder='Enter your wallet address'
                />
                <InputField 
                label='Description (optional)'
                id='description'
                placeholder='Enter Description...'
                />

                <div>
                    <Button className="py-2 my-3 bg-orange-300 text-white hover:bg-orange-800">Submit</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankTransfer