"use client";

import Link from "next/link";
import { navData } from "../../(Data)/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navState, setNavstate] = useState(false);
  const navPage=usePathname();
  const currentPage=navPage.slice(1,navPage.length)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return ( 
    <div className={` z-50 ${scrolled?'fixed shadow-md bg-white':'bg-transparent'}  w-full flex gap-4 justify-between items-center px-10 py-6`}>
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
      <div className="hidden lg:flex flex-row items-center gap-6 font-bold">
        {navData?.map((item, index) => (
          <Link href={item?.url} className={`${item.url.slice(1,item.url.length)==currentPage||item.url==" "?'text-red-600':'text-black'}  hover:text-red-600 `} key={index}>
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
          <IoMdClose
            size={28}
            className="text-white hover:text-red-700 cursor-pointer"
            onClick={(e) => setNavstate(!navState)}
          />
          {navData?.map((item, index) => (
            <Link
              onClick={() => setNavstate(!navState)}
              href={item?.url}
              className="text-white hover:text-red-700"
              key={index}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      )}

      <Link href={"/"} className="px-3 py-2 bg-red-600  text-white cursor-pointer rounded-md hover:bg-black transition-colors ease-in-out duration-300" >Login</Link>
    </div>
  );
};

export default Navbar;
