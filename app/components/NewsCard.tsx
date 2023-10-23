import React from "react";
import { Article } from "../lib/types";
type NewsCardProps = {
    article: Article;
    count: number
  }
export default function NewsCard({ article }: NewsCardProps) {
  return <div className="xl:w-1/3 md: w-1/2">NewsCard</div>;
}
