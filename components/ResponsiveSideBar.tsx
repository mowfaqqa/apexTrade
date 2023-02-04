import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CreditCard, Folder, Home, User, X } from "react-feather";
import { useRouter } from "next/router";

const ResponsiveSideBar = ({ sidebarOpen, setSidebarOpen, onClick }: any) => {
  const router = useRouter();
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
    { name: "Deposit", href: "/deposits", icon: CreditCard, current: false },
    { name: "Withdrawal", href: "/withdrawal", icon: Folder, current: false },
    { name: "Account", href: "/profile", icon: User, current: false },
  ];

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <Transition.Root show={sidebarOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="relative z-40 md:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
              <Transition.Child
                as={React.Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={onClick}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X size={20} className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-col justify-center items-center px-4">
                <Image
                  className="h-10 w-auto"
                  src="/assets/apexlogo-light.png"
                  width={250}
                  height={125}
                  alt="Your Company"
                />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <span
                        className={classNames(
                          router.asPath === item.href
                            ? "bg-gray-800 text-white"
                            : "text-indigo-100 hover:bg-gray-600",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ResponsiveSideBar;
