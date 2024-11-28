import { PageWrapper } from "./components/page-wrapper";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Paragraph } from "./components/paragraph";
import Image from "next/image";
import { Button } from "./components/button";
import { ActivityCard } from "./components/activity-card";
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
                <Paragraph size="lg" weight="regular">{"23. 10. 2024 ob 17:00 @ FRI v P04"}</Paragraph>
                <Heading size="sm">{"Kako se pripravim na tehnični intervju?"}</Heading>
                <Paragraph size="lg" weight="regular">
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
      <div className="flex flex-col py-20 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 basis-1/3">
            <div className="hidden xl:block">
              <Heading size="lg">{"Aktivnosti"}</Heading>
            </div>
            <div className="block xl:hidden">
              <Heading size="md">{"Aktivnosti"}</Heading>
            </div>
            <Paragraph size="lg">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Paragraph>
          </div>
          <div className="basis-1/3">
            <ActivityCard
              title="Mesečni dogodki"
              description="Na mesečnih srečanjih obravnavamo različne karierne in tehnične teme, govorimo o mehkih veščinah, gostimo strokovnjakinje iz industrije ter se družimo in izmenjujemo ideje v sproščenem okolju ob prigrizkih in pijači."
              imageSrc="/assets/dogodki.jpg"
              imageAlt="Mesečni dogodki"
              className=""
            />    
          </div>
          <div className="basis-1/3">
            <ActivityCard
              title="Coffee&&Code"
              description="Serija neformalnih druženj ob kavi, kjer skupaj programiramo na projektih, ki si jih vsaka izbere sama. Lahko rešuješ domačo nalogo, delaš na projektu, slediš tutorialu ali poiščeš motivacijo za začetek novega projekta."
              imageSrc="/assets/coffee&&code.png"
              imageAlt="Coffee&&Code"
              className=""
            />    
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="basis-1/3">
            <ActivityCard
              title="Discord skupnost"
              description="Skupnost je varen prostor za komunikacijo, kjer izmenjujemo ideje, razpravljamo o zanimivih temah, delimo dogodke, možnosti za zaposlitev, koristne izobraževalne vire in priložnosti za osebni ter karierni razvoj."
              imageSrc="/assets/discord.png"
              imageAlt="Discord skupnost"
              className=""
            />    
          </div>
          <div className="basis-1/3">
            <ActivityCard
              title="Knjižni klub"
              description="Srečanje za vse, ki poleg tehnologije uživamo tudi v branju in razpravah. Vsakih nekaj mesecev v Discord skupini izberemo knjigo, vezano na teme, kot so tehnologija, vloga žensk v družbi, osebnostna rast in razvoj kariere."
              imageSrc="/assets/knjizni-klub.png"
              imageAlt="Knjižni klub"
              className=""
            />    
          </div>
          <div className="basis-1/3">
            <ActivityCard
              title="Novičnik"
              description="Preko novičnika delimo vabila na prihajajoče dogodke in povzetke dogodkov, uporabne nasvete, povezave do drugih koristnih virov, kot so hackathoni, karierni dogodki, zaposlitvene priložnosti in še več."
              imageSrc="/assets/novicnik.png"
              imageAlt="Novičnik"
              className=""
            />    
          </div>
        </div>
      </div>
    </PageWrapper>
    </>
  );
}
