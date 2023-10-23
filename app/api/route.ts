import { Article } from "../lib/types";
type ApiResponse = {
  data: Article[];
}
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "world";
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "20";
  const res = await fetch(
    `https://newsi-api.p.rapidapi.com/api/category?category=${category}&language=en&country=us&sort=top&page=${page}&limit=${limit}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.NEWS_API_KEY || "",
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    }
  );
  const data: Article[] = await res.json();

  return Response.json({ data }); 
}
