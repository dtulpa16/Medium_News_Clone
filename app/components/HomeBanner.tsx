import React from "react";

export default function HomeBanner() {
  return (
    <div className="flex flex-col justify-center text-black bg-[#ffc017] min-h-[505px]">
      <div className="md:w-3/5">
        <h1 className="text-5xl font-bold md:text-[85px] text-[70px]">
          Stay Curious
        </h1>
        <h2 className="my-4 py-6 md:text-[23px] text-[20px] xl:w-2/5 md:w-4/5">
          Discover stories, thinking, and expertise from writers on any topic.
        </h2>
        <button className="bg-[#191919] px-16 py-2 rounded-2xl text-zinc-100 font-bold text-xl">
          Get Started
        </button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
