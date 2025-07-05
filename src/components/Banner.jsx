/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-violet-900 to to-black flex
    xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden
    
    "
    >
      {/* {left sections} */}
      <div className="z-40 xl:mb-0 mb-[10%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-6xl font-bold z-10 mb-6"
        >
          Hi there 🍸 <br /> I'm Shihab Sarar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I'm Shihab, a dynamic and results-driven computer science enthusiast
          currently pursuing a BSc in Computer Science and Engineering in
          Bangladesh. With a keen interest in both art and programming, I bring
          a unique blend of creativity and technical expertise to the table.
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
