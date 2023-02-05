import React from 'react'
import AppLayout from '../components/AppLayout';
import WithdrawalHistory from '../components/Withdrawal/WithdrawalHistory';
import Tab from '../components/Tab';

const Transaction = () => {
    const TABS = React.useMemo(
        () => [
            {
                label: "Withdrawal HIstory",
                content: <WithdrawalHistory />
            },
            // {
            //     label: "Bank Transfer",
            //     content: <BankTransfer />
            // },
        ],[]
    )
  return (
    <div className='p-8'>
        <h1 className='font-bold text-3xl'>Transaction History</h1>
        <Tab tabs={TABS} variant="outlined" />
    </div>
  )
}

export default Transaction

Transaction.getLayout = function getLayout(page: React.ReactElement) {
    return <AppLayout>{page}</AppLayout>;
  };
  