import Image from "next/image";
import { CtaLink } from "./cta-link";
import { Heading } from "./heading";
import { PageWrapper } from "./page-wrapper";
import { Paragraph } from "./paragraph";
import { Link } from "./link";

export function Footer() {
  return (
    <PageWrapper hasNoBottomPadding hasNoTopPadding bgColor="bg-white">
      <div className="flex flex-col pt-10 md:pt-20">
        <div className="flex flex-col py-8 px-7 md:py-16 md:px-14 bg-beige rounded-t-2xl">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <Heading size="sm" className="max-w-80">
              {"Skupnost žensk v tehnologiji"}
            </Heading>
            <div className="flex flex-col grow max-w-3xl gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="basis-8/12">
                  <CtaLink
                    label="Pridruži se Discord skupini"
                    color="yellow"
                    description="Varen prostor za izmenjavo idej, dogodkov, zaposlitev in priložnosti za osebni in karierni razvoj."
                    href="/"
                  />
                </div>
                <div className="basis-4/12">
                  <CtaLink label="Postani partner" color="blue" href="/" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="basis-4/12">
                  <CtaLink label="Pridi na dogodek" color="red" href="/" />
                </div>
                <div className="basis-8/12">
                  <CtaLink
                    label="Prijavi se na novičnik"
                    color="beige"
                    href="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-6 md:px-12 bg-beige justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/klub-ada-logo.svg"
              width={80}
              height={50}
              alt="Klub Ada logo"
            />
            <Paragraph size="sm">{"info@klub-ada.si"}</Paragraph>
          </div>
          <div className="flex flex-wrap md:flex-row gap-10">
            <div className="flex flex-col gap-2">
              <Paragraph size="md" weight="bold">
                {"O nas"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Link href="./page">{"Spoznaj Klub Ada"}</Link>
                <Paragraph size="sm">{"Zgodovina"}</Paragraph>
                <Paragraph size="sm">{"Doniraj nam"}</Paragraph>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph size="md" weight="bold">
                {"Aktivnosti"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Paragraph size="sm">{"Dogodki"}</Paragraph>
                <Paragraph size="sm">{"Blog"}</Paragraph>
                <Paragraph size="sm">{"Partnerstva"}</Paragraph>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph size="md" weight="bold">
                {"Pridruži se nam"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Paragraph size="sm">{"Discord"}</Paragraph>
                <Paragraph size="sm">{"LinkedIn"}</Paragraph>
                <Paragraph size="sm">{"Instagram"}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
