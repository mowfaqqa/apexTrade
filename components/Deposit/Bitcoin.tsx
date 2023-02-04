import React from "react";
import { AlertCircle, ChevronRight } from "react-feather";
import Button from "../Button";
import { InputField } from "../Inputs";
import { notifySuccess, notifyError } from "../../lib/notifications";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

const Bitcoin = () => {
  const userId = auth.currentUser?.uid;
  const createBitcoinDeposit = async (values: any) => {
    await setDoc(doc(db, "USERS", userId!, "Deposits", "bitcoin"), values, {
      merge: true,
    });
  };
  const formik = useFormik({
    initialValues: {
      depositName: "",
      depositAmount: 0,
      senderWalletAddress: "",
      description: "",
    },
    validationSchema: yup.object({
      depositName: yup.string().required().label("Deposit Name"),
      depositAmount: yup.number().required().label("Deposit Amount"),
      senderWalletAddress: yup
        .string()
        .required()
        .label("Senders Wallet Address"),
      description: yup.string().required().label("Description"),
    }),
    onSubmit: (values) => {
      const val = {
        deposit: arrayUnion(values),
      };
      createBitcoinDeposit(val)
        .then(() => notifySuccess("Request Sent Sucessfully"))
        .catch((error) => notifyError(error));
    },
  });
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-semibold flex items-center text-2xl">
        {" "}
        <ChevronRight size={20} /> <span className="mx-1">Bitcoin</span>
      </h1>
      <h2 className="text-base lg:text-2xl font-bold px-2 py-4">
        kjiuwfr92f78384fvit382t7297fi9028fnfiwg4202847gfii
      </h2>
      <p className="px-2">
        To make payment from your trading account please use our wallet address
        above and click on <span className="text-orange-500">Make payment</span>
      </p>
      <div>
        <p className="p-2 bg-orange-300 flex items-start  text-orange-500 text-lg font-medium">
          <span className="mx-1 py-0.5">
            <AlertCircle size={20} />
          </span>{" "}
          Please note that minimum fund amount is $500. contact
          support@apextrade.com for a more detailed description. Your account
          will be credited once payment is confirmed
        </p>
        <div className="mt-5">
          <InputField
            label="Deposit Name"
            id="depositName"
            placeholder="name...."
            type="text"
            error={!!formik.touched.depositName && !!formik.errors.depositName}
            helperText={
              !!formik.touched.depositName && formik.errors.depositName
            }
            inputProps={{
              value: formik.values.depositName,
              onChange: formik.handleChange("depositName"),
              onBlur: formik.handleBlur("depositName"),
            }}
          />
          <InputField
            label="Deposit Amount"
            id="depositAmount"
            placeholder="amount"
            type="number"
            error={
              !!formik.touched.depositAmount && !!formik.errors.depositAmount
            }
            helperText={
              !!formik.touched.depositAmount && formik.errors.depositAmount
            }
            inputProps={{
              value: formik.values.depositAmount,
              onChange: formik.handleChange("depositAmount"),
              onBlur: formik.handleBlur("depositAmount"),
            }}
          />
          <InputField
            label="Senders Wallet Address"
            id="senderWalletAddress"
            placeholder="Enter your wallet address"
            error={
              !!formik.touched.senderWalletAddress &&
              !!formik.errors.senderWalletAddress
            }
            helperText={
              !!formik.touched.senderWalletAddress &&
              formik.errors.senderWalletAddress
            }
            inputProps={{
              value: formik.values.senderWalletAddress,
              onChange: formik.handleChange("senderWalletAddress"),
              onBlur: formik.handleBlur("senderWalletAddress"),
            }}
          />
          <InputField
            label="Description (optional)"
            id="description"
            placeholder="Enter Description..."
            error={!!formik.touched.description && !!formik.errors.description}
            helperText={
              !!formik.touched.description && formik.errors.description
            }
            inputProps={{
              value: formik.values.description,
              onChange: formik.handleChange("description"),
              onBlur: formik.handleBlur("description"),
            }}
          />

          <div>
            <Button
              className="py-2 my-3 bg-orange-300 text-white hover:bg-orange-800"
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitcoin;
