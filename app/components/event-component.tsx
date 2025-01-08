import React from "react";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import Image from "next/image";
import { Event } from "../utils/interface";

interface Props {
  event: Event;
}
export default function EventComponent({ event }: Props) {
  return (
    <div className="flex flex-col bg-white gap-6 border border-black rounded-2xl p-6 h-full justify-between">
      <div className="flex flex-col h-full justify-between gap-4">
        <div className="flex flex-col gap-4">
          <Image
            src={event.eventImage.url}
            width={500}
            height={500}
            alt={event.eventImage.alt}
            className="w-full object-cover md:aspect-square rounded-2xl"
          />
          <Heading size="xs" lineHeight="tight">
            {event.title}
          </Heading>
        </div>
        <div className="">
          <Paragraph>{"Preberi blog"}</Paragraph>
        </div>
      </div>
    </div>
  );
}
