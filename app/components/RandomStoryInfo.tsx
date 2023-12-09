import React from "react";
import { MdOutlineStar } from "react-icons/md";

const RandomInfo = ({ date }: { date: string }) => {
  // Random number for minutes read between 3 and 30
  const minRead = Math.floor(Math.random() * (30 - 3 + 1)) + 3;

  // Random boolean to determine if the star should be displayed
  const showStar = Math.random() < 0.5; // 50% chance to show the star

  return (
    <div className="flex items-center space-x-2 text-gray-600 text-md leading-tight">
      {showStar && (
        <>
          <span className="text-yellow-500">
            <MdOutlineStar />
          </span>
          <span>·</span>
        </>
      )}
      <span className="text-xs ">
        {minRead} min read
      </span>
      <span>·</span>
      <span className="text-xs ">{date}</span>
    </div>
  );
};

export default RandomInfo;
