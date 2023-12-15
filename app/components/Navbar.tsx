"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
export default function Navbar() {
  const router = useRouter();
  const {userId} = useAuth();
  return (
    <div className="fixed top-0 w-full z-10 bg-[#ffc017]">
      <div className="xl:pl-96 md:pl-[75px] pl-4">
        <div className="navbar xl:w-9/12 md:pr-8 min-h-[83px] text-black">
          <div className="navbar-start flex gap-[1px] items-center">
            {/* Logo elements */}
            <div className="min-h-[26px] w-[26px] bg-black rounded-full"></div>
            <div className="min-h-[24px] w-[13px] bg-black rounded-squeeze"></div>
            <div className="min-h-[21px] w-[6px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
            
            <h2 className="text-[29px] font-bold pl-1 hover:cursor-pointer font-serif tracking-tighter" onClick={() => router.push("/")}>
              Medium
            </h2>
          </div>

          <div className="navbar-end">
            {/* Navigation Links */}
            <ul className="md:gap-6 px-1 lg:flex hidden md:pr-4">
              <li className="underline-animation" onClick={() => router.push("/")}>Our Story</li>
              <li className="underline-animation" onClick={() => router.push("/?showMembership=true")}>Membership</li>
              <li className="underline-animation" onClick={() => router.push("/")}>Write</li>
              {!userId && <li className="underline-animation" onClick={() => router.push("/sign-in")}>Sign In</li>}
            </ul>

            {/* User Button or Sign-up */}
            {!userId ? (
              <div onClick={() => router.push("/sign-up")} className="bg-[#191919] px-4 py-2 rounded-full text-white text-md hover:cursor-pointer">
                Get Started
              </div>
            ) : (
              <div className="mr-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </div>
        <div className="w-full absolute left-0 border-black border-solid border-b-[1px]" />
      </div>
    </div>
  );
}
