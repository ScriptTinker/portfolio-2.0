"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

interface TestButtonProps {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ text }) => {
  return <Button onClick={() => alert("Button clicked!")}>{text}</Button>;
};

export const LinkButton: React.FC<TestButtonProps> = ({ href, children }) => {
  return (
    <Button as={Link} href={href as string}>
      {children}
    </Button>
  );
};

export const LoginButton: React.FC<TestButtonProps> = ({
  children,
  className,
}) => {
  return (
    <Button type="submit" className={className}>
      {children}
    </Button>
  );
};
