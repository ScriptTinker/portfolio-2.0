"use client";

import { Button } from "flowbite-react";

interface TestButtonProps {
  text: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ text }) => {
  return <Button onClick={() => alert("Button clicked!")}>{text}</Button>;
};
