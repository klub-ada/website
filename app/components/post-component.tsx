import React from "react";
import { Post } from "../utils/interface";
import { Heading } from "./heading";
import { Paragraph } from "./paragraph";
import Image from "next/image";
import imageLoader from "../utils/image-loader";
import Link from "next/link";

interface Props {
  post: Post;
}
const PostComponent = ({ post }: Props) => {
  const imageSrc = imageLoader(post.mainImage);

  return (
    <div className="flex flex-col bg-pink100 gap-6 border border-black rounded-2xl p-6 ${className}">
      <div className="flex flex-col gap-4">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt={post.mainImage.alt}
          className="w-full object-cover md:aspect-square rounded-2xl"
        />
        <div className="flex gap-2">
          {post.categories.map((category) => (
            <Paragraph
              size="xs"
              className="py-1 px-2 text-pink font-semibold bg-white border border-black rounded-lg"
            >
              {category.title}
            </Paragraph>
          ))}
        </div>
        <Heading size="xs">{post.title}</Heading>
        <div key={post.slug.current} className="">
          <Link href={`/blog/${post.slug.current}`}>{"Preberi blog"}</Link>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
