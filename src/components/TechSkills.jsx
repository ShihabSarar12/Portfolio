/* eslint-disable no-unused-vars */
// src/components/TechSkills.jsx
import { motion } from "framer-motion";
import SkillBar from "./Skill.jsx";

// Import icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFramer } from "react-icons/si";

const skills = [
  {
    skill: "HTML5",
    level: 95,
    Icon: FaHtml5,
    description: "Semantic and accessible markup",
  },
  {
    skill: "CSS3 / Tailwind",
    level: 90,
    Icon: SiTailwindcss,
    description: "Responsive utility-first design",
  },
  {
    skill: "JavaScript",
    level: 85,
    Icon: FaJsSquare,
    description: "ES6+, DOM, async, APIs",
  },
  {
    skill: "React.js",
    level: 80,
    Icon: FaReact,
    description: "SPA, hooks, component architecture",
  },
  {
    skill: "Node.js",
    level: 75,
    Icon: FaNodeJs,
    description: "Express.js, REST APIs, backend logic",
  },
  {
    skill: "MongoDB",
    level: 70,
    Icon: SiMongodb,
    description: "NoSQL database with Mongoose",
  },
  {
    skill: "Git & GitHub",
    level: 85,
    Icon: FaGitAlt,
    description: "Version control & collaboration",
  },
  {
    skill: "Framer Motion",
    level: 60,
    Icon: SiFramer,
    description: "UI animations in React",
  },
];

const TechSkills = () => {
  return (
    <section
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-[#281624] to-black"
      id="skills"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">
          Tech Skills
        </h2>
        <div>
          {skills.map((item, i) => (
            <SkillBar
              key={i}
              skill={item.skill}
              level={item.level}
              Icon={item.Icon}
              description={item.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechSkills;
