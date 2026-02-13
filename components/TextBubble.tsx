import { Card } from "flowbite-react";

interface TextBubbleProps {
  children: React.ReactNode;
  className?: string;
}

const TextBubble: React.FC<TextBubbleProps> = ({
  children,
  className = "",
}) => {
  return (
    <Card className={`rounded-full ${className}`}>
      <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </Card>
  );
};

export default TextBubble;

// I HAVE A SLIGHT IDEA OF WHAT i'M DOING!!!
