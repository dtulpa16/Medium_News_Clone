import React from "react";
import { Article } from "../lib/types";
import NewsCard from "./NewsCard";
import TrendingIcon from "../lib/icons/TrendingIcon";
import SubFeed from "./SubFeed";

export default async function NewsFeedList() {
  const data = await fetch(`${process.env.BASE_URL}/api`);
  let newsList = await data.json();
  const mainNewsList = newsList.data.slice(0, 6);
  const subNewsList = newsList.data.slice(7, newsList.data.length);
  const newsFeed = mainNewsList.map((el: Article, i: number) => (
    <NewsCard article={el} count={i} />
  ));
  return (
    <div className="flex flex-col pt-11 xl:gap-16 gap-8">
      <div className=" border-zinc-300 border-solid border-b-[1px] w-full pb-10">
        <div className="ml-3 flex flex-row gap-4">
          <TrendingIcon />
          <h2 className="text-black font-semibold text-lg">
            Trending on Shmedium
          </h2>
        </div>
        <div className="flex flex-wrap w-11/12 ">{newsFeed}</div>
      </div>
      <SubFeed articles={subNewsList} />
    </div>
  );
}
