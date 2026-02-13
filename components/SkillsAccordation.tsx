"use client";

import {
  Accordion,
  AccordionPanel,
  AccordionContent,
  AccordionTitle,
} from "flowbite-react";

interface SkillsAccordationProps {
  textColor?: string;
}

const SkillsAccordation: React.FC<SkillsAccordationProps> = ({
  textColor = "text-gray-500 dark:text-gray-400",
}) => {
  return (
    <Accordion className="w-full rounded-lg border">
      <AccordionPanel>
        <AccordionTitle>My Skills</AccordionTitle>
        <AccordionContent>
          <Accordion collapseAll={true} className="w-full rounded-lg border">
            <AccordionPanel>
              <AccordionTitle>Frontend</AccordionTitle>
              <AccordionContent className="">
                <p className={textColor}>
                  React, Next.js, Tailwind CSS, Flowbite
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle>Backend</AccordionTitle>
              <AccordionContent>
                <p className={textColor}>
                  Node.js, Express, MongoDB, PostgreSQL
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle>DevOps</AccordionTitle>
              <AccordionContent>
                <p className={textColor}>Docker, Kubernetes, CI/CD, AWS</p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle>Tools & Others</AccordionTitle>
              <AccordionContent>
                <p className={textColor}>Git, VS Code, Figma, Agile</p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default SkillsAccordation;
