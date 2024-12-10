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
        <div className="flex flex-col pt-8 px-7 md:pt-16 md:px-14 bg-beige rounded-t-2xl">
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
        <div className="flex flex-col-reverse gap-10 md:flex-row px-7 py-16 md:px-14 bg-beige justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/klub-ada-logo.svg"
              width={80}
              height={50}
              alt="Klub Ada logo"
            />
            <Paragraph size="sm">{"info@klub-ada.si"}</Paragraph>
          </div>
          <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
            <div className="flex flex-col gap-2 w">
              <Paragraph size="lg" weight="bold">
                {"O nas"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Link variant="secondary" href="./page">
                  {"Spoznaj Klub Ada"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"Zgodovina"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"Doniraj nam"}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph size="lg" weight="bold">
                {"Aktivnosti"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Link variant="secondary" href="./page">
                  {"Dogodki"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"Blog"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"Partnerstva"}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Paragraph size="lg" weight="bold">
                {"Pridruži se nam"}
              </Paragraph>
              <div className="flex flex-col gap-2">
                <Link variant="secondary" href="./page">
                  {"Discord"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"LinkedIn"}
                </Link>
                <Link variant="secondary" href="./page">
                  {"Instagram"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
