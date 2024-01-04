import { Article } from "@/app/lib/types";
import React, { Suspense } from "react";
import RecommendedStories from "@/app/tag/[slug]/RecommendedStories";
import SubPageNavBar from "@/app/components/SubPageNavBar";
import TagHeader from "@/app/tag/[slug]/TagHeader";
import TagStories from "@/app/tag/[slug]/TagStories";
import Loading from "@/app/tag/[slug]/loading";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //Fetch Data
  const data = await fetch(`${process.env.BASE_URL}/api`, {
    headers: { keywords: params.slug },
  });
  //Parse Data
  const categoryNews = await data.json();
  const topic = searchParams?.value;
  //Recommended Stories
  const recommendedStories = categoryNews.data.slice(0, 2);
  const recommendedNews = recommendedStories.map((el: Article, i: number) => (
    <RecommendedStories key={el._id || i} article={el} index={i} />
  ));
  // Main Stories
  const mainCategoryNews = categoryNews.data.slice(3, categoryNews.data.length);
  const newsFeed = mainCategoryNews.map((el: Article, i: number) => (
    <TagStories key={el._id || i} article={el} index={i} />
  ));

  return (
    <div className=" bg-white min-h-screen">
      <SubPageNavBar />

      <TagHeader tag={topic} />
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col w-11/12 2xl:w-[65%] lg:w-[75%] mx-auto">
          <h1 className="border-t-[1px] py-6 md:py-8 font-semibold text-xl md:text-3xl text-black tracking-tighter">
            {" "}
            Recommended stories{" "}
          </h1>
          <div className="flex flex-wrap justify-between">
            {recommendedNews}
          </div>
          <div className="flex flex-wrap justify-between py-6 border-t-[1px] my-5 md:my-10">
            {newsFeed}
          </div>
        </div>
      </Suspense>
    </div>
  );
}