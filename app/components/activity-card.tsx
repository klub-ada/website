import Image from "next/image";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

type ActivityCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function ActivityCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ActivityCardProps) {
  return (
    <article
      className={
        "flex flex-col gap-6 bg-white rounded-2xl border border-black p-6 xl:p-8 ${className}"
      }
    >
      <div className="flex flex-col gap-4">
        <Heading size="sm">{title}</Heading>
        <Paragraph size="lg" weight="regular">
          {description}
        </Paragraph>
      </div>
      <Image
        src={imageSrc}
        width={400}
        height={400}
        alt={imageAlt}
        className="h-80 w-full object-cover md:h-full md:w-full rounded-2xl"
      />
    </article>
  );
}
