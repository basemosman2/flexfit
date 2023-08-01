"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";
import { AiOutlineAlignRight, AiOutlinePlus } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [mobileMenuBar, setMobileMenuBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add a scroll event listener to update the state when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    } transition-colors duration-300 z-50`}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={140}
          height={140}
          className="object-contain"
        />
      </Link>
      <Nav setMobileMenuBar={setMobileMenuBar} mobileMenuBar={mobileMenuBar} />
      <div className="flex items-center space-x-4">
        <TiThMenuOutline
          className="xl:hidden cursor-pointer text-white text-3xl hover:text-primary"
          onClick={() => setMobileMenuBar(!mobileMenuBar)}
        />
        <Link
          href="/Login"
          className=" cursor-pointer text-white text-3xl hover:text-primary"
        >
          <BsPerson />
        </Link>
        <div className="cursor-pointer text-white text-3xl hover:text-primary">
          <AiOutlineAlignRight />
        </div>
        <Link
          href="/contact"
          className="text-white hidden group font-bold text-md md:flex items-center gap-4 border-2 rounded-sm border-[#5a5959] p-2 pr-6"
        >
          <div className="bg-primary p-1 text-2xl rounded-sm transition group-hover:rotate-180 ">
            <AiOutlinePlus className=" " />
          </div>
          JOIN CLASS NOW
        </Link>
      </div>
    </div>
  );
};

export default Navbar;