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
    <Accordion className="w-full rounded-lg border" alwaysOpen={true}>
      <AccordionPanel collapseAll={true}>
        <AccordionTitle>My Skills</AccordionTitle>
        <AccordionContent>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>My Skills</AccordionTitle>
              <AccordionContent>
                <AccordionPanel>
                  <AccordionTitle>Frontend</AccordionTitle>
                  <AccordionContent>
                    <p>React, Next.js, Tailwind CSS, Flowbite</p>
                  </AccordionContent>
                </AccordionPanel>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>My Skills</AccordionTitle>
              <AccordionContent>
                <AccordionPanel>
                  <AccordionTitle>Frontend</AccordionTitle>
                  <AccordionContent>
                    <p>React, Next.js, Tailwind CSS, Flowbite</p>
                  </AccordionContent>
                </AccordionPanel>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>My Skills</AccordionTitle>
              <AccordionContent>
                <AccordionPanel>
                  <AccordionTitle>Frontend</AccordionTitle>
                  <AccordionContent>
                    <p>React, Next.js, Tailwind CSS, Flowbite</p>
                  </AccordionContent>
                </AccordionPanel>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>My Skills</AccordionTitle>
              <AccordionContent>
                <AccordionPanel>
                  <AccordionTitle>Frontend</AccordionTitle>
                  <AccordionContent>
                    <p>React, Next.js, Tailwind CSS, Flowbite</p>
                  </AccordionContent>
                </AccordionPanel>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default SkillsAccordation;
