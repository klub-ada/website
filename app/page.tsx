import { PageWrapper } from "./components/page-wrapper";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Paragraph } from "./components/paragraph";
import Image from "next/image";
import { Button } from "./components/button";
export default function Page() {
  return (
    <PageWrapper bgColor="bg-red">
      <div className="flex flex-col py-20">
        <div className="flex flex-col gap-16">
          <div className="max-w-xl">
            <Heading size="lg">{"Pridi na naš naslednji dogodek!"}</Heading>
          </div>
          <Card bgColor="bg-white">
            <div className="flex flex-rox gap-8">
              <div className="block grow">
                <Image
                  src="/assets/dogodki.jpg"
                  width={500}
                  height={500}
                  alt="Naslednji dogodek"
                  className="rounded-2xl object-fill"
                />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-3">
                  <Paragraph size="lg">{"23. 10. 2024 ob 17:00 @ FRI v P04"}</Paragraph>
                  <Heading size="sm">{"Kako se pripravim na tehnični intervju?"}</Heading>
                  <Paragraph size="lg">
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
          <div className="">
            <Button size="md" variant="secondary">Vsi dogodki</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
