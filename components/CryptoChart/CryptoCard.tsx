import React from 'react'
import { Line } from 'react-chartjs-2'

const CryptoDashboard = ({price, data} : any) => {
  const opts = {
    tooltips : {
      intersect: false,
      mode: 'index'
    },
    responsive: true,
    maintainAspectRatio : false
  }
  if(price === '0.00') {
    return(
      <h2>Please select a currency pair</h2>
    )
  }
  return (
    <div className='dashboard flex flex-col items-center h-[80vh]'>
        <h2>
          {`${price}`}
        </h2>
        <div className='chart-container w-[80%] h-full'>
          <Line
            data={data}
            options={opts}
          />
        </div>
    </div>
  )
}

export default CryptoDashboard