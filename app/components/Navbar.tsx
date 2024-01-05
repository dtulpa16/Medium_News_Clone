"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
export default function Navbar() {
  const router = useRouter();
  const {userId} = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed top-0 w-full z-10 bg-[#ffc017]">
      <div className="2xl:pl-96 xl:pl-[125px] md:pl-[75px] pl-4">
        <div className="navbar xl:w-9/12 lg:pr-8 min-h-[83px] text-black">
          <div className="navbar-start flex gap-[1px] items-center">
            {/* Logo elements */}
            <div className="min-h-[26px] w-[26px] bg-black rounded-full"></div>
            <div className="min-h-[24px] w-[13px] bg-black rounded-squeeze"></div>
            <div className="min-h-[21px] w-[6px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
            
            <h2 className="text-[29px] font-bold pl-1 hover:cursor-pointer font-serif tracking-tighter" onClick={() => router.push("/")}>
              Medium
            </h2>
          </div>
          <div className="navbar-end w-full">
          
            {/* Navigation Links */}
            <ul className="md:gap-6 px-1 sm:flex sm:gap-4 sm:pr-4 hidden md:pr-4">
              <li className="underline-animation" onClick={() => router.push("/?showMembership=true")}>Membership</li>
              <li className="underline-animation" onClick={() => router.push("/about")}>Our Story</li>
              {!userId && <li className="underline-animation" onClick={() => router.push("/sign-in")}>Sign In</li>}
            </ul>

            {/* User Button or Sign-up */}
            {!userId ? (
              <div onClick={() => router.push("/sign-up")} className="bg-[#191919] px-4 py-2 rounded-full text-white text-md hover:cursor-pointer hidden sm:block">
                Get Started
              </div>
            ) : (
              <div className="mr-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
            {/* Hamburger Menu Icon */}
          <div className="sm:hidden flex items-center ml-2 mr-2" onClick={toggleMenu}>
            <svg className="w-8 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
            </svg>
          </div>
          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#ffc017] shadow-md py-4 flex flex-col items-center text-center font-semibold text-lg">
              <ul>
              <li className="underline-animation" onClick={() => router.push("/about")}>Our Story</li>
              <li className="underline-animation" onClick={() => router.push("/?showMembership=true")}>Membership</li>
              {!userId && <li className="underline-animation" onClick={() => router.push("/sign-in")}>Sign In</li>}
              {!userId && <li className="underline-animation" onClick={() => router.push("/sign-in")}>Sign Up</li>}
              </ul>
            </div>
          )}
          </div>
        </div>
        <div className="w-full absolute left-0 border-black border-solid border-b-[1px]" />
      </div>
    </div>
  );
}
