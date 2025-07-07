/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import WavingLogo from "./wavingLogo";
import Projects from "./Projects";

const Banner = () => {
  return (
    <section className="absolute left-0 top-0 w-screen h-screen px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* ✅ Logos - Top (mobile), Right (desktop) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <WavingLogo />
        </div>

        {/* ✅ Text - Bottom (mobile), Left (desktop), Left-aligned always */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.3,
            }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4"
          >
            Hi there 🍸 <br />
            <span className="text-blue-400">I'm Shihab Sarar..</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.6,
            }}
            className="text-gray-300 text-base sm:text-lg max-w-md mb-6"
          >
            I'm Shihab, a dynamic and results-driven computer science enthusiast
            currently pursuing a BSc in CSE in Bangladesh. With a keen interest
            in both art and programming, I bring a blend of creativity and
            technical expertise.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 0.9,
            }}
            className="bg-blue-500 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
