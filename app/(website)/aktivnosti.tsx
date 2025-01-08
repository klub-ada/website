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
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Heading size="lg">{"Aktivnosti"}</Heading>
            <Paragraph size="lg">
              {"Preberi si vse aktivnosti, ki jih ponujamo."}
            </Paragraph>
          </div>
          {activities.map(({ name, description, activityImage }) => {
            const imageSrc = imageLoader(activityImage);
            return (
              <div className="col-span-1">
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
