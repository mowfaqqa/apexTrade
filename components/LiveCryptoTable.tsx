import React, { useState, useEffect } from "react";
import axios from "axios";
import Moeda from "./Moeda";

const CryptoTable = () => {
  const [moedas, setMoedas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      )
      .then((res) => {
        setMoedas(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e : any) => {
    setSearch(e.target.value);
  };

  const filteredMoedas = moedas.filter((moeda : any) =>
    moeda.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="text-white moeda-app bg-[url('/assets/hero.jpg')] bg-repeat-x bg-top">
      <div className="backdrop-blur-[2px] bg-black/40 py-8">
      <div className="moeda-search z-40 px-10">
        <h1 className="moeda-text text-center font-bold text-3xl py-3">Crypto Search</h1>
        <form>
          <input
            className="moeda-input border border-gray-300 text-center border-solid rounded-md py-3 px-4 w-full bg-white"
            type="text"
            onChange={handleChange}
            placeholder=" type in a crypto currency"
          />
        </form>
      </div>
      {filteredMoedas.map((moeda : any) => {
        return (
          <Moeda
            key={moeda.id}
            name={moeda.name}
            price={moeda.current_price}
            symbol={moeda.symbol}
            marketcap={moeda.total_volume}
            volume={moeda.market_cap}
            image={moeda.image}
            priceChange={moeda.price_change_percentage_24h}
          />
        );
      })}
    </div>
            </div>
  );
}
export default CryptoTable;
