import { Button } from "../components/button";
import { Card } from "../components/card";
import { Heading } from "../components/heading";
import { PageWrapper } from "../components/page-wrapper";
import { Paragraph } from "../components/paragraph";

export function Reviews() {
  return (
    <PageWrapper bgColor="bg-blue">
      <div className="flex flex-col py-10 md:py-20 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-sm md:max-w-2xl">
            <Heading size="lg">
              {"Kaj pravijo naše članice in partnerji"}
            </Heading>
          </div>
          <div className="">
            <Button size="md" variant="secondary">
              Postani partner
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex md:basis-3/5">
              <Card bgColor="bg-blue200" hasBorder={false}>
                <div className="flex flex-col h-full justify-between gap-5 md:gap-10">
                  <Paragraph size="lg" weight="semiBold">
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </Paragraph>
                  <Paragraph size="lg" weight="medium">
                    {"Ana Lah, Podatkovna znanstvenica @ Tech Ladies"}
                  </Paragraph>
                </div>
              </Card>
            </div>
            <div className="md:basis-2/5">
              <Card bgColor="bg-blue200" hasBorder={false}>
                <div className="flex flex-col h-full justify-between gap-5 md:gap-10">
                  <Paragraph size="lg" weight="semiBold">
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </Paragraph>
                  <Paragraph size="lg" weight="medium">
                    {"Ana Lah, Podatkovna znanstvenica @ Tech Ladies"}
                  </Paragraph>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row h-full justify-between">
            <div className="flex grow md:basis-1/3 h-full justify-between">
              <Card bgColor="bg-blue200" hasBorder={false}>
                <div className="flex flex-col h-full justify-between gap-5 md:gap-10">
                  <Paragraph size="lg" weight="semiBold">
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  </Paragraph>
                  <Paragraph size="lg" weight="medium">
                    {"Ana Lah, Podatkovna znanstvenica @ Tech Ladies"}
                  </Paragraph>
                </div>
              </Card>
            </div>
            <div className="md:basis-1/3">
              <Card bgColor="bg-blue200" hasBorder={false}>
                <div className="flex flex-col h-full justify-between gap-5 md:gap-10">
                  <Paragraph size="lg" weight="semiBold">
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  </Paragraph>
                  <Paragraph size="lg" weight="medium">
                    {"Ana Lah, Podatkovna znanstvenica @ Tech Ladies"}
                  </Paragraph>
                </div>
              </Card>
            </div>
            <div className="md:basis-1/3">
              <Card bgColor="bg-blue200" hasBorder={false}>
                <div className="flex flex-col h-full justify-between gap-5 md:gap-10">
                  <Paragraph size="lg" weight="semiBold">
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    }
                  </Paragraph>
                  <Paragraph size="lg" weight="medium">
                    {"Ana Lah, Podatkovna znanstvenica @ Tech Ladies"}
                  </Paragraph>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
