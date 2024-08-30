import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CatSearch from "./_components/CatSearch";
import Footer from "./_components/Footer";
import UploadImage from "./_components/UploadImage";





export default function Home() {

  return (
    <div>
      {/*hero section */}
      <Hero />
      {/*search bar + category */}
      <CatSearch />

     


    </div>
  );
}
