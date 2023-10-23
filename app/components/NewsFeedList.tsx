import React from "react";

export default async function NewsFeedList() {
  const newsList = await fetch(`${process.env.BASE_URL}/api`);
  return <div>NewsFeedList</div>;
}
