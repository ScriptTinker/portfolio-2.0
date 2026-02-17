import React from "react";
import TextBubble from "@/components/TextBubble";

interface Section {
  id: number;
  text: string;
  images: string[];
}

const ProjectPage = () => {
  const sections: Section[] = [
    { id: 1, text: "First section text", images: ["img1.jpg", "img2.jpg"] },
    { id: 2, text: "Second section text", images: ["img3.jpg", "img4.jpg"] },
    { id: 3, text: "Third section text", images: ["img5.jpg", "img6.jpg"] },
  ];

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  return (
    <div className="container mx-auto px-4 py-8">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div
            className={`grid place-items-center ${index % 2 === 1 ? "md:order-2" : ""}`}
          >
            <TextBubble>{section.text}</TextBubble>
          </div>
          <div
            className={`grid place-items-center ${index % 2 === 1 ? "md:order-1" : ""}`}
          >
            {/* Carousel component here */}
            <div className="rounded bg-gray-200 p-8">Carousel {section.id}</div>
          </div>
        </div>
      ))}
      <div className="mt-8 grid place-items-center">
        <h2 className="text-3xl font-bold">Other Projects</h2>
        <TextBubble>Here are other projects that I've worked on</TextBubble>
        {/* Carousel componetaaaa */}
      </div>
    </div>
  );
};

export default ProjectPage;
