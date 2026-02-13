import React from "react";
import TextBubble from "@/components/TextBubble";
import AvatarBubble from "@/components/AvatarBubble";
import { LinkCard } from "@/components/Cards";
import { MainPageBanner } from "@/components/Banners";
import SkillsAccordation from "@/components/SkillsAccordation";
import { Footer } from "flowbite-react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="grid place-items-center">
          <AvatarBubble imgSrc="/profile.jpg" alt="Profile" width={300} />
        </div>
        <div className="grid place-items-center">
          <TextBubble className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextBubble>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        <div className="max-w-md">
          <LinkCard
            title="Card Title"
            description="Go to da projectz page to see my projects cuh see more of this shiiiiiiiii cuhz"
            buttonText="Learn More"
          />
        </div>
        <div className="max-w-md">
          <LinkCard
            title="Card Title"
            description="Go to da about page to hit me up cuh what's up cuh yuh yuh"
            buttonText="Learn More"
          />
        </div>
      </div>
      <div className="mt-8 grid max-w-md place-items-center">
        <MainPageBanner>My Current Project:</MainPageBanner>
      </div>
      <div className="mt-8 grid place-items-center">
        <SkillsAccordation />
      </div>
    </div>
  );
};

export default Page;
