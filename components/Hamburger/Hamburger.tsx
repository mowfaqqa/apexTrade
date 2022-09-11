import React from 'react'
import style from './hamburger.module.css'
import Link from 'next/link'

const Hamburger = () => {
   return (
      <div className={`${style['menu-wrap']}`}>
        <input type="checkbox" className={`${style.toggler}`} />
        <div className={`${style.hamburger}`}><div></div></div>
        <div className={`${style.menu}`}>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link href="/" passHref>
                            <span className='cursor-pointer'> Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                               <span className='cursor-pointer'> About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth/login" passHref>
                               <span className='cursor-pointer' > Login </span>
                                </Link>
                        </li>
                  
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Hamburger