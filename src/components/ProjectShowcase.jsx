// src/components/ProjectShowcase.jsx
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Bubble from "./Bubble.jsx";

const projects = [
  {
    title: "Sheikh Expedition",
    image: "/projects/hospital.png",
    github: "https://github.com/ShihabSarar12/SheikhExpedition",
    tech: ["React", "Tailwind", "MongoDB", "Node.js"],
    screenshots: ["/projects/hospital.png", "/projects/hospital2.png"],
    description:
      "A hospital management system with real-time data sync and inventory tracking.",
  },
  {
    title: "Uni Hub",
    image: "/projects/ecommerce.png",
    github: "https://github.com/ShihabSarar12/UniHub",
    tech: ["Next.js", "Stripe", "Firebase"],
    screenshots: ["/projects/ecommerce.png", "/projects/ecommerce2.png"],
    description:
      "An e-commerce platform for university students with Stripe payments.",
  },
  {
    title: "People Surveillance Blockchain",
    image: "/projects/blog.png",
    github: "https://github.com/ShihabSarar12/People-Surveillance-Blockchain",
    tech: ["Express", "MongoDB", "EJS", "Node.js"],
    screenshots: ["/projects/blog.png", "/projects/blog2.png"],
    description:
      "A blockchain-based tracking system with MongoDB and EJS templates.",
  },
  {
    title: "Smart Tech",
    image: "/projects/portfolio.png",
    github: "https://github.com/ShihabSarar12/SmartTech",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    screenshots: ["/projects/portfolio.png", "/projects/portfolio2.png"],
    description:
      "A modern tech portfolio site with animations and dark mode support.",
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#000000] to-[#281624] overflow-hidden text-white">
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Bubble
            key={i}
            size={Math.random() * 20 + 10}
            x={`${Math.random() * 100}%`}
            delay={Math.random() * 10}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-10 relative z-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 shadow-xl transition-all duration-300"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-bold bg-black bg-opacity-70 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/20 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm text-purple-300 hover:text-purple-500  mt-2"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl max-w-3xl w-full text-white shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white text-xl"
                >
                  ✕
                </button>
              </div>
              <p className="mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/20 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-lg object-cover w-full h-48"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
