import Image from "next/image";
import { Paragraph } from "./paragraph";
import { Heading } from "./heading";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export function TeamMemberComponent() {
  return (
    <div className="flex flex-col bg-white gap-6 border border-black rounded-2xl p-6 h-full justify-between">
      <div className="flex flex-col h-full justify-between gap-4">
        <Image
          src="/"
          width={500}
          height={500}
          alt="/"
          className="w-full object-cover md:aspect-square rounded-2xl"
        />
        <div className="flex flex-col gap-4">
          <Heading size="xs">{"Simona Kek"}</Heading>
          <div className="flex gap-2 items-center">
            <Paragraph size="xl">{"Data Scientist"}</Paragraph>
            <IconBrandLinkedinFilled color="black" size={24} stroke-width="2" />
          </div>
          <Paragraph lineHeight="tight">
            {
              "Simona je soustanoviteljica Kluba Ada in finalistka za izbor Inženirka leta 2023. Njeno delo vključuje analizo podatkov, razvoj algoritmov in uporabo metod strojnega učenja z namenom odkrivanja skritih vzorcev v podatkih."
            }
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
