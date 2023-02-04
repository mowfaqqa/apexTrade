import Image from 'next/image'
import React from 'react'

const ImageComp = () => {
  return (
    <div className='px-10 grid grid-cols-5 justify-around gap-5 max-w-[1500px] mx-auto py-4'>
        {imageArray.map((img: any, index: number) => (
            <span key={index}><Image src={img} width={200} height={100} alt='logo' /></span>
        ))}
    </div>
  )
}

export default ImageComp

const imageArray = [
  '/assets/paxful.png',
  '/assets/doge-coin.png',
  '/assets/trust-wallet.png',
  '/assets/bluewallet.JPG',
  '/assets/simplex.PNG',
]