import Image from "next/image";
import Banner from "../components/home/Banner";
import Marquee from "react-fast-marquee";
import Feature from "../components/home/Feature";
import Categories from "../components/home/Categories";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-10 py-20">

      <div className="w-full px-20">
        <Banner />
      </div>

      <div className="bg-blue-600 text-white text-sm px-10 py-6">
        <Marquee className="whitespace-nowrap px-10">
          NEW ARRIVALS: THE ART OF CODE &nbsp;&nbsp; • &nbsp;&nbsp;
          20% OFF PREMIUM SUBSCRIPTIONS &nbsp;&nbsp; • &nbsp;&nbsp;
          SUMMER READING CHALLENGE LIVE
        </Marquee>
      </div>

      <div className="w-full px-20">
        <Feature />
      </div>

      <div className="w-full px-20">
        <Categories />
      </div>

      <div className="w-full px-20">
        <Stats />
      </div>

    </main>
  );
}
