import { Button } from "@/app/components/button";
import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import Image from "next/image";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <Image
          src="/assets/computer-illustration.svg"
          width={100}
          height={100}
          alt="Computer illustration"
          className="w-[80px] md:w-[120px] lg:w-[160]"
        />
        <Heading size="xl" className="text-center max-w-4xl">
          {
            "Navdušujemo ženske nad tehnologijo   in jih podpiramo na karierni poti."
          }
        </Heading>
        <div className="">
          <Button size="md" variant="secondary">
            {"Spoznaj ekipo"}
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/assets/team.jpg"
          width={1500}
          height={1500}
          alt="Klub Ada Team image"
          className="w-full object-cover bg-top object-[50%_10%] max-h-[42rem] rounded-2xl border border-black my-6"
        />
      </div>
    </PageWrapper>
  );
}
