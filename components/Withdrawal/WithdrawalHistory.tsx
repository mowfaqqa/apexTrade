import React from "react";
import { auth, db } from "../../lib/firebase";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import EmptyState from "../EmptyState";

const WithdrawalHistory = () => {
  const user = auth.currentUser;
  const [history, setHistory] = React.useState<any>([]);
  const router = useRouter();
  React.useEffect(() => {
    const getWithdrawalHistory = async () => {
      const res = await getDocs(
        collection(db, "USERS", user?.uid!, "Withdrawals")
      );
      const data: any = res.docs.map((doc: any) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHistory(data[0].withdrawal);
    };
    getWithdrawalHistory();
  });
  console.log(history);
  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold">Withrawal History</h1>
      <div>
        <div className="grid grid-cols-5 gap-3 border-b border-gray-400 py-3 font-semibold text-lg">
          <span>Date</span>
          <span>Amount($)</span>
          <span>BTC Value</span>
          <span>Wallet Address</span>
          <span>Status</span>
        </div>
        {history.length < 0 ? (
          <EmptyState
            title="No Transactions Made Yet"
            subtitle="make a successful withdrawal to first"
            src="/assets/amount.png"
          />
        ) : (
          <>
            {history.map((item: any, index: number) => (
              <>
                <div
                  key={index}
                  className="grid grid-cols-5 gap-3 border-b border-gray-400 py-3 font-medium text-base"
                >
                  <span>26 Jan 2023</span>
                  <span>{item.amount}</span>
                  <span></span>
                  <span>{item.walletAddress}</span>
                  <span className="flex items-center justify-start">
                    <span
                      className={
                        item.status === "pending"
                          ? " bg-yellow-200 rounded-lg p-1 text-yellow-500 text-sm"
                          : item.status === "successful"
                          ? "bg-green-200 rounded-lg p-1 text-green-600 text-sm"
                          : "bg-red-200 rounded-lg p-1 text-red-600 text-sm"
                      }
                    >
                      {item.status === "pending"
                        ? "Pending"
                        : item.status === "successful"
                        ? "Successful"
                        : "failed"}
                    </span>
                  </span>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default WithdrawalHistory;
