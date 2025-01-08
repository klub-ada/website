import { Footer } from "@/app/components/footer";
import Hero from "./hero";
import { NaslednjiDogodek } from "../naslednji-dogodek";

export default function Page() {
  return (
    <>
      <Hero />
      <NaslednjiDogodek />
      <Footer />
    </>
  );
}
