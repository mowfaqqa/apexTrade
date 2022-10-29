import React from 'react'
import { Home, CreditCard, Folder, User } from 'react-feather';

const Sidebar = () => {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: Home, current: true },
        { name: 'Deposits', href: '/deposits', icon: CreditCard, current: false },
        { name: 'Withdrawal', href: '/withdraw', icon: Folder, current: false },
        { name: 'Account', href: '/account', icon: User, current: false },
    ];
    const classNames = (...classes : any) => {
        return classes.filter(Boolean).join(' ')
      }
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="flex flex-grow flex-col overflow-y-auto bg-gray-700 pt-5">
      <div className="flex flex-shrink-0 items-center px-4">
        {/* <Image
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
          width={50}
          height={50}
          alt="Your Company"
        /> */}
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h2 className='text-2xl text-center text-gray-300 py-2'>APEXTRADE</h2>
        <nav className="flex-1 space-y-1 px-2 pb-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-800 text-white' : 'text-indigo-100 hover:bg-gray-600',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
              )}
            >
              <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Sidebar