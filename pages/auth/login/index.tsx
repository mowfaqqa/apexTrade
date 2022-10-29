import Link from 'next/link'
import React from 'react'
import { AuthLayout } from '../../../components/AuthLayout'
import { InputField } from '../../../components/Inputs'
import Button from '../../../components/Button';
import { useFormik } from 'formik';
import * as yup from "yup";
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, database } from '../../../lib/firebase';
import { ref, update } from 'firebase/database';
import { notifySuccess, notifyError } from '../../../lib/notifications';


const Login = () => {
  const auth = getAuth(app)
  const router = useRouter()

  const formik = useFormik({
    initialValues : {
      email: "",
      password: ""
    },
    validationSchema : yup.object({
      email: yup.string().email().required("Email is required").label("Email Address"),
      password: yup
      .string()
      .label("Password")
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
    const password = values.password
    signInWithEmailAndPassword(auth, email, password,)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    notifySuccess('User is logged in successfully')
    router.push('/dashboard');
    const dt = new Date()
    update(ref(database, 'users/' + user.uid), {
      last_login : dt
    })

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    notifyError(errorMessage)
    // ..
  });
  }
})
  return (
    <div className='bg-stone-900 my-10 rounded-lg py-8 px-4 mx-3'> 
    <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-50'>Sign In</h1>
        <p className='text-base text-gray-50'>Dont have an account? <span><Link href="/auth/signup" passHref><a className='text-stone-400'> Sign Up</a></Link></span></p>
    </div>
    <div className='max-w-[1200px] mx-auto py-8'>
        <InputField 
         required
         id="email"
         type="text"
         label="Email Address"
         placeholder="Enter your email address"
         error={!!formik.touched.email && !!formik.errors.email}
         helperText={!!formik.touched.email && formik.errors.email}
         inputProps={{
           value: formik.values.email,
           onChange: formik.handleChange("email"),
           onBlur: formik.handleBlur("email"),
         }}
        />
        <InputField 
         required
         id="password"
         type="password"
         label="Password"
         placeholder="Enter password"
         error={!!formik.touched.password && !!formik.errors.password}
         helperText={!!formik.touched.password && formik.errors.password}
         inputProps={{
           value: formik.values.password,
           onChange: formik.handleChange("password"),
           onBlur: formik.handleBlur("password"),
         }}
        />
       <Button variant="primary" className="py-2 my-3" onClick={formik.handleSubmit}>
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