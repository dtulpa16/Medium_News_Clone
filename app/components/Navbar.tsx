import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-[#ffc017] pl-0 md:w-9/12">
      <div className="navbar-start">
        <a className="normal-case font-bold text-black text-2xl">Medium</a>
      </div>
      {/* <div className=" hidden lg:flex">
        
      </div> */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 lg:flex hidden md:pr-4">
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
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
}
