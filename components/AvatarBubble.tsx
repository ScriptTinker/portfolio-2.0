import type { ReactNode } from "react";
import Image from "next/image";

interface AvatarBubbleProps {
  className?: string;
  width?: number;
  imgSrc: string;
  alt: string;
}

const AvatarBubble: React.FC<AvatarBubbleProps> = ({
  className,
  width,
  imgSrc,
  alt,
}) => {
  return (
    <Image
      className={"rounded-full border-4 border-white " + className}
      width={width}
      height={width}
      src={imgSrc}
      alt={alt}
    ></Image>
  );
};

export default AvatarBubble;
