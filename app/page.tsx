import { Hero } from "./hero";
import { NaslednjiDogodek } from "./naslednji-dogodek";
import { Aktivnosti } from "./aktivnosti";
import { Reviews } from "./reviews";
export default function Page() {
  return (
    <>
    <Hero />
    <NaslednjiDogodek />
    <Aktivnosti />
    <Reviews />
    </>
  );
}
