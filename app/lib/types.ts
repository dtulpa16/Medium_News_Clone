export type Article = {
  _id: string;
  body: string | null;
  hasBody: boolean;
  image: string;
  link: string;
  publishedAt: string;
  publishedTimestamp: number;
  shortLink: string;
  sourceName: string;
  title: string;
};
export function convertToArticle(apiArticle: any): Article {
  return {
    _id: apiArticle.published_at,
    hasBody: true,
    title: apiArticle.title,
    body: apiArticle.description,
    link: apiArticle.url,
    sourceName: apiArticle.source,
    image: apiArticle.image,
    publishedAt: apiArticle.published_at,
    publishedTimestamp: apiArticle.published_at,
    shortLink:apiArticle.url
  };
}
export type HomePageProps = {
  searchParams: Record<string, string> | null | undefined;
};
export type PlanFeature = {
  text: string;
}

export type Plan = {
  title: string;
  price: string;
  features: PlanFeature[];
  highlighted?: boolean;
}