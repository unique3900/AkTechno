"use client";

import Link from "next/link";
import { navData } from "../../Data/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const Navbar = () => {
  const [navState, setNavstate] = useState(false);
  return (
    <div className="w-full flex gap-4 justify-between items-center px-10 py-6">
      {/* Logo */}
      <div className="">
        <Link href={"/"}>
          <img
            src="/bg/logo.png"
            alt="AK Techno"
            className="w-48 cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden lg:flex flex-row items-center gap-6 text-red-700 font-bold">
        {navData?.map((item, index) => (
          <Link href={item?.url} className="" key={index}>
            {item?.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}

      <GiHamburgerMenu
        size={28}
        className="flex lg:hidden text-red-700 cursor-pointer"
        onClick={(e) => setNavstate(!navState)}
      />

      {/* Mobile Nav Items */}
      {navState && (
        <div className="z-20 min-h-screen absolute top-0 left-0 w-full bg-black/90 flex lg:hidden flex-col items-center justify-center gap-6">
            <IoMdClose size={28} className="text-white hover:text-red-700 cursor-pointer" onClick={(e) => setNavstate(!navState)}/>
          {navData?.map((item, index) => (
            <Link
              href={item?.url}
              className="text-white hover:text-red-700"
              key={index}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
