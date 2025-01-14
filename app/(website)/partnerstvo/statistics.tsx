import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { StatsCard } from "@/app/components/stats-card";
import Image from "next/image";

export function Statistics() {
  return (
    <PageWrapper>
      <div
        id="become-partner"
        className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center"
      >
        <Image
          src="/assets/heart.svg"
          width={50}
          height={50}
          alt="Blog illustration"
          className="max-h-100 object-cover"
        />
        <Heading size="lg" className="text-center max-w-md">
          {"Vpliv Kluba Ada v številkah"}
        </Heading>
      </div>
      <div>
        <div className="grid gap-4 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          <StatsCard number="430+" label="sledilcev na Instagramu" />
          <StatsCard number="380+" label="sledilcev na LinkedInu" />
          <StatsCard number="200+" label="prijavljenih na novičnik" />
          <StatsCard number="120+" label="članic v Discord skupini" />
          <StatsCard
            number="12+"
            label="podjetij, ki so nas že enkrat podprla"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
