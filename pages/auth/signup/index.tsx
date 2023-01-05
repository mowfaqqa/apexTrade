import React from 'react'
import Link from 'next/link'
import { AuthLayout } from '../../../components/AuthLayout'
import { InputField, SelectField } from '../../../components/Inputs'
import Button from '../../../components/Button';
import { getAuth } from "firebase/auth";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useRouter } from 'next/router';
import { app, database } from '../../../lib/firebase';
import { ref, set } from 'firebase/database';
import { notifySuccess, notifyError } from '../../../lib/notifications';
import { nationalities } from '../../../lib/constant';
import { useAuth } from '../../../lib/context/authContext';

const SignUp = () => {
  const auth = getAuth(app)
  const router = useRouter();
  const { signUp } = useAuth();
  const formik = useFormik({
    initialValues : {
      name: "",
      email: "",
      newPassword: "",
      walletAddress: "",
      nationality: "",
      gender: ""
    },
    validationSchema : yup.object({
      email: yup.string().email().required("Email is required").label("Email Address"),
      name: yup.string().required().label("Name"),
      walletAddress: yup.string().required().label("Wallet Address"),
      newPassword: yup
      .string()
      .label("New password")
      .min(8)
      .max(32)
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  }),
  onSubmit: (values) => {
    const email = values.email;
    const password = values.newPassword
    const name = values.name
    signUp(email, password,)
  .then((userCredential : any) => {
    // Signed in 
    const user = userCredential?.user;
    set(ref(database, 'users/' + user.uid), {
      name : name,
      email : email
    })
    notifySuccess("Signup successfull")
    router.push('/dashboard');
    // ...
  })
  .catch((error : any) => {
    // const errorCode = error.code;
    const errorMessage = error?.message;
    notifyError(errorMessage)
    // ..
  });
  }
})
  return (
    <div className='bg-stone-900 my-10 rounded-lg py-8 px-4 mx-3'> 
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-yellow-600'>Create An Account</h1>
        <p className='text-base text-yellow-600'>Have an account? <span><Link href="/auth/login" passHref><a className='text-stone-400'> Log In</a></Link></span></p>
    </div>
    <div className='max-w-[1200px] mx-auto py-8'>
        <div className='grid grid-cols-1 gap-2'>
        <InputField 
         required
         id="name"
         type="text"
         label="Name"
         placeholder="First name, Surname"
         error={!!formik.touched.name && !!formik.errors.name}
         helperText={!!formik.touched.name && formik.errors.name}
         inputProps={{
           value: formik.values.name,
           onChange: formik.handleChange("name"),
           onBlur: formik.handleBlur("name"),
         }}
        />
         </div>
         <InputField 
         required
         id="email"
         type="email"
         label="Email Address"
         placeholder="your email address"
         error={!!formik.touched.email && !!formik.errors.email}
         helperText={!!formik.touched.email && formik.errors.email}
         inputProps={{
           value: formik.values.email,
           onChange: formik.handleChange("email"),
           onBlur: formik.handleBlur("email"),
         }}
         />
         <div className="relative my-5 text-yellow-600">
            <label htmlFor="gender" className="mr-8">
              <input
                className="mr-2"
                type="radio"
                name="gender"
                value="male"
                onChange={formik?.handleChange}
              />
              Male
            </label>
            <label htmlFor="gender">
              <input
                className="mr-2"
                type="radio"
                name="gender"
                value="female"
                onChange={formik?.handleChange}
              />
              Female
            </label>
          </div>
          <SelectField
            type="text"
            id="nationality"
            label="Nationality"
            className="mb-3"
            error={
              !!formik?.touched?.nationality && !!formik?.errors?.nationality
            }
            inputProps={{
              value: formik?.values?.nationality,
              onChange: formik?.handleChange("nationality"),
              onBlur: formik?.handleBlur("nationality"),
            }}
            requirement={true}
          >
            <option value="0">Select Nationality</option>
            {nationalities.map((item: any, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </SelectField>
         <InputField 
         required
         id="walletAddress"
         type="text"
         label="Wallet Address"
         placeholder="your wallet address"
         error={!!formik.touched.walletAddress && !!formik.errors.walletAddress}
         helperText={!!formik.touched.walletAddress && formik.errors.walletAddress}
         inputProps={{
           value: formik.values.walletAddress,
           onChange: formik.handleChange("walletAddress"),
           onBlur: formik.handleBlur("walletAddress"),
         }}
         />
         <InputField 
         required
         id="newPassword"
         type="password"
         label="New Password"
         error={!!formik.touched.newPassword && !!formik.errors.newPassword}
         helperText={!!formik.touched.newPassword && formik.errors.newPassword}
         inputProps={{
           value: formik.values.newPassword,
           onChange: formik.handleChange("newPassword"),
           onBlur: formik.handleBlur("newPassword"),
         }}
         />

       <Button variant="primary" className="py-2 my-3" onClick={formik.handleSubmit}>
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