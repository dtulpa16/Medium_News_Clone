import React from "react";

const Tabs: string[] = [
  "Programming",
  "Data Science",
  "Technology",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
];

export default function DiscoverTabs() {
  return (
    <div className="md:flex flex-col gap-3 hidden">
      <h4 className="font-bold text-black text-lg">
        Discover more of what matters to you
      </h4>
      <div className="flex gap-3  flex-wrap relative w-4/6">
        {Tabs.map((el, i) => (
          <div className=" text-black text-sm p-3 px-4 rounded-full bg-[#f2f2f2]">{el}</div>
        ))}
      </div>
    </div>
  );
}