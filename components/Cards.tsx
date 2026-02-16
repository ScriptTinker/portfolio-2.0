import { Card as FlowbiteCard, Button } from "flowbite-react";
import { TestButton } from "./Buttons";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

export const LinkCard: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <FlowbiteCard>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <TestButton text={buttonText} />
    </FlowbiteCard>
  );
};

export const HeroCard: React.FC<CardProps> = ({ title, description }) => {
  return "";
};
