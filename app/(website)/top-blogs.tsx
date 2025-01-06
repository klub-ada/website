import { BlogCard } from "../components/blog-card";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { PageWrapper } from "../components/page-wrapper";
import PostComponent from "../components/post-component";
import imageLoader from "../utils/image-loader";
import { Post } from "../utils/interface";
import { getPinnedPosts } from "./blog/blogs";

export async function TopBlogs() {
  const pinnedPosts: Post[] = await getPinnedPosts();

  return (
    <PageWrapper hasNoBottomPadding bgColor="bg-white">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-sm md:max-w-2xl">
            <Heading size="lg">Najnovejši blogi</Heading>
          </div>
          <div className="">
            <Button size="md" variant="primary">
              Preberi vse bloge
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-nowrap gap-4">
          {pinnedPosts.map((post) => (
            <div key={post.slug.current} className="basis-1/3">
              <PostComponent post={post} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
