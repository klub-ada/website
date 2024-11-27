import { PageWrapper } from "./components/page-wrapper";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Paragraph } from "./components/paragraph";
import Image from "next/image";
import { Button } from "./components/button";
export default function Page() {
  return (
    <>
    <PageWrapper bgColor="bg-red">
      <div className="flex flex-col py-20 gap-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-xl">
            <Heading size="lg">{"Pridi na naš naslednji dogodek!"}</Heading>
          </div>
          <div className="">
            <Button size="md" variant="secondary">Vsi dogodki</Button>
          </div>
        </div>
        <Card bgColor="bg-red100">
          <div className="flex flex-row gap-8 justify-start">
            <div className="block">
              <Image
                src="/assets/dogodki.jpg"
                width={500}
                height={500}
                alt="Naslednji dogodek"
                className="rounded-2xl object-fill"
              />
            </div>
            <div className="flex flex-col gap-12 justify-center max-w-xl">
              <div className="flex flex-col gap-3">
                <Paragraph size="lg">{"23. 10. 2024 ob 17:00 @ FRI v P04"}</Paragraph>
                <Heading size="sm">{"Kako se pripravim na tehnični intervju?"}</Heading>
                <Paragraph size="lg">
                  {"Nasveti za pripravo na tehnični intervju in oblikovanje CV-ja ter primeri dobrih praks v obliki simulacije tehničnega intervjuja."
                  }
                </Paragraph>
              </div>
              <div className="">
                <Button size="md">Pridruži se</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageWrapper>

    <PageWrapper>
      <div className="flex flex-col py-20 gap-6">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-4 max-w-xs">
            <Heading size="lg">{"Aktivnosti"}</Heading>
            <Paragraph size="lg">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Paragraph>
          </div>
            <Card bgColor="bg-white">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col max-w-sm gap-4">
                  <Heading size="sm">{"Mesečni dogodki"}</Heading>
                  <Paragraph size="lg">
                    {"Na mesečnih srečanjih obravnavamo različne karierne in tehnične teme, govorimo o mehkih veščinah, gostimo strokovnjakinje iz industrije ter se družimo in izmenjujemo ideje v sproščenem okolju ob prigrizkih in pijači."
                    }
                  </Paragraph>
                </div>
                <div className="">
                  <Image
                    src="/assets/dogodki.jpg"
                    width={400}
                    height={400}
                    alt="Mesecni dogodeki"
                    className="rounded-2xl object-fill"
                  />
                </div>
              </div>
            </Card>

            <Card bgColor="bg-white">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col max-w-sm gap-4">
                  <Heading size="sm">{"Coffee&&Code"}</Heading>
                  <Paragraph size="lg">
                    {"Serija neformalnih druženj ob kavi, kjer skupaj programiramo na projektih, ki si jih vsaka izbere sama. Lahko rešuješ domačo nalogo, delaš na projektu, slediš tutorialu ali poiščeš motivacijo za začetek novega projekta."
                    }
                  </Paragraph>
                </div>
                <div className="">
                  <Image
                    src="/assets/coffee&&code.png"
                    width={400}
                    height={400}
                    alt="Coffee&&Code druzenje"
                    className="rounded-2xl object-fill"
                  />
                </div>
              </div>
            </Card>
        </div>

        <div className="flex flex-row gap-4">
          <Card bgColor="bg-white">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col max-w-sm gap-4">
                <Heading size="sm">{"Discord skupnost"}</Heading>
                <Paragraph size="lg">
                  {"Skupnost je varen prostor za komunikacijo, kjer izmenjujemo ideje, razpravljamo o zanimivih temah, delimo dogodke, možnosti za zaposlitev, koristne izobraževalne vire in priložnosti za osebni ter karierni razvoj."
                  }
                </Paragraph>
              </div>
              <div className="">
                <Image
                  src="/assets/discord.png"
                  width={400}
                  height={400}
                  alt="Discord skupina"
                  className="rounded-2xl object-fill"
                />
              </div>
            </div>
          </Card>

          <Card bgColor="bg-white">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col max-w-sm gap-4">
                <Heading size="sm">{"Knjižni klub"}</Heading>
                <Paragraph size="lg">
                  {"Srečanje za vse, ki poleg tehnologije uživamo tudi v branju. Vsakih nekaj mesecev v Discord skupini izberemo knjigo, vezano na teme, kot so tehnologija, vloga žensk v družbi, osebnostna rast in razvoj kariere."
                  }
                </Paragraph>
              </div>
              <div className="">
                <Image
                  src="/assets/knjizni-klub.png"
                  width={400}
                  height={400}
                  alt="Knjizni klub"
                  className="rounded-2xl object-fill"
                />
              </div>
            </div>
          </Card>

          <Card bgColor="bg-white">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col max-w-sm gap-4">
                <Heading size="sm">{"Novičnik"}</Heading>
                <Paragraph size="lg">
                  {"Preko novičnika delimo vabila na prihajajoče dogodke in povzetke dogodkov, uporabne nasvete, povezave do drugih koristnih virov, kot so hackathoni, karierni dogodki, zaposlitvene priložnosti in še več."
                  }
                </Paragraph>
              </div>
              <div className="">
                <Image
                  src="/assets/novicnik.png"
                  width={400}
                  height={400}
                  alt="Novicnik"
                  className="rounded-2xl object-fill"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
    </>
  );
}
