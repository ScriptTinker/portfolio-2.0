import SkillsAccordation from "./SkillsAccordation";

interface SkillSectionProps {}

const SkillSection = () => {
  return (
    <>
      <div className="sr-only">
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <p>React, Next.js, Tailwind CSS, Flowbite</p>
        <h3>Backend</h3>
        <p>Node.js, Express, MongoDB, PostgreSQL</p>
        <h3>DevOps</h3>
        <p>Docker, CI/CD</p>
        <h3>Tools & Others</h3>
        <p>Git, VS Code, Figma, Agile</p>
      </div>
      <SkillsAccordation />
    </>
  );
};

export default SkillSection;
