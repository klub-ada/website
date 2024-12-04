import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "role",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      type: "string",
    }),
    defineField({
      name: "website",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
