import { headers } from "next/headers";
import { Article, convertToArticle } from "../lib/types";
import { defaultArticles } from "../lib/defaultNewsArticles";

export async function GET(request: Request) {
  const headersList = headers();
  const { searchParams } = new URL(request.url);
  const category = headersList.get("category") || "general";
  const keywords = headersList.get("keywords") || "";
  const page = searchParams.get("page") || "0";
  const limit = headersList.get("limit") || "17";
  
  debugger;
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.NEWS_API_KEY}&keywords=${keywords}&categories=${category}&languages=en&country=us&offset=${page}&limit=${limit}`
  );
  const json = await res.json();
  const mappedArticles: Article[] = json.data.length > 0 ? json.data.map(convertToArticle) : defaultArticles;
  let data: Article[] = mappedArticles.reduce((acc: Article[], current: Article) => {
    // Function to extract the first four words from a title
    const getFirstFourWords = (title: string) => {
      return title.split(' ').slice(0, 5).join(' ');
    };
  
    // Extract the first four words from the current article's title
    const currentExcerpt = getFirstFourWords(current.title);
  
    // Check if there's an article in the accumulator with the same first four words
    const isDuplicate = acc.some(item => getFirstFourWords(item.title) === currentExcerpt);
  
    if (!isDuplicate) {
      acc.push(current);
    }
  
    return acc;
  }, []);
  data = data.length > 0 ? data : []
  return Response.json({ data })
}
