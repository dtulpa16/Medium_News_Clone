import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import NewsFeedList from "./components/NewsFeedList";
import { HomePageProps } from "./lib/types";

export default function Home({ searchParams }: HomePageProps) {
  return (
    <main >
      <div className="bg-white min-h-screen pt-[83px]">
        <Navbar />
        <div className="bg-[#ffc017] xl:pl-96 md:pl-[75px] pl-4">
          <HomeBanner />
        </div>
        <div className="bg-white xl:pl-96 md:pl-[75px] pl-4">
          <NewsFeedList />
        </div>
      </div>
    </main>
  );
}
