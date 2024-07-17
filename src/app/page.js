import Navbar from "@/app/components/navbar/Navbar";
import PlotSearch from "./components/options/search";
import Image from "next/image";
import bgImage from "../../public/building.jpeg";

export default function Home() {
  return (
    <>
      <main>
          <div className="absolute inset-0 z-[-10]">
            <Image src={bgImage} layout="fill" alt="Background Image" />
          </div>
          <section className="relative w-full flex justify-start items-center">
            <Navbar />
          </section>
          <section className="w-full flex justify-between">
            <div className="mt-3">
              <PlotSearch />
            </div>
          </section>
      </main>
    </>
  );
}
