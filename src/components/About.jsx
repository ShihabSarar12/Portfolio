/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const blurStyle = {
    left: mousePos.x - 100,
    top: mousePos.y - 100,
  };

  return (
    <section className="relative px-4 py-8 sm:px-6 sm:py-12 md:px-12 bg-black min-h-screen overflow-hidden">
      {/* Cursor-following blur */}
      <div
        className="pointer-events-none fixed w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30 blur-3xl z-0"
        style={blurStyle}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Artwork Showcase */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-md transition-all duration-300"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
            🎨 Artwork Showcase
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            My designs and illustrations.
          </p>
          <Swiper spaceBetween={10} slidesPerView={1} className="mt-4">
            {[1, 2, 3].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-40 sm:h-48 bg-white/10 rounded-xl text-white flex justify-center items-center text-base sm:text-lg">
                  Artwork {item}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Research & Projects */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-md transition-all duration-300"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
            📚 Research & Projects
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Academic and personal works.
          </p>
          <Swiper spaceBetween={10} slidesPerView={1} className="mt-4">
            {[1, 2, 3].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-40 sm:h-48 bg-white/10 rounded-xl text-white flex justify-center items-center text-base sm:text-lg">
                  Project {item}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* IPCP CP */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-md transition-all duration-300"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
            💻 IPCP Competitive Programming
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            My journey through ICPC and local contests.
          </p>
        </motion.div>

        {/* GitHub & LeetCode */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-md transition-all duration-300"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
            🧠 LeetCode & GitHub Activity
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Check my open-source work and problem-solving stats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
