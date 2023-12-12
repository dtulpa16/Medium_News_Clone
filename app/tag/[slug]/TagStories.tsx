import React from "react";
import { Article } from "@/app/lib/types";
import Link from "next/link";
import { bodyPlaceholder } from "@/app/components/SubFeedCard";
import { formatDate } from "@/app/components/NewsCard";
import RandomInfo from "@/app/components/RandomStoryInfo";
import { placeholder } from "@/app/lib/placeholderimg";
import Image from "next/legacy/image";
type TagStoryCardProps = {
  article: Article;
  key: number;
};

export default function TagStories({ article, key }: TagStoryCardProps) {
  return (
    <div
      key={key}
      className="flex flex-col justify-between gap-3 md:px-4 py-4 md:py-auto w-full sm:w-1/2 lg:w-1/2 xl:w-1/3"
    >
      <div className="relative h-[171px] md:h-[182px] w-full">
        <Image
          src={article.image}
          layout="fill"
          objectFit="cover"
          alt="Article image"
          placeholder="blur"
          blurDataURL={placeholder}
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
