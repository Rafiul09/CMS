import Hero from "./_components/Hero";
import CatSearch from "./_components/CatSearch";
import Services from "./_components/Services";
import Category from "./_components/Category";

import UploadImage from "./_components/UploadImage";





export default function Home() {

  return (
    <div>
      {/*hero section */}
      <Hero />
      {/*search bar + category */}
      <CatSearch />
      <Category />
      <Services />




    </div>
  );
}
