import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { StatsCard } from "@/app/components/stats-card";
import Image from "next/image";

export function Statistics() {
  const stats = [
    { value: 430, suffix: "+", title: "sledilcev na Instagramu" },
    { value: 380, suffix: "+", title: "sledilcev na LinkedInu" },
    { value: 200, suffix: "+", title: "prijavljenih na novičnik" },
    { value: 120, suffix: "+", title: "članic v Discord skupini" },
    { value: 12, suffix: "+", title: "podjetij, ki so nas že enkrat podprla" },
  ];
  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <Image
          src="/assets/heart.svg"
          width={50}
          height={50}
          alt="Blog illustration"
          className="max-h-96 object-cover"
        />
        <Heading size="lg" className="text-center max-w-md">
          {"Vpliv Kluba Ada v številkah"}
        </Heading>
      </div>
      <div>
        <div className="grid gap-4 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
