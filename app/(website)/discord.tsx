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
      <div className="flex justify-center items-center">
        <Card bgColor="bg-yellow">
          <div className="flex flex-col h-full justify-between gap-5 md:gap-10 mx-auto">
            <div className="flex flex-col gap-4 text-ceneter">
              <div className="flex gap-4 items-center">
                <Image
                  src="/assets/discord-icon.svg"
                  width={50}
                  height={50}
                  alt="Discord Icon"
                  className="object-cover"
                />
                <Heading size="sm">{"Pridruži se naši skupnosti"}</Heading>
              </div>
              <Paragraph size="md" className="max-w-xl">
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
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/discord-image.png"
                width={800}
                height={600}
                alt="Discord Image"
                className="w-full max-h-[450px] object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
}
