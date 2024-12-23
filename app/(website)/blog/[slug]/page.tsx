import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
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

  return (
    <PageWrapper>
      <div>
        <h1>{post.title}</h1>
        <PortableText value={post.body} />
      </div>
    </PageWrapper>
  );
};

export default BlogArticle;
