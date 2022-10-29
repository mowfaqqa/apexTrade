import React from 'react'
import Tab from '../components/Tab'
import AppLayout from '../components/AppLayout';
import Bitcoin from '../components/Deposit/Bitcoin';

const Deposits = () => {
    const TABS = React.useMemo(
        () => [
            {
                label: "Bitcoin",
                content: <Bitcoin />
            },
            {
                label: "Bank Transfer",
                content: <h1>Bank Transfer</h1>
            },
            {
                label: "Fund History",
                content: <h1>Fund History</h1>
            }
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