import NewsCard from "@/app/components/NewsCard";
import { Article } from "@/app/lib/types";
import React from "react";
import RecommendedStories from "./RecommendedStories";
import SubPageNavBar from "@/app/components/SubPageNavBar";
import TagHeader from "./TagHeader";

export default async function TagPage({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
  //Fetch Data
  const data = await fetch(`${process.env.BASE_URL}/api`, {
    headers: { category: params.slug },
  });
  //Parse Data
  const categoryNews = await data.json();
  const topic = searchParams?.value
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
      <div className="">
        <TagHeader tag={topic} />
        <div className="flex flex-wrap justify-center gap-12 w-10/12 mx-auto py-8 border-t-2">
          {recommendedNews}
        </div>
      </div>
      {/* <div className="flex flex-wrap w-11/12 ">{newsFeed}</div> */}
    </div>
  );
}
