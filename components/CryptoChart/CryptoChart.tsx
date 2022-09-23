import React from 'react'
import CryptoCard from './CryptoCard'

const CryptoChart = () => {
  return (
    <div>
      {/* chart headings */}
      <div className='grid grid-cols-4 items-center gap-x-3'>
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
      </div>
        <CryptoCard />
    </div>
  )
}

export default CryptoChart