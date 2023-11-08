"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 w-full z-10 bg-[#ffc017]">
      <div className="xl:pl-96 md:pl-[75px] pl-4">
        <div className="navbar xl:w-9/12 md:pr-8 min-h-[83px] text-black ">
          <div className="navbar-start flex gap-[1px] items-center">
            <div className="min-h-[28px] w-[28px] bg-black rounded-full"></div>

            <div className="min-h-[27px] w-[14px] bg-black rounded-squeeze"></div>

            <div className="min-h-[26px] w-[7px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
            <h2 className=" text-[28px] font-bold pl-2">Shmedium</h2>
          </div>

          <div className="navbar-end">
            <ul className="md:gap-6 px-1 lg:flex hidden md:pr-4">
              <li>
                <div onClick={() => router.push("/")}>Our Story</div>
              </li>
              <li>
                <div onClick={() => router.push("/")}>Membership</div>
              </li>
              <li>
                <div onClick={() => router.push("/")}>Write</div>
              </li>
              <li>
                <div onClick={() => router.push("/sign-in")}>Sign In</div>
              </li>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </ul>
            <a className="bg-[#191919] px-4 py-2 rounded-full text-white text-md">
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full absolute left-0 border-black border-solid border-b-[1px]" />
      </div>
    </div>
  );
}
