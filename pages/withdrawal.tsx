import React from 'react'
import AppLayout from '../components/AppLayout';
import Tab from '../components/Tab';
import BitcoinWithdrawal from '../components/Withdrawal/BitcoinWithdrawal';
import WithdrawalTransfer from '../components/Withdrawal/WithdrawalTransfer';

const Withdrawal = () => {
    const TABS = React.useMemo(
        () => [
            {
                label: "Withdrawal Request (Bitcoin)",
                content: <BitcoinWithdrawal />
            },
            {
                label: "Withdrawal Request (Bank Transfer)",
                content: <WithdrawalTransfer />
            },
        ],[]
    )
  return (
    <div className='p-8'>
         <h1 className='font-bold text-3xl'>Make a Withdrawal</h1>
         <p>please use one of the withdrawal methods below to make your withdrawal</p>
        <Tab tabs={TABS} variant="outlined" />
    </div>
  )
}

export default Withdrawal;

Withdrawal.getLayout = function getLayout(login: React.ReactElement) {
    return <AppLayout>{login}</AppLayout>;
  };