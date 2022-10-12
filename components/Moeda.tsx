import React from "react";

const Moeda = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
//   image,
  priceChange
} : any) => {
  return (
    <div className="moeda-container flex justify-center">
      <div className="moeda-row flex flex-row justify-start items-center h-[80px] border-b border-b-[#d7d7d7] w-[900px]">
        <div className="moeda flex items-center pr-[24px] min-w-[300px]">
          {/* <img src={image} alt="crypto" /> */}
          <h2 className="text-base w-[150px]">{name}</h2>
          <p className="moeda-symbol uppercase">{symbol}</p>
        </div>
        <div className="moeda-data flex text-right justify-between w-full">
          <p className="moeda-price w-[110px]">${price}</p>
          <p className="moeda-volume w-[155px]">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="moeda-percent text-red-400">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="moeda-percent w-[100px] text-green-400">{priceChange.toFixed(2)}%</p>
          )}

          <p className="moeda-marketcap w-[230px]">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moeda;
