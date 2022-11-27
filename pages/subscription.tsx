import React from 'react'
import { Button } from '../components/Button';
import { InputField } from '../components/Inputs';
import ProtectedRoute from '../components/ProtectedRoutes';
import { useFormik } from 'formik';

const Subscription = () => {
    const formik = useFormik({
        initialValues: {
            name : '',
            subscriptionPlan : '',
        },
        // validationSchema: ,
        onSubmit: (values) => {}
    })
  return (
    <ProtectedRoute>
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
                    error={!!formik.touched.subscriptionPlan && !!formik.errors.subscriptionPlan}
                    helperText={!!formik.touched.subscriptionPlan && formik.errors.subscriptionPlan}
                    inputProps={{
                      value: formik.values.subscriptionPlan,
                      onChange: formik.handleChange("subscriptionPlan"),
                      onBlur: formik.handleBlur("subscriptionPlan"),
                    }}
                />
                <InputField
                    placeholder='email'
                    label='Email'
                    id='email'
                    type='email'
                    error={!!formik.touched.name && !!formik.errors.name}
                    helperText={!!formik.touched.name && formik.errors.name}
                    inputProps={{
                      value: formik.values.name,
                      onChange: formik.handleChange("name"),
                      onBlur: formik.handleBlur("name"),
                    }}
                />
                 <div>
                <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800" onClick={formik.handleSubmit}>Save Changes</Button>
            </div>
            </div>
        </div>
    </div>
    </ProtectedRoute>
  )
}

export default Subscription