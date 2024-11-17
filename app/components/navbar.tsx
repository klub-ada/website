import Image from "next/image";
import { Button } from "./button";
import { Link } from "./link";

export function Navbar() {
  return (
    <nav className="mx-5 md:mx-20 px-5 md:px-10 h-20 bg-white rounded-b-2xl border border-black border-t-0 flex items-center justify-between gap-2">
      <Image
        src="/assets/klub-ada-logo.svg"
        width={70}
        height={45}
        className="hidden md:block"
        alt="Klub ada logo"
      />
      <Image
        src="/assets/klub-ada-logo.svg"
        width={62}
        height={39}
        className="block md:hidden"
        alt="Klub ada logo"
      />
      <ol className="items-center gap-10 hidden md:flex">
        <li>
          <Link href="/o-nas">O nas</Link>
        </li>
        <li>
          <Link href="/dogodki">Dogodki</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/partnerstvo">Partnerstva</Link>
        </li>
      </ol>
      <Button className="hidden md:block">Pridruži se nam</Button>
    </nav>
  );
}