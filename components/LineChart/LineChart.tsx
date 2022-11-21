import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import type { ChartData, ChartOptions } from 'chart.js';

export type CryptoType = {
      ath: number;
      atl: number;
      current_price: number;
      id: string;
      name: string;
      symbol: string;
      high_24h: number;
      low_24h: number

}
const LineChart = () => {
    const [cryptos, setCryptos] = React.useState<CryptoType[] | null >(null)
    const [selected, setSelected] = React.useState<CryptoType | null>()
    const [data, setData] = React.useState<ChartData<'line'>>()  
    const [options, setOptions] = React.useState<ChartOptions<'line'>>({
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
    })

    React.useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        axios.get(url).then((response) => {
            setCryptos(response.data);
        })
    }, []); 
  return (
    <div>
        <div>
    <h1 className='text-center font-4xl my-3 font-bold'>CRYPTO CHART</h1>
            <select 
            className='form-select appearance-none
            block
            w-full
            py-3
            px-4
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            onChange={(e) => {
                const c = cryptos?.find((x) => x.id === e.target.value);
                setSelected(c)
                axios.get(`https://api.coingecko.com/api/v3/coins/${c?.id}/market_chart?vs_currency=usd&days=30&interval=daily`).then((res) => {
                    setData(
                        {
                            labels: res.data.prices.map((price: number[]) => {
                                return price[0]
                            }),
                            datasets: [
                              {
                                label: 'Dataset',
                                data: res.data.prices.map((price: number[]) => {return price[1]}),
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                              },
                            ],
                          }
                    )
                })
            }}
            defaultValue="default"
            >
                {cryptos ? cryptos.map((crypto) => {
                    return <option key={crypto.id} value={crypto.id}>{crypto.name}</option>
                }) : null}
            </select>
        </div>
         {selected ? <h2 className='text-center font-semibold text-2xl'>{selected.name}</h2> : null}
        { data ? <Line options={options} data={data} /> : null}
    </div>
  )
}

export default LineChart