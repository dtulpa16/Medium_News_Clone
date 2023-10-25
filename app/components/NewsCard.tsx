import React from "react";
import { Article } from "../lib/types";
type NewsCardProps = {
  article: Article;
  count: number;
};
const formatDate = (dateStr : string) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dateStr);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
export default function NewsCard({ article, count }: NewsCardProps) {
  return (
    <div className="xl:w-1/3 md:w-1/2 w-full flex gap-5 p-2 py-4 tracking-tight">
      <div className=" font-semibold text-gray-200 text-4xl -mt-1">{count + 1 < 10 && 0}{count + 1}</div>
      <div className="flex flex-col overflow-auto text-black gap-2">
        <a href="" className="text-sm">{article.sourceName}</a>
        <h3 className="line-clamp-2 font-bold text-lg max-w-[320px]">{article.title}</h3>
        <h4 className="line-clamp-2 font-thin text-sm">{formatDate(article.publishedAt)}</h4>
      </div>
    </div>
  );
}
