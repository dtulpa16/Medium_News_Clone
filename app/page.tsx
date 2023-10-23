import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import NewsFeedList from "./components/NewsFeedList";

export default function Home() {
  return (
    <main className=" bg-white min-h-screen">
      <div className="bg-[#ffc017] xl:pl-96 md:pl-[75px] pl-6">
        <Navbar />
        <HomeBanner />
      </div>
      <div className="bg-white xl:pl-96 md:pl-[75px] pl-6">
        <NewsFeedList />
      </div>
    </main>
  );
}
