"use client";

import {
  Accordion,
  AccordionPanel,
  AccordionContent,
  AccordionTitle,
} from "flowbite-react";

interface SkillsAccordationProps {}

const SkillsAccordation: React.FC<SkillsAccordationProps> = () => {
  return (
    <Accordion>
      <AccordionPanel alwaysOpen={true}>
        <AccordionTitle>My Skills</AccordionTitle>

        <AccordionContent>
          <AccordionPanel>
            <AccordionTitle>Frontend</AccordionTitle>
            <AccordionContent>
              <AccordionPanel>
                <AccordionTitle>React</AccordionTitle>
              </AccordionPanel>
            </AccordionContent>
          </AccordionPanel>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default SkillsAccordation;
