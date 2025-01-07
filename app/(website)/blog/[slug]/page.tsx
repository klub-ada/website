import { Footer } from "@/app/components/footer";
import { Paragraph } from "@/app/components/paragraph";
import imageLoader from "@/app/utils/image-loader";
import Image from "next/image";
import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";
import { formatDate } from "../../../utils/date";
import { NewsletterComponent } from "@/app/components/newsletter-component";

interface Params {
  params: {
    slug: string;
  };
}
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  publishedAt,
  mainImage,
  _id,
  body,
  categories[]-> {
    _id,
    slug,
    title,
  }
}`;

  const post = await client.fetch(query, { slug });
  return post;
}

// Blog Article Component
const BlogArticle = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);
  const imageSrc = imageLoader(post.mainImage);

  const portableTextComponents: Partial<PortableTextComponents> = {
    block: {
      h1: ({ children }) => (
        <Heading size="md" color="black" textAlign="left" className="my-5">
          {children}
        </Heading>
      ),
      h2: ({ children }) => (
        <Heading size="sm" color="black" textAlign="left" className="my-4">
          {children}
        </Heading>
      ),
      h3: ({ children }) => (
        <Heading size="xs" color="black" textAlign="left" className="my-3">
          {children}
        </Heading>
      ),
      bodyXl: ({ children }) => (
        <Paragraph size="xl" color="black" textAlign="left" className="my-8">
          {children}
        </Paragraph>
      ),
      bodyLg: ({ children }) => (
        <Paragraph size="lg" color="black" textAlign="left" className="mb-6">
          {children}
        </Paragraph>
      ),
      bodySm: ({ children }) => (
        <Paragraph size="sm" color="gray" textAlign="left" className="mb-4">
          {children}
        </Paragraph>
      ),
      blockquote: ({ children }) => (
        <Paragraph
          size="lg"
          className="pl-4 border-l-4 border-red italic text-gray-500 my-6"
        >
          {children}
        </Paragraph>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-4 [&_p]:mb-0">{children}</ul>
      ),
    },

    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-600">{children}</em>
      ),
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <PageWrapper>
        <div className="max-w-3xl mx-auto p-6 gap-10">
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

          <Heading size="lg" color="black" className="mb-10">
            {post.title}
          </Heading>
          <span>{`${post.publishedAt}`}</span>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={post.mainImage.alt}
            className="w-full object-cover h-96 rounded-2xl border border-black mb-6"
          />
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </PageWrapper>

      <Footer />
    </>
  );
};

export default BlogArticle;
