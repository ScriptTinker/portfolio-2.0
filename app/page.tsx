import React from "react";
import TextBubble from "@/components/TextBubble";
import AvatarBubble from "@/components/AvatarBubble";
import { HomeCard } from "@/components/Cards";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="grid place-items-center">
          <AvatarBubble imgSrc="/profile.jpg" alt="Profile" width={300} />
        </div>
        <div className="max-w-md">
          <TextBubble>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextBubble>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 justify-items-center gap-4">
        <div className="max-w-md">
          <HomeCard
            title="Card Title"
            description="Go to da projectz page to see my projects cuh see more of this shiiiiiiiii cuhz"
            buttonText="Learn More"
          />
        </div>
        <HomeCard
          title="Card Title"
          description="Go to da about page to hit me up cuh what's up cuh yuh yuh"
          buttonText="Learn More"
        />
        <div className="max-w-md"></div>
      </div>
    </div>
  );
};

export default page;
