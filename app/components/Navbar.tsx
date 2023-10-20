import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#ffc017] pl-0 xl:w-9/12 md:w-11/12 min-h-[84px] text-black">
        <div className="navbar-start flex gap-[1px] items-center">
          <div className="min-h-[28px] w-[28px] bg-black rounded-full"></div>

          <div className="min-h-[27px] w-[14px] bg-black rounded-squeeze">
          </div>

          <div className="min-h-[26px] w-[7px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
          <h2 className=" text-[28px] font-bold pl-2">Medium</h2>
        </div>
        {/* <div className=" hidden lg:flex">
        
      </div> */}
        <div className="navbar-end">
          <ul className="gap-6 px-1 lg:flex hidden md:pr-4">
            <li>
              <Link href="/">Our Story</Link>
            </li>
            <li>
              <Link href="/">Membership</Link>
            </li>
            <li>
              <Link href="/">Write</Link>
            </li>
            <li>
              <Link href="/">Sign In</Link>
            </li>
          </ul>
          <a className="bg-[#191919] px-4 py-2 rounded-2xl text-zinc-100 text-md">
            Get Started
          </a>
        </div>
      </div>
      <div className="border-b-2 w-screen absolute left-0 border-black"></div>
    </>
  );
}
