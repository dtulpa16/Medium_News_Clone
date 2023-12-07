import NewsCard from "@/app/components/NewsCard";
import { Article } from "@/app/lib/types";
import React from "react";

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(`${process.env.BASE_URL}/api`, {
    headers: { category: params.slug },
  });
  const categoryNews = await data.json();
  console.log("TAG DATA: ", categoryNews);

  const recommendedStories = categoryNews.data.slice(0, 2);
  const mainCategoryNews = categoryNews.data.slice(3, categoryNews.data.length);
  const newsFeed = mainCategoryNews.map((el: Article, i: number) => (
    <NewsCard article={el} count={i} />
  ));
  return (
    <div>
      <div className="flex flex-wrap w-11/12 ">{newsFeed}</div>
    </div>
  );
}
