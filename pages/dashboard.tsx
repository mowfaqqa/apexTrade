import React from "react";
import AppLayout from "../components/AppLayout";
import CryptoChart from "../components/CryptoChart/CryptoChart";
import { db, auth } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import LineChart from "../components/LineChart/LineChart";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoutes";
import Image from "next/image";

const Dashboard = () => {
  const user = auth.currentUser;
  const [dashboard, setDashboard] = React.useState<any>([]);
  const [data, setData] = React.useState<any>([]);
  const router = useRouter();
  React.useEffect(() => {
    const getDashboardInfo = async () => {
      const res = await getDocs(
        collection(db, "USERS", user?.uid!, "dashboard")
      );
      const data: any = res.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDashboard(data);
    };
    const getDashboard = async () => {
      const res = await getDocs(collection(db, "USERS"));
      const data: any = res.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(data);
    };
    getDashboardInfo();
    getDashboard();
  }, [router, user?.uid]);
  // const totalWithdrawalAmount =
  const totalAmount =
    dashboard[0]?.totalDeposit - dashboard[0]?.totalWithdrawal;
  console.log(data);
  return (
    <ProtectedRoute>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-5">
          <h1 className="text-4xl font-semibold text-gray-900">
            Hello {data[0]?.name}
          </h1>
          <h1 className="text-2xl font-semibold text-gray-500">
            Your current balance is{" "}
          </h1>

          <h1 className="text-3xl font-semibold text-gray-800 my-3">
            ${Number.isNaN(totalAmount) ? 0.0 : totalAmount}
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 my-3">
            Mined Profit : {dashboard[0]?.profit ?? 0.0}
          </h1>
        </div>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-2">
          <div className="block lg:flex flex-column lg:flex-row md:items-center gap-10 ">
            <div className="bg-white border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] p-4 text-center flex flex-col items-center justify-center my-4">
              <Image
                src="/assets/deposits.png"
                width={55}
                height={70}
                alt="deposit"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                TOTAL AMOUNT DEPOSITED
              </h2>
              <p className="text-3xl font-semibold text-gray-900">
                {dashboard[0]?.totalDeposit ?? 0.0}USD
              </p>
            </div>
            <div className="bg-white border border-gray-400 rounded-lg h-[35vh] lg:h-[25vh] my-4 p-4 text-center flex flex-col items-center justify-center">
              <Image
                src="/assets/withdrawal.png"
                width={55}
                height={70}
                alt="deposit"
              />
              <h2 className="text-xl font-semibold text-gray-900">
                TOTAL AMOUNT WITHDRAWN
              </h2>
              <p className="text-3xl font-semibold text-gray-900">
                {dashboard[0]?.totalWithdrawal ?? 0.0}USD
              </p>
            </div>
          </div>
          <div className="py-4">
            <div className=" border-gray-200">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};
export default Dashboard;

Dashboard.getLayout = function getLayout(login: React.ReactElement) {
  return <AppLayout>{login}</AppLayout>;
};
