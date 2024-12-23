import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import PostComponent from "@/app/components/post-component";
import { NewsletterComponent } from "@/app/components/newsletter-component";
import Image from "next/image";

async function getPosts() {
  const query = `*[_type == "post"] {
  title,
  slug,
  mainImage,
  categories[]-> {
    _id,
    slug,
    title,
  }
}`;
  const data = await client.fetch(query);
  return data;
}
export default async function Blogs() {
  const posts: Post[] = await getPosts();

  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <Image
          src="/assets/blog-illustration.png"
          width={100}
          height={100}
          alt="Blog illustration"
          className="max-h-100 object-cover"
        />
        <Heading size="xl">{"Preberi naše članke"}</Heading>
        <Paragraph size="lg">
          {
            "Preberi povzetke dogodkov, uporabne nasvete za iskanje službe, priprava na tehnični intervju, predlogi knjig in še več."
          }
        </Paragraph>
      </div>
      {/* First 3 posts */}
      <div className="flex flex-col md:flex-row gap-4">
        {posts.slice(0, 3).map((post, index) => (
          <div key={post.slug.current} className="basis-1/3">
            <PostComponent post={post} />
          </div>
        ))}
      </div>

      {/* Newsletter Component */}
      <div className="py-10 md:py-20">
        <NewsletterComponent />
      </div>

      {/* Remaining Posts (4 to 10) */}
      <div className="flex flex-col md:flex-row gap-6">
        {posts.slice(3, 6).map((post, index) => (
          <div key={post.slug.current} className="basis-1/3">
            <PostComponent post={post} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
