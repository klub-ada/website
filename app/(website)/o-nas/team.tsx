import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { TeamMemberComponent } from "@/app/components/team-member-component";
import Image from "next/image";

export function Team() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex items-center gap-2">
          <Heading size="xl">{"Naša"}</Heading>
          <Image
            src="/assets/flower.svg"
            width={100}
            height={100}
            alt="Flower illustration"
            className="object-cover"
          />
          <Heading size="xl">{"ekipa"}</Heading>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="basis-1/3">
            <TeamMemberComponent />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
