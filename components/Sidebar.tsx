import Link from "next/link";
import React from "react";
import { Home, CreditCard, Folder, User } from "react-feather";
import { useRouter } from "next/router";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
    { name: "Deposits", href: "/deposits", icon: CreditCard, current: false },
    { name: "Withdrawal", href: "/withdrawal", icon: Folder, current: false },
    { name: "Account", href: "/profile", icon: User, current: false },
  ];
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div className="hidden md:fixed h-full md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-gray-700 pt-2">
        <div className="flex flex-col justify-center items-center px-4">
          <Image
            className="h-10 w-auto"
            src="/assets/apexlogo-light.png"
            width={250}
            height={125}
            alt="Your Company"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span
                  className={classNames(
                    router.asPath === item.href
                      ? "bg-gray-800 text-white"
                      : "text-indigo-100 hover:bg-gray-600",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
