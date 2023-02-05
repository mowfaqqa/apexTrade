import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
  return (
    <div className='px-5 grid grid-cols-2 md:grid-cols-6 items-center justify-around gap-8 max-w-[1500px] mx-auto'>
        {imageArray.map((img: any, index: number) => (
            // eslint-disable-next-line @next/next/no-img-element
            <span key={index}><img className='w-full h-full' src={img} alt='logo' /></span>
        ))}
    </div>
  )
}

export default ImageComp

const imageArray = [
  '/assets/paxful.png',
  '/assets/binance.jpg',
  '/assets/doge-coin.png',
  '/assets/trust-wallet.png',
  '/assets/bluewallet.JPG',
  '/assets/simplex.PNG',
]