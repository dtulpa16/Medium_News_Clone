import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import NewsFeedList from "./components/NewsFeedList";
import { HomePageProps } from "./lib/types";

export default function Home({ searchParams }: HomePageProps) {
  return (
    <main>
      <div className=" min-h-screen pt-[83px] bg-white">
        <div className="bg-[#ffc017]">
          <Navbar />
          <div className="bg-[#ffc017] xl:pl-96 md:pl-[75px] pl-6">
            <HomeBanner />
          </div>
        </div>
        <div className="bg-white 2xl:pl-96 lg:pl-[75px] md:pl-[50px] md:w-auto w-[95%] md:mx-0 mx-auto">
          <NewsFeedList />
        </div>
      </div>
    </main>
  );
}
