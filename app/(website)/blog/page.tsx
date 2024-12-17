import { Heading } from "@/app/components/heading";
import { PageWrapper } from "@/app/components/page-wrapper";
import { Paragraph } from "@/app/components/paragraph";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import PostComponent from "@/app/components/post-component";

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
export default async function Page() {
  const posts: Post[] = await getPosts();
  console.log(posts);

  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 px-8 md:px-16 gap-6 items-center">
        <Heading size="xl">{"Preberi naše članke"}</Heading>
        <Paragraph size="lg">
          {
            "Preberi povzetke dogodkov, uporabne nasvete za iskanje službe, priprava na tehnični intervju, predlogi knjig in še več."
          }
        </Paragraph>
      </div>

      <div className="flex gap-6">
        {posts.map((post) => (
          <div className="basis-1/3">
            <PostComponent key={post.slug} post={post} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
