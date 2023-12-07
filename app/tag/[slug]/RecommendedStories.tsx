import { formatDate } from "@/app/components/NewsCard";
import { bodyPlaceholder } from "@/app/components/SubFeedCard";
import { Article } from "@/app/lib/types";
import Link from "next/link";
import React from "react";
type RecommendedStoryCardProps = {
  article: Article;
  key: number;
};
export default function RecommendedStories({
  article,
  key,
}: RecommendedStoryCardProps) {
    console.log(article.image)
  return (
    <div key={key} className=" flex flex-col gap-3 w-[95%] md:w-[45%]">
      <img src={article.image} className="min-h-[171px] md:min-h-[381px] w-full object-cover bg-[url('https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg')]" />
      <Link href="" className="text-sm">
        {article.sourceName}
      </Link>
      <h3 className="line-clamp-2 font-bold xl:text-xl text-md">
        {article.title}
      </h3>
      <h3 className="md:line-clamp-1 xl:text-lg text-sm hidden">
        {article.body || bodyPlaceholder}
      </h3>
      <h4 className="line-clamp-2 font-thin text-sm">
        {formatDate(article.publishedAt)}
      </h4>
    </div>
  );
}