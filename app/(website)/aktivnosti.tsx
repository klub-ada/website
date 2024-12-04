import { client } from "@/sanity/lib/client";
import { ActivityCard } from "../components/activity-card";
import { Heading } from "../components/heading";
import { PageWrapper } from "../components/page-wrapper";
import { Paragraph } from "../components/paragraph";
import { SanityDocument } from "next-sanity";
import imageLoader from "../utils/image-loader";

const ACTIVITIES_QUERY = `*[
  _type == "activity"
]`;

export async function Aktivnosti() {
  const activities = await client.fetch<SanityDocument[]>(ACTIVITIES_QUERY);

  return (
    <PageWrapper>
      <div className="flex flex-col py-10 md:py-20 gap-4">
        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <div className="flex flex-col gap-4 basis-1/3">
            <Heading size="lg">{"Aktivnosti"}</Heading>
            <Paragraph size="lg">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Paragraph>
          </div>

          {activities.map(({ name, description, activityImage }) => {
            const imageSrc = imageLoader(activityImage);
            return (
              <div className="basis-1/3" key={name}>
                <ActivityCard
                  title={name}
                  description={description}
                  imageSrc={imageSrc}
                  imageAlt={activityImage.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
