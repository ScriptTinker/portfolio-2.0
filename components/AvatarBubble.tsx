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
    <div style={{ position: "relative", width: 400, height: 400 }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: "path(M public/blob.svg)",
        }}
      />

      <Image
        src={imgSrc}
        fill
        alt={alt}
        className={className}
        style={{
          objectFit: "cover",
          clipPath: "path(M public/blob.svg)",
        }}
      />
    </div>
  );
};

export default AvatarBubble;
