import Image from "next/image";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { PageWrapper } from "../components/page-wrapper";
import { Paragraph } from "../components/paragraph";
import { LinkButton } from "../components/link-button";
import { Card } from "../components/card";

export function Discord() {
  return (
    <PageWrapper>
      <>
        <Card bgColor="bg-yellow">
          <div className="flex flex-col-reverse md:flex-row items-left md:items-center justify-start gap-5 md:gap-10">
            <div className="h-full lg:basis-3/5">
              <Image
                src="/assets/discord-image.png"
                width={730}
                height={600}
                alt="Discord Image"
                className="w-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-start gap-4 grow basis-2/5">
              <Image
                src="/assets/discord-icon.svg"
                width={50}
                height={50}
                alt="Discord Icon"
                className="object-cover"
              />
              <Heading size="sm" className="max-w-72">
                {"Pridruži se naši skupnosti"}
              </Heading>

              <Paragraph size="md" className="max-w-sm">
                {
                  "Naša Discord platforma je varen prostor za izmenjavo idej, zanimivih tem, dogodkov, uporabnih virov in priložnosti za osebni in karierni razvoj."
                }
              </Paragraph>
              <div>
                <LinkButton size="md" variant="secondary" href={"/"} isExternal>
                  Pridruži se nam
                </LinkButton>
              </div>
            </div>
          </div>
        </Card>
      </>
    </PageWrapper>
  );
}
