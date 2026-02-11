import React from "react";
import TextBubble from "@/components/TextBubble";

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextBubble>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TextBubble>
      <TextBubble>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </TextBubble>
      <TextBubble>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </TextBubble>
    </div>
  );
};

export default page;
