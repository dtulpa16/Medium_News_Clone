import React from "react";
import { Article } from "../lib/types";
import Link from "next/link";
import { formatDate } from "./NewsCard";
import RandomInfo from "./RandomStoryInfo";
import Image from "next/image";
import { placeholder } from "../lib/placeholderimg";
type SubFeedCardProps = {
  article: Article;
  key: number;
};
export const bodyPlaceholder =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const SubFeedCard: React.FC<SubFeedCardProps> = ({ article }) => {
  return (
    <div className="flex xl:h-[175px] md:h-[150px] xl:gap-6 md:gap-4 gap-6">
      <div className="flex flex-col text-black gap-2 xl:max-w-[650px] md:max-w-[400px] max-w-[240px]">
        <Link href="/" className="text-sm">
          {article.sourceName}
        </Link>
        <h3 className="line-clamp-2 font-bold xl:text-xl text-md">
          {article.title}
        </h3>
        <h3 className="md:line-clamp-1 xl:text-lg text-sm hidden">
          {article.body || bodyPlaceholder}
        </h3>
        <div className="pb-4 md:pb-0">
          <RandomInfo date={formatDate(article.publishedAt)} />
        </div>
      </div>
      <div className="md:min-w-[200px] md:h-[134px] w-[100px] h-[100px] relative">
        <Image
          src={article.image || "https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg"}
          className=""
          alt="Article image"
          placeholder="blur"
          blurDataURL={placeholder}
          fill
          sizes="(min-width: 768px) 200px, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};
export default SubFeedCard;
