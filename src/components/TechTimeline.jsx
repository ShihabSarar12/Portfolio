/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Bubble from "./Bubble.jsx";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaLinux,
  FaCode,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiDjango,
  SiMysql,
  SiBlender,
  SiFigma,
  SiUnity,
  SiAndroidstudio,
  SiTensorflow,
  SiArduino,
  SiKotlin,
  SiSqlite,
  SiOpencv,
  SiOracle,
  SiXampp,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "C", icon: <SiC className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-300" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
      { name: "Java", icon: <FaJava className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-pink-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "Xampp", icon: <SiXampp className="text-shadow-orange-400" /> },
      { name: "Django", icon: <SiDjango className="text-yellow-500" /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Oracle", icon: <SiOracle className="text-red-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "AWS", icon: <FaAws className="text-white" /> },
      { name: "Firebase", icon: <SiFirebase className="text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "SQL Lite", icon: <SiSqlite className="text-cyan-400" /> },
    ],
  },
  {
    title: "Tools / Research",
    items: [
      { name: "Blender", icon: <SiBlender className="text-yellow-400" /> },
      { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
      {
        name: "Andriod Studio",
        icon: <SiAndroidstudio className="text-green-500" />,
      },
      {
        name: "Tensor Flow",
        icon: <SiTensorflow className="text-yellow-400" />,
      },
      { name: "Arduino", icon: <SiArduino className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "Open Cv", icon: <SiOpencv className="text-violet-700" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-red-400" /> },
      { name: "Unity", icon: <SiUnity className="text-yellow-400" /> },
    ],
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.6 },
  }),
};

const iconListVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TechTimeline = () => {
  return (
    <section className=" bg-gradient-to-b from-[#198bb8] to-black text-white py-20 px-4 relative">
      <div className="absolute bottom-0 left-0 w-full  pointer-events-none bg-gradient-to-b from-transparent to-[#0f0f1e]">
        {Array.from({ length: 15 }).map((_, i) => (
          <Bubble
            key={i}
            size={Math.random() * 15 + 10}
            x={`${Math.random() * 100}%`}
            delay={Math.random() * 4}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-12">
        🧩 Development Tech ⚙️
      </h2>

      <svg
        className="absolute top-24 left-1/2 transform -translate-x-1/2 z-0"
        width="2"
        height="100%"
      >
        <defs>
          <marker
            id="dot"
            markerWidth="5"
            markerHeight="5"
            refX="2.5"
            refY="2.5"
            markerUnits="userSpaceOnUse"
          >
            <circle cx="2.5" cy="2.5" r="2.5" fill="#999" />
          </marker>
        </defs>
      </svg>

      <div className="flex flex-col items-center gap-20 max-w-6xl mx-auto z-10 relative">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            className="flex flex-col items-center relative w-full"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            {index > 0 && (
              <svg height="60" width="100" className="absolute -top-16">
                <path
                  d="M50,60 C50,30 50,30 50,0"
                  stroke="#666"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#dot)"
                />
              </svg>
            )}

            <div className="text-lg font-semibold mb-4 bg-zinc-800 px-6 py-2 rounded-full shadow">
              {cat.title}
            </div>

            <motion.div
              className="flex flex-wrap justify-center items-center gap-5 md:gap-8 px-6"
              variants={iconListVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cat.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={iconVariant}
                  className="flex items-center gap-2 transition-all"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechTimeline;
