import React from 'react'
import AppLayout from '../components/AppLayout';
import CryptoChart from '../components/CryptoChart/CryptoChart'
import { db } from '../lib/firebase';
import { collection, getDocs } from "firebase/firestore"

const Dashboard = () => {
  const [dashBoard, setDashBoard] = React.useState<any>()
  const dashBoardData = collection(db, "dashboard")
  React.useEffect(() => {
    const getDashboardInfo = async () =>  {
      const res = await getDocs(dashBoardData);
      const data: any = res.docs.map((doc : any) => ({...doc.data(), id: doc.id}))
      setDashBoard(data) 
      dashBoard.map((item : any)  => localStorage.setItem("id", item.id))
    }
    getDashboardInfo()
  }, [dashBoardData, dashBoard])

  const amountData = collection(db, `dashboard/${localStorage.getItem('id')}/deposits`)

  
 
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-5">
        <h1 className="text-2xl font-semibold text-gray-900">Hello</h1>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-2">
      <div className='block lg:flex flex-column lg:flex-row md:items-center md:justify-between'>
        <div className='bg-orange-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] p-4 text-center flex flex-col items-center justify-center my-4'>
            <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT DEPOSITED</h2>
            <p className='text-3xl font-semibold text-white'>$ 0.00</p>
        </div>
        <div className='bg-green-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] my-4 p-4 text-center flex flex-col items-center justify-center'>
        <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT WITHDRAWN</h2>
            <p className='text-3xl font-semibold text-white'>$ 0.00</p>
        </div>
        <div className='bg-red-400 border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] my-4 p-4 text-center flex flex-col items-center justify-center'>
        <h2 className='text-xl font-semibold text-white'>TOTAL AMOUNT BALANCE </h2>
            <p className='text-3xl font-semibold text-white'>$ 0.00</p>
        </div>
      </div>
        <div className="py-4">
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <CryptoChart />
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