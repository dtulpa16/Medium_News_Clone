import React from "react";
import { Article } from "../lib/types";
import NewsCard from "./NewsCard";
import TrendingIcon from "../lib/icons/TrendingIcon";
import SubFeed from "./SubFeed";
import DiscoverTabs from "./DiscoverTabs";

export default async function NewsFeedList() {
  const data = await fetch(`${process.env.BASE_URL}/api`);
  let newsList = await data.json();
  const mainNewsList = newsList.data.slice(0, 6);
  const subNewsList = newsList.data.slice(7, newsList.data.length);
  const newsFeed = mainNewsList.map((el: Article, i: number) => (
    <NewsCard key={i} article={el} count={i} />
  ));
  return (
    <div className="flex flex-col pt-11 xl:gap-16 gap-8">
      <div className=" border-zinc-300 w-full pb-10">
        <div className="ml-3 flex flex-row gap-4">
          <TrendingIcon />
          <h2 className="text-black font-semibold text-lg">
            Trending on Medium
          </h2>
        </div>
        <div className="flex flex-wrap md:w-10/12 w-11/12 ">{newsFeed}</div>
      </div>
      <div className="border-b-2 md:w-4/5 w-11/12" />
      <div className="2xl:flex 2xl:flex-row flex flex-col-reverse gap-8 w-full">
        <SubFeed articles={subNewsList} />
        <DiscoverTabs />
      </div>
    </div>
  );
}
