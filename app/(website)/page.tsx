import { Hero } from "./hero";
import { NaslednjiDogodek } from "./naslednji-dogodek";
import { Aktivnosti } from "./aktivnosti";
import { Reviews } from "./reviews";
import { TopBlogs } from "./top-blogs";
import { Footer } from "../components/footer";
export default function Page() {
  return (
    <>
      <Hero />
      <NaslednjiDogodek />
      <Aktivnosti />
      <Reviews />
      <TopBlogs />
      <Footer />
    </>
  );
}
