import React from "react";
import TextBubble from "@/components/TextBubble";
import AvatarBubble from "@/components/AvatarBubble";
const page = () => {
  return (
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
  );
};

export default page;
