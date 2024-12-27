import { Button } from "@/app/components/button";
import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";

export function WhyPartner() {
  return (
    <PageWrapper bgColor="bg-blue">
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-6 max-w-96">
          <Heading size="lg" className="text-left">
            {"Zakaj postati partner?"}
          </Heading>
          <Button size="md" variant="secondary">
            {"Postani partner"}
          </Button>
        </div>
        <div className="max-w-96">
          <Paragraph size="lg">
            {
              "Verjamemo, da je povezovanje ključ do rasti in uspeha. Naša prizadevanja za spodbujanje žensk v tehnologiji se ne bi mogla uresničiti brez podpore partnerjev, ki delijo naše vrednote in vizijo."
            }
          </Paragraph>
          <Paragraph size="lg">
            {
              "Naša misija je ustvariti vključujoče okolje za ženske, ki delujejo v tehnologiji z organizacijo dogodkov v živo, programerskih uric, knjižnega kluba, izobraževalnih vsebin, mentorstva, Discord skupnosti, in se več."
            }
          </Paragraph>
          <Paragraph size="lg">{""}</Paragraph>
        </div>
      </div>
    </PageWrapper>
  );
}
