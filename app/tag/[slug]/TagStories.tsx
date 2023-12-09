import React from 'react'
import { Article } from '@/app/lib/types';
import Link from 'next/link';
import { bodyPlaceholder } from '@/app/components/SubFeedCard';
import { formatDate } from '@/app/components/NewsCard';
type TagStoryCardProps = {
    article: Article;
    key: number;
  };

export default function TagStories({article, key}: TagStoryCardProps) {
    return (
        <div key={key} className="flex flex-col gap-3 md:px-4 py-4 md:py-auto w-full sm:w-1/2 lg:w-1/2 xl:w-1/3">
          <img src={article.image} className="min-h-[171px] md:h-[182px] w-full object-cover bg-[url('https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg')]" />
          <Link href="" className="text-sm">
            {article.sourceName}
          </Link>
          <h3 className="line-clamp-2 font-bold xl:text-lg text-md text-[#242424]">
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
