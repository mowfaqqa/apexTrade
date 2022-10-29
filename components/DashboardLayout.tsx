/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, ReactNode, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Home, Folder, BarChart2, Bell,CreditCard, User } from 'react-feather';
import Link from 'next/link';
import ResponsiveSideBar from './ResponsiveSideBar';
import Sidebar from './Sidebar';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home, current: true },
  { name: 'Deposit', href: '/deposit', icon: CreditCard, current: false },
  { name: 'Withdrawal', href: '/withdraw', icon: Folder, current: false },
  { name: 'Account', href: '/account', icon: User, current: false },
]
const userNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
interface AppProps {
  children : ReactNode;
}
export const DashboardLayout = ({children} : any): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <ResponsiveSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onClick={() => setSidebarOpen(false)}/>
        {/* Static sidebar for desktop */}
        <Sidebar />
        <div className="md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <BarChart2 size={25} className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="w-full flex items-center justify-between px-4">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell size={25} aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      {/* <Image
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        width={50}
                        height={50}
                        alt=""
                      /> */}
                      <User size={30}/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <div className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                              )}>
                                <Link href={item.href}>
                                  <a>
                                    {item.name}
                                  </a>
                                </Link>
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>              
            </div>
          </div>
          <div>
           {children}
          </div>
        </div>
      </div>
    </>
  )
}
