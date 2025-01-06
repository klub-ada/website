import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";

export function BecomePartner() {
  return (
    <PageWrapper>
      <div className="p-10 md:p-16 lg:p-20 bg-blue grow rounded-2xl border border-black">
        <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 md:gap-6">
            <Heading size="lg">{"Vas zanima sodelovanje?"}</Heading>
            <Paragraph size="xl">
              {"Za več informacij nam lahko pišete na"}{" "}
              <span className="text-white font-medium">info@klub-ada.si</span>
            </Paragraph>
          </div>
          <Button size="md" variant="secondary">
            {"Postani partner"}
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
