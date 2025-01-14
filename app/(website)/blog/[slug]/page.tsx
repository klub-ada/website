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
import { formatDate } from "@/app/utils/date";

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
  const formattedDate = formatDate(post.publishedAt);

  const portableTextComponents: Partial<PortableTextComponents> = {
    block: {
      h1: ({ children }) => (
        <Heading
          size="md"
          color="black"
          textAlign="left"
          className="mt-12 mb-2"
        >
          {children}
        </Heading>
      ),
      h2: ({ children }) => (
        <Paragraph
          size="xxl"
          color="black"
          weight="bold"
          textAlign="left"
          className="mt-10 mb-2"
        >
          {children}
        </Paragraph>
      ),
      h3: ({ children }) => (
        <Paragraph
          size="xl"
          color="black"
          textAlign="left"
          className="mt-6 mb-2"
        >
          {children}
        </Paragraph>
      ),
      body: ({ children }) => (
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
        <ul className="list-disc pl-4 [&_p]:mb-1">{children}</ul>
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
          className="text-black underline underline-offset-2	hover:text-pink"
          style={{ textDecorationColor: "pink" }}
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }) => {
        if (!value) {
          return null;
        }
        return (
          <div className="my-4">
            <Image
              src={imageLoader(value)}
              alt={value.alt}
              width={200}
              height={400}
              className="w-32 object-cover rounded-lg"
            />
          </div>
        );
      },
    },
  };

  return (
    <>
      <PageWrapper hasNoTopPadding>
        <div className="max-w-3xl mx-auto p-6 gap-10 pt-16">
          <div className="flex flex-col gap-4">
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

            <Heading size="lg" color="black">
              {post.title}
            </Heading>
            <Paragraph>{formattedDate}</Paragraph>
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt={post.mainImage.alt}
              className="w-full object-cover h-96 rounded-2xl border border-black mb-6"
            />
          </div>
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </PageWrapper>

      <Footer />
    </>
  );
};

export default BlogArticle;
