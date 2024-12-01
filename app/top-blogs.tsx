import { BlogCard } from "./components/blog-card";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { PageWrapper } from "./components/page-wrapper";

export function TopBlogs() {
  const blogs = [
    {
      title: "Naslov bloga 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/assets/coffee&&code.png",
      imageAlt: "/",
    },
    {
      title: "Naslov bloga 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/assets/coffee&&code.png",
      imageAlt: "/",
    },
    {
      title: "Naslov bloga 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      imageSrc: "/assets/coffee&&code.png",
      imageAlt: "/",
    },
  ];

  return (
    <PageWrapper bgColor="bg-white">
      <div className="flex flex-col py-10 md:py-20 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <div className="max-w-sm md:max-w-2xl">
            <Heading size="lg">
              {"Kaj pravijo naše članice in partnerji"}
            </Heading>
          </div>
          <div className="">
            <Button size="md" variant="primary">
              Preberi naš blog
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          {blogs.map(({ title, description, imageSrc, imageAlt }) => {
            return (
              <div className="basis-1/3">
                <BlogCard
                  title={title}
                  description={description}
                  imageSrc={imageSrc}
                  imageAlt={imageAlt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
