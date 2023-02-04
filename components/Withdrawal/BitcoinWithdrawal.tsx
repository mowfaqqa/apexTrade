import React from "react";
import { AlertCircle } from "react-feather";
import Button from "../Button";
import { InputField } from "../Inputs";
import { notifySuccess, notifyError } from "../../lib/notifications";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

const BitcoinWithdrawal = () => {
  const userId = auth.currentUser?.uid;
  const createBitcoinWithdrawalRequest = async (values: any) => {
    await updateDoc(
      doc(db, "USERS", userId!, "Withdrawals", "Bitcoin"),
      values
    );
  };
  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      amount: "",
    },
    validationSchema: yup.object({
      walletAddress: yup.string().required().label("Wallet Address"),
      amount: yup.number().required().label("Amount"),
    }),
    onSubmit: (values) => {
      const val = {
        withdrawal: arrayUnion({ ...values, status: 0 }),
      };
      createBitcoinWithdrawalRequest(val)
        .then(() => notifySuccess("Withdrawal Request Sent Successfully"))
        .catch(() => notifyError("Ops something went wrong sending request"));
    },
  });

  return (
    <div className="px-5">
      <h1 className="font-bold text-base lg:text-2xl text-center">
        Withdrawal Request with Bitcoin
      </h1>
      <div>
        <p className="p-2 bg-orange-300/40 flex items-start  text-orange-500 text-lg font-medium">
          <span className="mx-1 py-0.5">
            <AlertCircle size={20} />
          </span>{" "}
          Please note that minimum withdrawal amount is $500. contact
          support@apextrade.com for a more detailed description. Your account
          will be credited once payment is confirmed
        </p>
        <div>
          <h2 className="font-medium text-xl my-3">Account Details</h2>
          <InputField
            label="Wallet Address"
            id="walletAddress"
            placeholder="Enter your wallet address here..."
            type="text"
            error={
              !!formik.touched.walletAddress && !!formik.errors.walletAddress
            }
            helperText={
              !!formik.touched.walletAddress && formik.errors.walletAddress
            }
            inputProps={{
              value: formik.values.walletAddress,
              onChange: formik.handleChange("walletAddress"),
              onBlur: formik.handleBlur("walletAddress"),
            }}
          />
          <InputField
            label="Amount"
            id="amount"
            placeholder="enter amount"
            type="number"
            error={!!formik.touched.amount && !!formik.errors.amount}
            helperText={!!formik.touched.amount && formik.errors.amount}
            inputProps={{
              value: formik.values.amount,
              onChange: formik.handleChange("amount"),
              onBlur: formik.handleBlur("amount"),
            }}
          />
          <div>
            <Button
              className=" mx-auto block py-2 my-5 bg-orange-300 text-white hover:bg-orange-800"
              onClick={formik.handleSubmit}
            >
              Request Withdrawal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinWithdrawal;
