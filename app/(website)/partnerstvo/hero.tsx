import { Button } from "@/app/components/button";
import { Heading } from "@/app/components/heading";
import { LinkButton } from "@/app/components/link-button";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import Image from "next/image";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src="/assets/partners-illustration.png"
            width={100}
            height={100}
            alt="Partners illustration"
            className="w-[80px] md:w-[120px] lg:w-[160]"
          />
          <Heading size="xl" className="text-center">
            {"Postani partner Kluba Ada"}
          </Heading>
        </div>
        <Paragraph size="lg" className="max-w-2xl text-center">
          {
            "Partnerstvo s Klubom Ada ponuja priložnost za sodelovanje pri oblikovanju dogodkov in promocijskih aktivnostih. Sodelovanje omogoča dostop do skupnosti, ki združuje ženske z različnimi stopnjami znanja in izkušnjami na področju tehnologije."
          }
        </Paragraph>
        <div className="">
          <LinkButton size="md" variant="secondary" href="#become-partner">
            {"Postani partner"}
          </LinkButton>
        </div>
      </div>
      <div>
        <Image
          src="/assets/hero.jpg"
          width={1500}
          height={1500}
          alt="Blog illustration"
          className="w-full object-cover max-h-[42rem] rounded-2xl border border-black my-6"
        />
      </div>
    </PageWrapper>
  );
}
