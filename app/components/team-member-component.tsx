import Image from "next/image";
import { Paragraph } from "./paragraph";
import { Heading } from "./heading";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";
import { TeamMember } from "../utils/interface";
import imageLoader from "../utils/image-loader";

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberComponent = ({ member }: TeamMemberProps) => {
  const imageSrc = imageLoader(member.image);

  return (
    <div className="flex flex-col bg-white gap-6 border border-black rounded-2xl p-6 h-full justify-between">
      <div className="flex flex-col h-full gap-4">
        <Image
          src={imageSrc}
          width={700}
          height={700}
          alt={member.image.alt}
          className="w-full object-cover md:aspect-square rounded-2xl"
        />
        <div className="flex flex-col gap-2 md:gap-4">
          <Heading size="xs">{member.name}</Heading>
          <div className="flex gap-2 items-center">
            <Paragraph size="xl">{member.role}</Paragraph>
            <IconBrandLinkedinFilled color="black" size={24} stroke-width="2" />
          </div>
          <Paragraph lineHeight="tight">{member.bio}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberComponent;
