import Sponsors from "../componets/sponsors/Sponsors";
import Footer from "../componets/footer/Footer";
import Image from "next/image";
import HomePage from "../componets/home/HomePage";
import Speakers from "@/componets/Speakers/Speakers";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        {/* <HomePage /> */}
        <Speakers />
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}
