import React from "react";
import AppLayout from "../components/AppLayout";
import { InputField } from "../components/Inputs";
import Button from "../components/Button";
import { useFormik } from "formik";
import { auth, db } from "../lib/firebase";
import * as yup from "yup";
import { updateDoc, doc } from "firebase/firestore";
import { notifySuccess, notifyError } from "../lib/notifications";

const Profile = () => {
  const user = auth.currentUser;
  const updateProfile = async (values: any) => {
    await updateDoc(doc(db, "USERS", user?.uid!), values);
  };
  // formik for profile update
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().label("Wallet Address"),
      email: yup.string().required().label("Amount").email(),
    }),
    onSubmit: (values) => {
      updateProfile(values)
        .then(() => notifySuccess("Updated Profile Successfully"))
        .catch(() =>
          notifyError("Ann error occured while updating profile details")
        );
    },
  });
  // formik for password update
  // const passwordFormik = useFormik({
  //     initialValues : {
  //         password : '',
  //     },
  //     validationSchema : yup.object({
  //         password: yup
  //         .string()
  //         .label("Password")
  //         .min(8)
  //         .max(32)
  //         .required()
  //         .matches(
  //           /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //           "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //         ),
  //     }),
  //     onSubmit: (values) => {
  //         updatePassword(values).then(() => notifySuccess('Updated Password Successfully')).catch(() => notifyError("Ann error occured while changing password"))
  //     }
  // })
  return (
    <div>
      <h1 className="text-center text-base font-semibold lg:text-3xl my-3">
        User Profile
      </h1>
      <div className="max-w-5xl mx-auto">
        <h2 className="my-3 font-medium text-xl">Edit Account Details</h2>
        <div>
          <InputField
            placeholder="name"
            label="Name"
            id="name"
            type="text"
            error={!!formik.touched.name && !!formik.errors.name}
            helperText={!!formik.touched.name && formik.errors.name}
            inputProps={{
              value: formik.values.name,
              onChange: formik.handleChange("name"),
              onBlur: formik.handleBlur("name"),
            }}
          />
          <InputField
            placeholder="email"
            label="Email"
            id="email"
            type="email"
            error={!!formik.touched.email && !!formik.errors.email}
            helperText={!!formik.touched.email && formik.errors.email}
            inputProps={{
              value: formik.values.email,
              onChange: formik.handleChange("email"),
              onBlur: formik.handleBlur("email"),
            }}
          />
          <div>
            <Button
              className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800"
              onClick={formik.handleSubmit}
            >
              Save Changes
            </Button>
          </div>
        </div>
        {/* <div>
                    <h3 className='my-3 font-medium text-lg'>Change Password</h3>
                <InputField
                    placeholder='Password'
                    label='Change Password'
                    id='password'
                    type='password'
                    error={!!passwordFormik.touched.password && !!passwordFormik.errors.password}
                    helperText={!!passwordFormik.touched.password && passwordFormik.errors.password}
                    inputProps={{
                      value: passwordFormik.values.password,
                      onChange: passwordFormik.handleChange("password"),
                      onBlur: passwordFormik.handleBlur("password"),
                    }}
                />
                 <div>
                <Button className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800" onClick={passwordFormik.handleSubmit}>Save Changes</Button>
            </div>
            </div> */}
      </div>
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(login: React.ReactElement) {
  return <AppLayout>{login}</AppLayout>;
};
