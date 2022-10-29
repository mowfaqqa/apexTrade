import React from 'react'
import Tab from '../components/Tab'
import AppLayout from '../components/AppLayout';
import Bitcoin from '../components/Deposit/Bitcoin';
import BankTransfer from '../components/Deposit/BankTransfer';

const Deposits = () => {
    const TABS = React.useMemo(
        () => [
            {
                label: "Bitcoin",
                content: <Bitcoin />
            },
            {
                label: "Bank Transfer",
                content: <BankTransfer />
            },
        ],[]
    )
  return (
    <div className='p-8'>
        <h1 className='font-bold text-3xl'>Make a Deposit</h1>
        <Tab tabs={TABS} variant="outlined" />
    </div>
  )
}

export default Deposits

Deposits.getLayout = function getLayout(login: React.ReactElement) {
    return <AppLayout>{login}</AppLayout>;
  };