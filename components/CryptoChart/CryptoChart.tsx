import React from 'react'
import { formatData } from '../../utils'
import CryptoDashboard from './CryptoCard'

const CryptoChart = () => {
  const [currencies, setCurrencies] = React.useState([])
  const [pair, setPair] = React.useState('')
  const [price, setPrice] = React.useState('0.00')
  const [pastData, setpastData] = React.useState({})
  const ws : any = React.useRef(null)

  let first = React.useRef(false)
  const url = 'https://api.pro.coinbase.com'

  React.useEffect(()=> {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")

    let pairs : any = []

    const apiCall = async () => {
      await fetch(url + "/products")
      .then((res) => res.json())
      .then((data) => (pairs = data));
      console.log("pairs", pairs)

      let filtered = pairs.filter((pair : any) => {
        if (pair.quote_currency === "USD") {
          return pair;
        }
      })
      filtered = filtered.sort((a: any, b : any) => {
        if (a.base_currency < b.base_currency) {
          return -1
        }
        if (a.base_currency > b.base_currency) {
          return 1
        }
        return 0
      })
      // console.log(filtered, "FILTERED")
      setCurrencies(filtered)
      first.current = true;
    }
    apiCall();
  }, [])

  React.useEffect(() => {
    if (!first.current) {
      console.log("returning on first render")
      return;
    }
    // console.log("running pair change");
    let msg = {
      type: "subscribe",
      product_ids:  [pair],
      channels: ["ticker"]
    };
    let jsonMsg = JSON.stringify(msg);
    ws.current.send(jsonMsg);

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
    const fetchHistoricalData = async () => {
      let dataArr : any = [];
      await fetch(historicalDataURL)
      .then((res) => res.json())
      .then((data) => (dataArr = data))
      // console.log(dataArr, "DATAARRAY")
      let formattedData = formatData(dataArr)
      setpastData(formattedData)
    }
    fetchHistoricalData()

    ws.current.onmessage = (e : any) => {
      let data = JSON.parse(e.data);
      if (data.type !== "ticker") {
        console.log("non ticker event", e);
        return
      }
      if (data.product_id === pair) {
        setPrice(data.price);
      }
    }
  }, [pair])

  const handleSelect = (e : any) => {
    // console.log(e.target.value)
    let unSubMsg = {
      type: "unsubscribe",
      product_ids:  [pair],
      channels: ["ticker"]
    }
    let unsub = JSON.stringify(unSubMsg)

    ws.current.send(unsub)

    setPair(e.target.value)
  } 
  return (
    <div className='m-5 text-center h-[100vh]'>
      {
        <select name="currency" value={pair} onChange={handleSelect} className='form-select appearance-none
        block
        w-[30%]
        py-1
        px-2
        mx-auto
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
            {currencies.map((curr: any, index: number) => {
              return <option key={index} value={curr.id}>{curr.display_name}</option>
            })
          }
        </select>
      } 
      <CryptoDashboard price={price} data={pastData} />
    </div>
  )
}

export default CryptoChart