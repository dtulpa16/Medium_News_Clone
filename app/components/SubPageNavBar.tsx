import React from "react";
import { SearchIcon, PencilAltIcon, UserIcon } from "@heroicons/react/outline";
export default function SubPageNavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="w-[97%] mx-auto min-h-[57px] flex justify-between items-center">
        <div className="content-start flex gap-[1px] items-center align-middle items-center">
          {/* Icon  */}
          <div className="flex gap-[1px] items-center">
            <div className="min-h-[23px] w-[23px] bg-black rounded-full"></div>
            <div className="min-h-[21px] w-[12px] bg-black rounded-squeeze"></div>
            <div className="min-h-[19px] w-[4px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
          </div>
          {/* Brand  */}
          <h2 className=" text-[25px] font-bold pl-[1px] hover:cursor-pointer text-black md:mr-4">
            Medium
          </h2>
          {/* Search Bar  */}
          <div className="md:flex items-center bg-[#F9F9F9] rounded-full pl-3 pr-5 min-h-[40px] hidden">
            <SearchIcon className="h-6 w-6 text-gray-500 mr-2" />
            <input
              className="bg-gray-100 outline-none text-sm placeholder-gray-500 placeholder:font-thin placeholder:text-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <PencilAltIcon className="h-6 w-6 text-gray-600" />
          <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-full shadow-sm hover:bg-green-600">
            Sign up
          </button>
          <span className="text-sm">Sign in</span>
          <UserIcon className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}
