import React from "react";
import { Article } from "@/app/lib/types";
import Link from "next/link";
import { bodyPlaceholder } from "@/app/components/SubFeedCard";
import { formatDate } from "@/app/components/NewsCard";
import RandomInfo from "@/app/components/RandomStoryInfo";
import { placeholder } from "@/app/lib/placeholderimg";
import Image from "next/image";
type TagStoryCardProps = {
  article: Article;
  index: number;
};

export default function TagStories({ article, index }: TagStoryCardProps) {
  return (
    <div
      className="flex flex-col justify-between gap-3 md:px-4 py-4 md:py-auto w-full sm:w-1/2 lg:w-1/2 xl:w-1/3"
    >
      <div className="relative h-[171px] md:h-[182px] w-full">
        <Image
          src={article.image || "https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg"}
          alt="Article image"
          placeholder="blur"
          blurDataURL={placeholder}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <Link href="/" className="text-sm">
        {article.sourceName}
      </Link>
      <h3 className="line-clamp-2 font-bold xl:text-lg text-md text-[#242424]">
        {article.title}
      </h3>
      <h3 className="md:line-clamp-1 xl:text-lg line-clamp-2 text-xs text-[#6B6B6B]">
        {article.body || bodyPlaceholder}
      </h3>
      <div className="">
        <RandomInfo date={formatDate(article.publishedAt)} />
      </div>
    </div>
  );
}
