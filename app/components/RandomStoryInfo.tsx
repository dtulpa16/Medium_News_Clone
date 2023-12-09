import React from "react";
import { MdOutlineStar } from "react-icons/md";

const RandomInfo = ({ date }: { date: string }) => {
  // Random number for minutes read between 3 and 30
  const minRead = Math.floor(Math.random() * (30 - 3 + 1)) + 3;
  // Random number for days ago between 1 and 20
  const daysAgo = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs md:text-sm lg:text-base">
        <MdOutlineStar className="text-yellow-500" />{" "}
      </span>
      <span>·</span>
      <span className="text-xs md:text-sm lg:text-base">
        {minRead} min read
      </span>
      <span>·</span>
      <span className="text-xs md:text-sm lg:text-base">{date}</span>
    </div>
  );
};

export default RandomInfo;
