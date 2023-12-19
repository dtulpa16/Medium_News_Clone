import { formatDate } from "@/app/components/NewsCard";
import RandomInfo from "@/app/components/RandomStoryInfo";
import { bodyPlaceholder } from "@/app/components/SubFeedCard";
import { placeholder } from "@/app/lib/placeholderimg";
import { Article } from "@/app/lib/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getRandomImageUrl } from "@/app/lib/getRandomImageUrl";
type RecommendedStoryCardProps = {
  article: Article;
  index: number;
};
export default function RecommendedStories({
  article,
  index,
}: RecommendedStoryCardProps) {
  return (
    <Link
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className=" flex flex-col gap-2 w-full md:w-[48%]"
    >
      <div
        rel="noreferrer"
        className="relative min-h-[171px] md:h-[381px] w-full"
      >
        <Image
          src={article.image || getRandomImageUrl()}
          className="rounded-lg"
          alt="Article image"
          placeholder="blur"
          blurDataURL={placeholder}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <p className="text-sm">{article.sourceName}</p>
      <h3 className="line-clamp-2 font-bold xl:text-2xl text-xl text-[#242424]">
        {article.title}
      </h3>
      <h3 className="md:line-clamp-1 xl:text-lg line-clamp-2 text-xs text-[#6B6B6B]">
        {article.body || bodyPlaceholder}
      </h3>
      <div className="pb-4 md:pb-0">
        <RandomInfo date={formatDate(article.publishedAt)} />
      </div>
    </Link>
  );
}
