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
  const date = formatDate(post.publishedAt);
  const imageSrc = imageLoader(post.mainImage);

  const portableTextComponents: Partial<PortableTextComponents> = {
    block: {
      h1: ({ children }) => (
        <h1 className="sans-serif Anaheim text-3xl mt-12 mb-2 font-bold text-black">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="sans-serif Anaheim text-2xl mt-6 mb-2 font-bold text-black">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="sans-serif Anaheim text-xl mt-6 mb-2 font-bold text-black">
          {children}
        </h3>
      ),
      bodyXl: ({ children }) => (
        <Paragraph
          size="xl"
          color="pink"
          weight="bold"
          textAlign="left"
          className="mb-2"
        >
          {children}
        </Paragraph>
      ),
      bodyLg: ({ children }) => (
        <Paragraph size="lg" color="black" textAlign="left" className="mb-4">
          {children}
        </Paragraph>
      ),
      bodySm: ({ children }) => (
        <Paragraph size="sm" color="gray" textAlign="left" className="mb-2">
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
      number: ({ children }) => (
        <ul className="list-decimal pl-4 [&_p]:mb-0">{children}</ul>
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
          className="text-black decoration-pink underline hover:text-pink"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <PageWrapper>
        <div className="max-w-3xl mx-auto gap-10">
          <div className="flex gap-2">
            {post.categories.map((category) => (
              <Paragraph
                size="xs"
                className="py-1 px-2 text-white font-semibold bg-pink border border-black rounded-lg"
              >
                {category.title}
              </Paragraph>
            ))}
          </div>
          <Heading size="lg" color="black" className="my-6">
            {post.title}
          </Heading>
          <span>{date}</span>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={post.mainImage.alt}
            className="w-full object-cover h-96 rounded-2xl border border-black my-6"
          />
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </PageWrapper>

      {/* Newsletter Component */}

      <NewsletterComponent />

      <Footer />
    </>
  );
};

export default BlogArticle;
