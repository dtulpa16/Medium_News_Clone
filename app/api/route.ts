import { headers } from "next/headers";
import { Article, convertToArticle } from "../lib/types";

export async function GET(request: Request) {
  const headersList = headers();
  const { searchParams } = new URL(request.url);
  const category = headersList.get("category") || "general";
  const page = searchParams.get("page") || "0";
  const limit = searchParams.get("limit") || "30";
  
  debugger;
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.NEWS_API_KEY}&categories=${category}&languages=en&country=us&offset=${page}&limit=${limit}`
  );
  const json = await res.json();
  const mappedArticles: Article[] = await json.data.map(convertToArticle);
  let data: Article[] = mappedArticles.reduce((acc: Article[], current: Article) => {
    // Find if there's an article in the accumulator with the same title
    const isDuplicate = acc.some(item => item.title === current.title);
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);
  data = data.length > 0 ? data : []
  console.log(data)
  return Response.json({ data })
  // const headersList = headers()
  // const { searchParams } = new URL(request.url);
  // const category = headersList.get("category") || "world";
  // // const category = searchParams.get("category") || "world";
  // const page = searchParams.get("page") || "1";
  // const limit = searchParams.get("limit") || "20";

  // debugger
  // const res = await fetch(
  //   `https://newsi-api.p.rapidapi.com/api/category?category=${category}&language=en&country=us&sort=top&page=${page}&limit=${limit}`,
  //   {
  //     headers: {
  //       "X-RapidAPI-Key": process.env.NEWS_API_KEY || "",
  //       "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
  //     }
  //   },

  // );
  // const data: Article[] = await res.json();
  // return Response.json({ data });
}
