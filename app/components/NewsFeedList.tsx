import React from "react";
import { Article } from "../lib/types";
import NewsCard from "./NewsCard";
export default async function NewsFeedList() {
  const data = await fetch(`${process.env.BASE_URL}/api`);
  let newsList = await data.json();
  const newsFeed = newsList.data.map((el: Article, i: number) => (
    <NewsCard article={el} count={i} />
  ));
  return (
    <div className="flex flex-col pt-11 pb-2">
      <h2 className="text-black font-semibold text-lg">Trending on Shmedium</h2>
      <div className="flex flex-wrap">{newsFeed}</div>;
    </div>
  );
}
