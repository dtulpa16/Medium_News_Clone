import React from "react";
import { Article } from "../lib/types";
import SubFeedCard from "./SubFeedCard";
type SubFeedProps = {
  articles: Article[];
};
const SubFeed: React.FC<SubFeedProps> = ({ articles }) => {
  return (
    <div className="flex flex-col gap-7 w-auto md:w-1/2">
      {articles.map((el, i) => (
        <SubFeedCard article={el} key={i} />
      ))}
    </div>
  );
};
export default SubFeed;