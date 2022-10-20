import React from 'react'
import Link from 'next/link'
import { AuthLayout } from '../../../components/AuthLayout'
import { InputField } from '../../../components/Inputs'
import Button from '../../../components/Button';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useRouter } from 'next/router';
import { app } from '../../../lib/firebase';

const SignUp = () => {
  const auth = getAuth(app)
  const router = useRouter()
  const formik = useFormik({
    initialValues : {
      name: "",
      email: "",
      newPassword: ""
    },
    validationSchema : yup.object({
      email: yup.string().email().required("Email is required").label("Email Address"),
      name: yup.string().required().label("Name"),
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
    createUserWithEmailAndPassword(auth, email, password,)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.push('/dashboard');

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
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
        {/* <InputField 
         required
         id="lastName"
         type="text"
         label="Last Name"
         placeholder="Enter Last Name"
         /> */}
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

         {/* <InputField 
         required
         id="dateOfBirth"
         type="date"
         label="Date of Birth"
         placeholder="Date of Birth"
         /> */}
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