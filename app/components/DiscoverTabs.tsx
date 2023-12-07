import Link from "next/link";
import React from "react";

const Tabs: { label: string; value: string }[] = [
  { label: "Programming", value: "science_and_technology" },
  { label: "Sports", value: "sports" },
  { label: "World News", value: "world" },
  { label: "Business", value: "business" },
  { label: "Education", value: "education" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Travel", value: "travel" },
];

export default function DiscoverTabs() {
  return (
    <div className="md:flex flex-col gap-3 hidden">
      <h4 className="font-bold text-black text-lg">
        Discover more of what matters to you
      </h4>
      <div className="flex gap-3  flex-wrap relative w-4/6">
        {Tabs.map((el, i) => (
          <Link
            href={`/tag/${el.value}`}
            key={i}
            className=" text-black text-sm p-3 px-4 rounded-full hover:cursor-pointer bg-[#f2f2f2]"
          >
            {el.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
