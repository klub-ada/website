import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import Image from "next/image";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <Image
          src="/assets/blog-illustration.png"
          width={100}
          height={100}
          alt="Blog illustration"
          className="max-h-100 object-cover"
        />
        <Heading size="xl" className="text-center">
          {"Postani partner Kluba Ada"}
        </Heading>
        <Paragraph size="lg" className="max-w-xl text-center">
          {
            "Partnerstvo s Klubom Ada ponuja priložnost za sodelovanje pri oblikovanju dogodkov in promocijskih aktivnostih. Sodelovanje omogoča dostop do skupnosti, ki združuje ženske z različnimi stopnjami znanja in izkušnjami na področju tehnologije."
          }
        </Paragraph>
      </div>
      <div>
        <Image
          src="/assets/hero.jpg"
          width={500}
          height={500}
          alt="Blog illustration"
          className="w-full object-cover h-[42rem] rounded-2xl border border-black my-6"
        />
      </div>
    </PageWrapper>
  );
}
