import React from "react";
import { Article } from "../lib/types";
import SubFeedCard from "./SubFeedCard";
type SubFeedProps = {
  articles: Article[];
};
const SubFeed: React.FC<SubFeedProps> = ({ articles }) => {
  return (
    <div className="flex flex-col xl:gap-9 gap-7">
      {articles.map((el) => (
        <SubFeedCard article={el} />
      ))}
    </div>
  );
};
export default SubFeed;
