import { CtaLink } from "./cta-link";
import { Heading } from "./heading";
import { PageWrapper } from "./page-wrapper";

export function Footer() {
  return (
    <PageWrapper bgColor="bg-white">
      <div className="flex flex-col pt-10 md:pt-20">
        <div className="flex flex-col py-8 px-7 md:py-16 md:px-14 bg-beige">
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
      </div>
    </PageWrapper>
  );
}
