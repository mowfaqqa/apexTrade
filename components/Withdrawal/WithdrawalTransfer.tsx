import React from 'react'
import { AlertCircle } from 'react-feather'
import Button from '../Button';
import { InputField, SelectField } from '../Inputs';
import { notifySuccess, notifyError } from '../../lib/notifications';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addDoc, collection, } from "firebase/firestore"
import { db } from '../../lib/firebase';

const WithdrawalTransfer = () => {
    const withdrawalData = collection(db, "dashboard")
    const createBankWithdrawalRequest = async (values : any) => {
        await addDoc(withdrawalData, values)
    }
    const formik = useFormik({
        initialValues : {
            accountNumber : '',
            accountName : '',
            bankName : '',
            amount : '',

        },
        validationSchema : yup.object({
            walletAddress : yup.string().required().label('Wallet Address'),
            amount: yup.number().required().label('Amount')
        }),
        onSubmit: (values) => {
            createBankWithdrawalRequest(values).then(() => notifySuccess('Withdrawal Request Sent Successfully')).catch(() => notifyError("Ops something went wrong sending request"))
        }
    })
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
            id='accountNumber'
            placeholder='Enter your account number here...'
            type='text'
            error={!!formik.touched.accountNumber && !!formik.errors.accountNumber}
            helperText={!!formik.touched.accountNumber && formik.errors.accountNumber}
            inputProps={{
              value: formik.values.accountNumber,
              onChange: formik.handleChange("accountNumber"),
              onBlur: formik.handleBlur("accountNumber"),
            }}
        />
        <InputField 
            label='Account Name'
            id='accountName'
            placeholder='Enter your account name here...'
            type='text'
            error={!!formik.touched.accountName && !!formik.errors.accountName}
            helperText={!!formik.touched.accountName && formik.errors.accountName}
            inputProps={{
              value: formik.values.accountName,
              onChange: formik.handleChange("accountName"),
              onBlur: formik.handleBlur("accountName"),
            }}
        />
        <InputField 
            label='Bank Name'
            id='bankName'
            placeholder='Enter your bank name here...'
            type='text'
            error={!!formik.touched.bankName && !!formik.errors.bankName}
            helperText={!!formik.touched.bankName && formik.errors.bankName}
            inputProps={{
              value: formik.values.bankName,
              onChange: formik.handleChange("bankName"),
              onBlur: formik.handleBlur("bankName"),
            }}
        />
        <InputField 
        label='Amount'
        id='amount'
        placeholder='enter amount'
        type='number'
        error={!!formik.touched.amount && !!formik.errors.amount}
        helperText={!!formik.touched.amount && formik.errors.amount}
        inputProps={{
          value: formik.values.amount,
          onChange: formik.handleChange("amount"),
          onBlur: formik.handleBlur("amount"),
        }}
        />
        <div>
            <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800" onCLick={formik.handleSubmit}>Request Withdrawal</Button>
        </div>
    </div>
    </div>
</div>
  )
}

export default WithdrawalTransfer