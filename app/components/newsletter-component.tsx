import { Button } from "./button";
import { Heading } from "./heading";
import { PageWrapper } from "./page-wrapper";
import { Paragraph } from "./paragraph";

export function NewsletterComponent() {
  return (
    <PageWrapper bgColor="bg-pink">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 border border-black rounded-2xl p-10 bg-pink100 max-w-[600px]">
          <div className="flex flex-col gap-4 text-ceneter">
            <Heading size="sm">{"Prijavi se na novičnik"}</Heading>
            <Paragraph size="md">
              {
                "S prijavo na naš novičnik boš prejela vabila na prihajajoče dogodke in povzetke dogodkov, uporabne nasvete, povezave do drugih koristnih virov, kot so hekatoni, karierni dogodki, zaposlitvene priložnosti in še več."
              }
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Vpiši svoj e-naslov"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink300"
                required
              />
              <Button variant="primary" size="md">
                {"Prijavi se"}
              </Button>
            </div>
            <Paragraph size="xs" color="gray" className="">
              {
                "Strinjam se, da mi Klub Ada po e-pošti pošilja novičnik in druga obvestila."
              }
            </Paragraph>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
