import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
  return (
    <div className=' px-4 grid grid-cols-5 justify-evenly gap-5 max-w-[1600px] mx-auto py-4'>
        {imageArray.map((img: any, index: number) => (
            <span key={index}><Image src={img} width={230} height={200} alt='logo' /></span>
        ))}
    </div>
  )
}

export default ImageComp

const imageArray = [
    '/assets/bitcoinPngItem.png',
    '/assets/binance.png',
    '/assets/etherium.png',
    '/assets/doge-coin.png',
    '/assets/3d-etherium.jpg',
]