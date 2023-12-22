import Link from "next/link";
import React from "react";

const Tabs: { label: string; value: string }[] = [
  { label: "Technology", value: "technology" },
  { label: "Science", value: "science" },
  { label: "Sports", value: "sports" },
  { label: "World News", value: "general" },
  { label: "Business", value: "business" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
];

export default function DiscoverTabs() {
  return (
    <div className="md:flex flex-col gap-3 sm:w-10/12 sm:m-0 w-full m-auto relative">
      <h4 className="font-bold text-black text-lg mb-4 md:mb-0">
        Discover more of what matters to you
      </h4>
      <div className="flex gap-3 flex-wrap relative md:w-4/6 ld:max-w-[375px]">
        {Tabs.map((el, i) => (
          <Link
            href={`/tag/${el.value}?value=${el.label}`}
            key={i}
            className=" text-black text-xs sm:text-sm p-3 px-4 rounded-full hover:cursor-pointer bg-[#f2f2f2]"
          >
            {el.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
