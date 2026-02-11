"use client";

import { Card as FlowbiteCard, Button } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";

interface CardProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Card({
  title = "Streamlining your design process with Flowbite.",
  description = "In today's fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.",
  ctaLabel = "Read more",
  ctaHref = "#",
}: CardProps) {
  return (
    <FlowbiteCard className="max-w-sm rounded-2xl border-0 bg-[#1a2035] shadow-xl">
      <h5 className="text-xl leading-snug font-bold tracking-tight text-white">
        {title}
      </h5>

      <p className="text-sm leading-relaxed font-normal text-gray-300">
        {description}
      </p>

      <Button
        href={ctaHref}
        color="blue"
        className="w-fit rounded-lg text-sm font-medium"
      >
        {ctaLabel}
        <HiArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </FlowbiteCard>
  );
}
