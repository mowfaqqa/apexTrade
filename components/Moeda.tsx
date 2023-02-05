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
    <div className="max-w-[1500px] px-8 mx-auto flex justify-center text-xs md:text-base">
      <div className="moeda-row flex flex-col md:flex-row md:items-center h-[90px] py-3 border-b border-b-[#d7d7d7]">
        <div className="moeda flex items-center md:pr-[24px]">
          {/* <img src={image} alt="crypto" /> */}
          <h2 className="text-base md:w-[150px]">{name}</h2>
          <p className="moeda-symbol hidden md:block uppercase">{symbol}</p>
        </div>
        <div className="moeda-data py-3 md:py-0 grid gap-4 grid-cols-4 text-right justify-between w-full">
          <p className="moeda-price  md:w-[110px]">${price}</p>
          <p className="moeda-volume md:w-[155px]">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="moeda-percent text-red-400">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="moeda-percent  text-green-400">{priceChange.toFixed(2)}%</p>
          )}

          <p className="moeda-marketcap md:w-[230px]">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moeda;
