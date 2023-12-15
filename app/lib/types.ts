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