import React from "react";

export default function HomeBanner() {
  return (
    <div className="text-black bg-[#ffc017]">
      <div className="flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Stay Curious</h1>
          <p className="py-6">
          Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
