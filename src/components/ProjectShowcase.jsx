/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sheikh Expedition",
    image: "/projects/hospital.png",
    github: "https://github.com/ShihabSarar12/SheikhExpedition",
    tech: ["React", "Tailwind", "MongoDB", "Node.js"],
  },
  {
    title: "Uni Hub",
    image: "/projects/ecommerce.png",
    github: "https://github.com/ShihabSarar12/UniHub",
    tech: ["Next.js", "Stripe", "Firebase"],
  },
  {
    title: "People Surveillance Blockchain",
    image: "/projects/blog.png",
    github: "https://github.com/ShihabSarar12/People-Surveillance-Blockchain",
    tech: ["Express", "MongoDB", "EJS", "Node.js"],
  },
  {
    title: "Smart Tech",
    image: "/projects/portfolio.png",
    github: "https://github.com/ShihabSarar12/SmartTech",
    tech: ["React", "Framer Motion", "TailwindCSS"],
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-black to-[#281624]">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="bg-[#281624] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
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
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
