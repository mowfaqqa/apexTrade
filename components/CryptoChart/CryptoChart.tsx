import React from 'react'

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
      console.log(filtered)
      setCurrencies(filtered)
      first.current = true;
    }
    apiCall();
  }, [])

  return (
    <div>
     <h1>hello</h1>
    </div>
  )
}

export default CryptoChart