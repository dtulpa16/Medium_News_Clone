import React from "react";

export default function HomeBanner() {
  return (
    <>
      <div className="flex flex-col justify-center text-black bg-[#ffc017] min-h-[507px]">
        <div className="xl:w-3/5 md:w-4/5">
          <h1 className="text-5xl xl:text-[110px] md:text-[105px] text-[70px] font-serif ">
            Stay Curious.
          </h1>
          <h2 className="my-4 py-3 pb-6 md:text-[23px] text-[20px] xl:w-2/5 md:w-4/5 font-semibold font-sans">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <button className="bg-black px-16 py-2 rounded-full text-white font-semibold sha text-xl drop-shadow">
            Start reading
          </button>
        </div>
        <div></div>
      </div>
      <div className="w-full absolute left-0 border-black border-solid border-b-[1px]" />
    </>
  );
}
