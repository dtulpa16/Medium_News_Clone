import React from "react";

export default function TagHeader({ tag }: { tag: string | string[] | undefined }) {
  return (
    <div className="flex flex-col text-center gap-5 w-2/3 md:w-1/3 mx-auto items-center py-20">
      <h1 className="font-semibold md:font-bold text-xl md:text-4xl text-black ">{tag}</h1>
      <div className="flex items-center text-[#6B6B6B] gap-3">
        <p>Topic</p>
        <p>·</p>
        <p>4.6M Followers</p>
        <p>·</p>
        <p>350K Stories</p>
      </div>
      <button className="bg-black py-2 px-3 text-white w-min rounded-full">
        Follow
      </button>
    </div>
  );
}
