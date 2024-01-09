import { Suspense } from "react";
import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import NewsFeedList from "./components/NewsFeedList";
import MembershipModal from "./components/modals/MembershipModal/MembershipModal";
import { HomePageProps } from "./lib/types";
import Loading from "./tag/[slug]/loading";

export default function Home({ searchParams }: HomePageProps) {
  const showMembership = searchParams?.showMembership;
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <div className=" min-h-screen pt-[83px] bg-white">
          <div className="bg-[#ffc017]">
            <Navbar />
            <div className="bg-[#ffc017] 2xl:pl-96 xl:pl-[125px] md:pl-[75px] pl-6">
              <HomeBanner />
            </div>
          </div>
          <div className="bg-white 2xl:pl-96 lg:pl-[75px] md:pl-[50px] md:w-auto w-[95%] md:mx-0 mx-auto">
            <NewsFeedList />
          </div>
        </div>
        {showMembership && <MembershipModal />}
      </Suspense>
    </main>
  );
}
