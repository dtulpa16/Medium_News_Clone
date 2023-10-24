import React from "react";
import { Article } from "../lib/types";
type NewsCardProps = {
  article: Article;
  count: number;
};
export default function NewsCard({ article, count }: NewsCardProps) {
  return (
    <div className="xl:w-1/3 md:w-1/2 w-full flex gap-5 p-2">
      <div className=" font-bold text-gray-200 text-3xl">{count < 10 && 0}{count}</div>
      <div className="flex flex-col overflow-auto text-black gap-1">
        <a href="">{article.sourceName}</a>
        <h3 className="line-clamp-2 font-bold">{article.title}</h3>
      </div>
    </div>
  );
}
