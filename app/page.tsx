import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#ffc017] xl:pl-96 pl-6">
        <Navbar/>
        <HomeBanner />
      </div>
    </main>
  );
}
