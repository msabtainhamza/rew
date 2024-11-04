"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { title: "Browse Listings", link: "/listing_13" },
  { title: "Market Reports", link: "/" },
  { title: "Tools", link: "/" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[99] w-full h-[110px] transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } pt-6 px-4`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-20">
          <Image
            src="/assets/images/hero/logo.png"
            width={134}
            height={73}
            alt="logo"
            className="w-[134px] h-[73px]"
          />
          <div className="text-white w-[189px] h-[42px] font-urbanist text-[18px] font-[700] rounded-[50px] flex justify-center items-center bg-gradient3">
            Download App
          </div>
          <div className="flex justify-between items-center gap-4 ml-[60px]">
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-[#595959] text-[18px] font-[400] flex justify-between items-center"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <p className="text-[#595959] text-[18px] font-[400]">Login</p>
          <div className="text-white font-urbanist text-[18px] font-[700] rounded-[50px] flex justify-center items-center bg-gradient3 w-[133px] h-[49px]">
            Signup
          </div>
        </div>
      </div>
    </div>
  );
}
