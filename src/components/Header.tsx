"use client";
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      <div className="bg-teal-600 p-2">
        <p className="text-white font-medium">3 MAY 2025</p>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-20 bg-black p-4 flex items-center justify-between  transition-all duration-300">
        {/* Logo or Title */}
        <h4 className="text-white text-lg font-semibold">WIN THE MATCH</h4>

        <ul className="hidden md:flex items-center space-x-10">
          <Link href="/">
          <li className={` ${pathname == "/"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            HOME
          </li>
          </Link>
         <Link href="/about">
         <li className={` ${pathname == "/about"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            ABOUT US
          </li>
         </Link>
          <Link href="vip">
          <li className={` ${pathname == "/vip"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            VIP PAGE
          </li>
          </Link>
          
          <Link href={"/contact"}>
          <li className={` ${pathname == "/contact"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            CONTACT US
          </li>
          </Link>
         
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500">
            LOGIN
          </button>
          <button className="px-4 py-2 bg-white text-teal-500  rounded hover:bg-gray-100">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
