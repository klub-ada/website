import { Hero } from "./hero";
import { NaslednjiDogodek } from "./naslednji-dogodek";
import { Aktivnosti } from "./aktivnosti";
import { Reviews } from "./reviews";
import { TopBlogs } from "./top-blogs";
import { Footer } from "../components/footer";
import { Logos } from "./logos";
import { Discord } from "./discord";
export default function Page() {
  return (
    <>
      <Hero />
      <Logos />
      <NaslednjiDogodek />
      <Aktivnosti />
      <Reviews />
      <Discord />
      <TopBlogs />
      <Footer />
    </>
  );
}
