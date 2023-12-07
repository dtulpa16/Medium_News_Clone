import React from "react";

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(`${process.env.BASE_URL}/api`, {
    headers: { category: params.slug },
  });
  const categoryNews = await data.json();
  console.log("TAG DATA: ", categoryNews);
  return <div>page</div>;
}
