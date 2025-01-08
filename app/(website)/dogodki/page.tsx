import { Footer } from "@/app/components/footer";
import Hero from "./hero";
import { NaslednjiDogodek } from "../naslednji-dogodek";
import PastEvents from "./past-events";

export default function Page() {
  return (
    <>
      <Hero />
      <NaslednjiDogodek />
      <PastEvents />
      <Footer />
    </>
  );
}
