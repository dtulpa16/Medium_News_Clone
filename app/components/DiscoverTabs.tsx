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
    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-black text-lg">
        Discover more of what matters to you
      </h4>
      <div>
        {Tabs.map((el, i) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
}
