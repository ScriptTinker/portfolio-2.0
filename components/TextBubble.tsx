import { Card } from "flowbite-react";
import { ReactNode } from "react";

interface TextBubbleProps {
  children: React.ReactNode;
  className?: string;
}

const TextBubble: React.FC<TextBubbleProps> = ({
  children,
  className = "",
}) => {
  return (
    <Card className={`rounded-lg bg-gray-100 p-4 ${className}`}>
      <p className="text-gray-800">{children}</p>
    </Card>
  );
};

export default TextBubble;

// I HAVE A SLIGHT IDEA OF WHAT i'M DOING!!!
