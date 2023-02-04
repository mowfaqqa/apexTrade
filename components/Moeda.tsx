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
    <div className="max-w-[1500px] mx-auto flex justify-center">
      <div className="moeda-row flex items-center h-[80px] border-b border-b-[#d7d7d7] md:w-[900px]">
        <div className="moeda flex items-center pr-[14px] md:pr-[24px] min-w-[150px]">
          {/* <img src={image} alt="crypto" /> */}
          <h2 className="text-base w-[70px] md:w-[150px]">{name}</h2>
          <p className="moeda-symbol hidden md:block uppercase">{symbol}</p>
        </div>
        <div className="moeda-data grid gap-2 grid-cols-4 text-right justify-between w-full">
          <p className="moeda-price md:w-[110px]">${price}</p>
          <p className="moeda-volume md:w-[155px]">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="moeda-percent text-red-400">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="moeda-percent  text-green-400">{priceChange.toFixed(2)}%</p>
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
