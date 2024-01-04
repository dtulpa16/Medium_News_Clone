import React from "react";
import { SearchIcon, PencilAltIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function SubPageNavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="w-[97%] mx-auto min-h-[57px] flex justify-between items-center">
        <div className="content-start flex gap-[1px] items-center align-middle ">
          {/* Icon  */}
          <div className="flex gap-[1px] items-center">
            <div className="min-h-[23px] w-[23px] bg-black rounded-full"></div>
            <div className="min-h-[21px] w-[12px] bg-black rounded-squeeze"></div>
            <div className="min-h-[19px] w-[4px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
          </div>
          {/* Brand  */}
          <Link
            href="/"
            className=" text-[25px] font-bold pl-[3px] hover:cursor-pointer text-black md:mr-4 font-serif tracking-tighter"
          >
            Medium
          </Link>
          {/* Search Bar  */}
          <div className="md:flex items-center bg-[#F9F9F9] rounded-full pl-3 pr-5 min-h-[40px] hidden">
            <SearchIcon className="h-6 w-6 text-gray-500 mr-2" />
            <form
              action={async (data: FormData) => {
                "use server";
                let searchQuery: string =
                  data.get("search")?.toString() || "general";
                redirect(`/search/${searchQuery}?value=${searchQuery}`);
              }}
            >
              <input
                className="bg-[#F9F9F9] outline-none text-sm placeholder-gray-500 placeholder:font-thin placeholder:text-md"
                type="text"
                name="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        {/* Right tabs  */}
        <div className="flex items-center md:gap-6 gap-2">
          {/* Write  */}
          <div className="flex items-center gap-1 md:mr-2">
            <PencilAltIcon className="h-6 w-6 text-gray-600" />
            <p className="text-sm md:block hidden">Write</p>
          </div>
          {/* Sign Up  */}
          <Link
            href="/sign-up"
            className="bg-[#1a8917] text-white text-sm md:px-3 px-2 md:py-2 py-[3px] rounded-full shadow-sm hover:bg-green-600"
          >
            Sign up
          </Link>
          {/* Sign In  */}
          <Link href="/sign-in" className="text-sm">
            Sign in
          </Link>
          <UserIcon className="h-6 w-6 text-gray-600 md:ml-auto ml-2" />
        </div>
      </div>
    </nav>
  );
}
