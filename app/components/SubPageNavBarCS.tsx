'use client'
import React,{useState} from "react";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { SearchIcon, PencilAltIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/navigation'//

export default function SubPageNavBar() {
  const {userId} = useAuth();//
  const router = useRouter()//
  const [searchQuery,setSearchQuery] = useState<string>()
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    router.push(`/search/${searchQuery}?value=${searchQuery}`)
  }
  return (
    <nav className="bg-white shadow">
      <div className="w-[97%] mx-auto min-h-[83px] flex justify-between items-center">
        <div className="content-start flex gap-[1px] items-center align-middle pl-2">
          {/* Icon  */}
          <div className="flex gap-[1px] items-center">
            <div className="min-h-[23px] w-[23px] bg-black rounded-full"></div>
            <div className="min-h-[21px] w-[12px] bg-black rounded-squeeze"></div>
            <div className="min-h-[19px] w-[4px] bg-black rounded-e-full rounded-s-full rounded-squeeze-bottom"></div>
          </div>
          {/* Brand  */}
          <button
            onClick={()=>router.push("/")}
            className=" text-[25px] font-bold pl-1 hover:cursor-pointer text-black md:mr-4 font-serif tracking-tighter"
          >
            Medium
          </button>
          {/* Search Bar  */}
          <div className="md:flex items-center bg-[#F9F9F9] rounded-full pl-3 pr-5 min-h-[40px] hidden">
            <SearchIcon className="h-6 w-6 text-gray-500 mr-2" />
            <form onSubmit={handleSearch}
            >
              <input
                className="bg-[#F9F9F9] outline-none text-sm placeholder-gray-500 placeholder:font-thin placeholder:text-md"
                type="text"
                onChange={(e)=>setSearchQuery(e.target.value)}
                value={searchQuery}
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
          {!userId ? (
            <>
              <button
                onClick={()=>router.push("/sign-up")}
                className="bg-[#1a8917] text-white text-sm md:px-3 px-2 md:py-2 py-[3px] rounded-full shadow-sm hover:bg-green-600"
              >
                Sign up
              </button>
              {/* Sign In  */}
              <button onClick={()=>router.push("/sign-in")} className="text-sm">
                Sign in
              </button>
            </>
          ) : (
            <div className="mr-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
