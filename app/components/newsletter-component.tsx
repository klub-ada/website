import { CtaLink } from "./cta-link";
import { Heading } from "./heading";
import { PageWrapper } from "./page-wrapper";
import { Paragraph } from "./paragraph";

export function NewsletterComponent() {
  return (
    <PageWrapper bgColor="bg-pink">
      <div className="flex flex-col border border-black rounded-2xl p-10 bg-white max-w-[600px] justify-ceneter">
        <div className="">
          <Heading size="sm">{"Prijavi se na novičnik"}</Heading>
          <Paragraph size="md">
            {
              "S prijavo na naš novičnik boš prejela vabila na prihajajoče dogodke in povzetke dogodkov, uporabne nasvete, povezave do drugih koristnih virov, kot so hekatoni, karierni dogodki, zaposlitvene priložnosti in še več."
            }
          </Paragraph>
        </div>
      </div>
    </PageWrapper>
  );
}
