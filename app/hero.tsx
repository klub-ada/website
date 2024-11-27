import Image from "next/image";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { PageWrapper } from "./components/page-wrapper";
import { Paragraph } from "./components/paragraph";
import { CtaLink } from "./components/cta-link";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 shrink-1 basis-1/2 lg:basis-2/5">
          <Card bgColor="bg-white">
            <div className="flex flex-col gap-8">
              <div className="hidden lg:block">
                <Heading size="xl">{"Skupnost žensk v tehnologiji"}</Heading>
              </div>
              <div className="block lg:hidden">
                <Heading size="md">{"Skupnost žensk v tehnologiji"}</Heading>
              </div>
              <Paragraph size="sm" weight="medium">
                {
                  "Klub Ada organizira dogodke, ki so namenjeni mreženju in deljenju znanja, kariernega in osebnega razvoja za dijakinje, študentke, zaposlene in vse, ki jih področje tehnologije zanima."
                }
              </Paragraph>
            </div>
          </Card>
          <div className="block md:hidden grow">
            <Image
              src="/assets/hero.jpg"
              width={768}
              height={150}
              alt="Hero picture"
              className="rounded-2xl max-h-80 object-cover"
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="basis-1/2">
              <CtaLink label="Pridi na dogodek" color="red" href="/" />
            </div>
            <div className="basis-1/2">
              <CtaLink label="Postani partner" color="blue" href="/" />
            </div>
          </div>
        </div>
        <div className="hidden md:block grow basis-1/2 lg:basis-3/5">
          <Image
            src="/assets/hero.jpg"
            width={865}
            height={500}
            alt="Hero picture"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
