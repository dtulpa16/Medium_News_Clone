import NewsCard from "@/app/components/NewsCard";
import { Article } from "@/app/lib/types";
import React from "react";
import RecommendedStories from "./RecommendedStories";
import SubPageNavBar from "@/app/components/SubPageNavBar";

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(`${process.env.BASE_URL}/api`, {
    headers: { category: params.slug },
  });
  const categoryNews = await data.json();
  //Recommended Stories
  const recommendedStories = categoryNews.data.slice(0, 2);
  const recommendedNews = recommendedStories.map((el: Article, i: number) => (
    <RecommendedStories article={el} key={i} />
  ));
  // Main Stories
  const mainCategoryNews = categoryNews.data.slice(3, categoryNews.data.length);
  const newsFeed = mainCategoryNews.map((el: Article, i: number) => (
    <NewsCard article={el} count={i} />
  ));

  return (
    <div className=" bg-white min-h-screen">
      <SubPageNavBar />
      <div className="flex flex-wrap justify-center gap-12 w-10/12 mx-auto">
        {recommendedNews}
      </div>
      {/* <div className="flex flex-wrap w-11/12 ">{newsFeed}</div> */}
    </div>
  );
}
