import Link from 'next/link'
import React from 'react'
import { Mail, MapPin, Phone } from 'react-feather'

const Footer = () => {
  return (
    <div className='bg-black text-gray-400'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-5'>
            <div>
                <h1 className='text-4xl font-bold'>Apex Traders</h1>
            </div>
            <div>
                <span className='flex items-center my-2'> <MapPin size={25} className='mx-2'/> Address : 123 Main Street San Jose, CA 94141 United States</span>
                <span className='flex items-center my-2'> <Phone size={25} className='mx-2' /> Support Line : +1 (213) 432-2895</span>
                <span className='flex items-center my-2'> <Mail size={25} className='mx-2' /> Email : support@apextrade.com</span>
            </div>
            <div className='flex flex-col mx-3'>
                <h5>Useful Links</h5>
                <Link href='/'><span className='px-3 text-base cursor-pointer hover:text-yellow-600 border-b border-dashed border-gray-400 py-2'>Home</span></Link>
            <Link href='/about/' passHref><span className='px-3 text-base cursor-pointer hover:text-yellow-600 border-b border-dashed border-gray-400 py-2'>About</span></Link>
            <Link href='/auth/login'><span className='px-3 text-base cursor-pointer hover:text-yellow-600 border-b border-dashed border-gray-400 py-2'>Login</span></Link>
            </div>
        </div>
            <div className='text-center'>
                All rights reserved &copy; ApexTrade 2022
            </div>
    </div>
  )
}

export default Footer