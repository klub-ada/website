import { Footer } from "@/app/components/footer";
import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import imageLoader from "@/app/utils/image-loader";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";

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
    name,
  }
}`;

  const post = await client.fetch(query, { slug });
  return post;
}

// Fetch all slugs for static generation
export async function generateStaticParams() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug, // Map to { slug } structure
  }));
}

// Blog Article Component
const BlogArticle = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);
  const imageSrc = imageLoader(post.mainImage);

  const portableTextComponents = {
    block: {
      h1: ({ children }: { children: any }) => (
        <Heading size="xl" color="black" textAlign="left">
          {children}
        </Heading>
      ),
      h2: ({ children }: { children: any }) => (
        <Heading size="lg" color="black" textAlign="left">
          {children}
        </Heading>
      ),
      h3: ({ children }: { children: any }) => (
        <Heading size="md" color="black" textAlign="left">
          {children}
        </Heading>
      ),
      normal: ({ children }: { children: any }) => (
        <Paragraph size="md">{children}</Paragraph>
      ),
      blockquote: ({ children }: { children: any }) => (
        <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-500 my-6">
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),
      em: ({ children }: { children: React.ReactNode }) => (
        <em className="italic text-gray-600">{children}</em>
      ),
      link: ({
        value,
        children,
      }: {
        value: { href: string };
        children: React.ReactNode;
      }) => (
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
