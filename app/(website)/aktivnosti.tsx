import { ActivityCard } from "../components/activity-card";
import { Heading } from "../components/heading";
import { PageWrapper } from "../components/page-wrapper";
import { Paragraph } from "../components/paragraph";
export function Aktivnosti() {
  const activities = [
    {
      title: "Mesečni dogodki",
      description:
        "Na mesečnih srečanjih obravnavamo različne karierne in tehnične teme, govorimo o mehkih veščinah, gostimo strokovnjakinje iz industrije ter se družimo in izmenjujemo ideje v sproščenem okolju ob prigrizkih in pijači.",
      imageSrc: "/assets/dogodki.jpg",
      imageAlt: "Mesečni dogodki",
    },
    {
      title: "Coffee&&Code",
      description:
        "Serija neformalnih druženj ob kavi, kjer skupaj programiramo na projektih, ki si jih vsaka izbere sama. Lahko rešuješ domačo nalogo, delaš na projektu, slediš tutorialu ali poiščeš motivacijo za začetek novega projekta.",
      imageSrc: "/assets/coffee&&code.png",
      imageAlt: "Coffee&&Code",
    },
    {
      title: "Discord skupnost",
      description:
        "Skupnost je varen prostor za komunikacijo, kjer izmenjujemo ideje, razpravljamo o zanimivih temah, delimo dogodke, možnosti za zaposlitev, koristne izobraževalne vire in priložnosti za osebni ter karierni razvoj.",
      imageSrc: "/assets/discord.png",
      imageAlt: "Discord skupnost",
    },
    {
      title: "Knjižni klub",
      description:
        "Srečanje za vse, ki poleg tehnologije uživamo tudi v branju in razpravah. Vsakih nekaj mesecev v Discord skupini izberemo knjigo, vezano na teme, kot so tehnologija, vloga žensk v družbi, osebnostna rast in razvoj kariere.",
      imageSrc: "/assets/knjizni-klub.png",
      imageAlt: "Knjižni klub",
    },
    {
      title: "Novičnik",
      description:
        "Preko novičnika delimo vabila na prihajajoče dogodke in povzetke dogodkov, uporabne nasvete, povezave do drugih koristnih virov, kot so hackathoni, karierni dogodki, zaposlitvene priložnosti in še več.",
      imageSrc: "/assets/novicnik.png",
      imageAlt: "Novičnik",
    },
  ];

  return (
    <PageWrapper>
      <div className="flex flex-col py-10 md:py-20 gap-4">
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <div className="flex flex-col gap-4 basis-1/3">
            <Heading size="lg">{"Aktivnosti"}</Heading>
            <Paragraph size="lg">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Paragraph>
          </div>

          {activities.map(({ title, description, imageSrc, imageAlt }) => {
            return (
              <div className="basis-1/3" key={title}>
                <ActivityCard
                  title={title}
                  description={description}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
