import { PageWrapper } from "./components/page-wrapper";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Paragraph } from "./components/paragraph";
import Image from "next/image";
import { Button } from "./components/button";
import { Hero } from "./hero";

export default function Page() {
  return (
    <>
    <Hero />
    <PageWrapper bgColor="bg-red">
      <div className="flex flex-col py-10 md:py-20 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-sm md:max-w-xl">
            <Heading size="lg">{"Pridi na naš naslednji dogodek!"}</Heading>
          </div>
          <div className="">
            <Button size="md" variant="secondary">Vsi dogodki</Button>
          </div>
        </div>
        <Card bgColor="bg-red100">
          <div className="md:flex gap-8">
            <div className="block">
              <Image
                src="/assets/dogodki.jpg"
                width={500}
                height={500}
                alt="Naslednji dogodek"
                className="h-80 w-full object-cover md:h-full md:w-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col pt-4 gap-6 md:gap-12 justify-center max-w-xl flex-grow">
              <div className="flex flex-col gap-3">
                <Paragraph size="lg" weight="regular">{"23. 10. 2024 ob 17:00 @ FRI v P04"}</Paragraph>
                <Heading size="sm">{"Kako se pripravim na tehnični intervju?"}</Heading>
                <Paragraph size="lg" weight="regular">
                  {"Nasveti za pripravo na tehnični intervju in oblikovanje CV-ja ter primeri dobrih praks v obliki simulacije tehničnega intervjuja."
                  }
                </Paragraph>
              </div>
              <div className="">
                <Button size="md">Pridruži se</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>

    <PageWrapper>
      <div className="">

      </div>
    </PageWrapper>
    </>
  );
}
