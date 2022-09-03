import Head from 'next/head';
import React from 'react'
import Navbar from './Navbar';

interface AppProps {
    children: React.ReactNode;
}
export const AuthLayout = ({ children }: AppProps): JSX.Element => {
  return (
    <>
    <Head>
      <title>ApexTrader</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="ApexTrader - An all inclusive cryptocurrency platform"
      />
      <meta
        name="keywords"
        content="Apextrader, Crypto, Cypto Currency, Bitcoin, Trade"
      />
      <meta name="author" content="ApexTrader" />
      <link rel="icon" type="image/png" href="/icons/favicon.png"></link>
    </Head> 
    <div className='bg-gray-400 h-full overflow-x-hidden'>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
    </>
  )
}
