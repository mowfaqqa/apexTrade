import React from 'react'
import AppLayout from '../components/AppLayout';
import CryptoChart from '../components/CryptoChart/CryptoChart'
import { db } from '../lib/firebase';
import { collection, getDocs } from "firebase/firestore"
import LineChart from '../components/LineChart/LineChart';

const Dashboard = () => {
  const [dashBoard, setDashBoard] = React.useState<any>([])
  const [bitcoinDeposit, setBitcoinDeposit] = React.useState<any>([])
  const [bitcoinWithdrawal, setBitcoinWithdrawal] = React.useState<any>([])
  const [bankWithdrawal, setBankWithdrawal] = React.useState<any>([])
  // collections
  const dashBoardDepositData = collection(db, "dashboard", "deposits", "bank")
  const dashBoardbitcoinDepositData = collection(db, "dashboard", "deposits", "bitcoin")
  const dashBoardbankWithdrawalData = collection(db, "dashboard", "withdrawals", "bitcoin")
  const dashBoardbitcoinWithdrawalData = collection(db, "dashboard", "withdrawals", "bitcoin")

  React.useEffect(() => {
    const getDashboardInfo = async () =>  {
      const res = await getDocs(dashBoardDepositData);
      const data: any = res.docs.map((doc : any) => ({...doc.data(), id: doc.id}))
      setDashBoard(data) 
      // dashBoard.map((item : any)  => localStorage.setItem("id", item.id))
    }
    const getBitcoinDepositInfo = async () =>  {
      const res = await getDocs(dashBoardbitcoinDepositData);
      const data: any = res.docs.map((doc : any) => ({...doc.data(), id: doc.id}))
      setBitcoinDeposit(data) 
      // dashBoard.map((item : any)  => localStorage.setItem("id", item.id))
    }
    const getBitcoinWithdrawalInfo = async () =>  {
      const res = await getDocs(dashBoardbitcoinWithdrawalData);
      const data: any = res.docs.map((doc : any) => ({...doc.data(), id: doc.id}))
      setBitcoinWithdrawal(data) 
      // dashBoard.map((item : any)  => localStorage.setItem("id", item.id))
    }
    const getBankWithdrawalInfo = async () =>  {
      const res = await getDocs(dashBoardbankWithdrawalData);
      const data: any = res.docs.map((doc : any) => ({...doc.data(), id: doc.id}))
      setBankWithdrawal(data) 
      // dashBoard.map((item : any)  => localStorage.setItem("id", item.id))
    }
    getDashboardInfo()
    getBitcoinDepositInfo()
    getBitcoinWithdrawalInfo()
    getBankWithdrawalInfo()
  }, [dashBoardDepositData,dashBoardbitcoinDepositData, bitcoinDeposit,dashBoard,bankWithdrawal, bitcoinWithdrawal, dashBoardbitcoinWithdrawalData, dashBoardbankWithdrawalData ])
  // const totalWithdrawalAmount = 
  const totalDepositAmount =  dashBoard[0]?.depositAmount + bitcoinDeposit[0]?.depositAmount
  const totalWithdrawalAmount = bitcoinWithdrawal[0]?.amount + bankWithdrawal[0]?.amount
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-5">
        <h1 className="text-2xl font-semibold text-gray-900">Hello</h1>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-2">
      <div className='block lg:flex flex-column lg:flex-row md:items-center md:justify-between'>
        <div className='bg-orange-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] p-4 text-center flex flex-col items-center justify-center my-4'>
            <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT DEPOSITED</h2>
            <p className='text-3xl font-semibold text-white'>{totalDepositAmount}USD</p>
        </div>
        <div className='bg-green-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] my-4 p-4 text-center flex flex-col items-center justify-center'>
        <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT WITHDRAWN</h2>
            <p className='text-3xl font-semibold text-white'>{totalWithdrawalAmount}USD</p>
        </div>
        <div className='bg-red-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] my-4 p-4 text-center flex flex-col items-center justify-center'>
        <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT BALANCE </h2>
            <p className='text-3xl font-semibold text-white'>{totalDepositAmount - totalWithdrawalAmount}USD</p>
        </div>
      </div>
        <div className="py-4">
          <div className=" border-gray-200">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
)
}
export default Dashboard

Dashboard.getLayout = function getLayout(login: React.ReactElement) {
  return <AppLayout>{login}</AppLayout>;
};