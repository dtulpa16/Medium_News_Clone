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

  return (
    <div key={key} className=" flex flex-col gap-3 w-full md:w-[45%]">
      <img src={article.image} className="min-h-[171px] md:min-h-[381px] w-full object-cover bg-[url('https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg')]" />
      <Link href="" className="text-sm">
        {article.sourceName}
      </Link>
      <h3 className="line-clamp-2 font-bold xl:text-xl text-md text-[#242424]">
        {article.title}
      </h3>
      <h3 className="md:line-clamp-1 xl:text-lg line-clamp-2 text-xs text-[#6B6B6B]">
        {article.body || bodyPlaceholder}
      </h3>
      <h4 className="line-clamp-2 font-thin text-sm text-[#6B6B6B]">
        {formatDate(article.publishedAt)}
      </h4>
    </div>
  );
}
