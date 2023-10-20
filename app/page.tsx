import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#ffc017] md:pl-64 pl-12">
        <Navbar/>
        <HomeBanner />
      </div>
    </main>
  );
}
