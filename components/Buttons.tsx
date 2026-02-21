"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export const LinkButton: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Button as={Link} href={href as string}>
      {children}
    </Button>
  );
};

export const LoginButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <Button type="submit" className={className}>
      {children}
    </Button>
  );
};
