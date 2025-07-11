/* eslint-disable no-unused-vars */
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import Wave from "./Wave/Wave";
import Banner from "./Banner.jsx";
import { Stars } from "@react-three/drei";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const CameraRig = () => {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  const smoothY = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  const yPos = useTransform(smoothY, [0, 1], [0.7, 1]);

  useMotionValueEvent(yPos, "change", (latest) => {
    camera.position.y = latest;
  });

  return null;
};

const Three = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        scrollToNextSection();
      }
    };

    // ✅ Only once on first scroll
    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{
          position: [0.6, 0.4, 3],
        }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} intensity={5} />
        <Stars depth={100} radius={250} fade={true} />
        <CameraRig />
        <Wave />
      </Canvas>

      <Banner />

      {/* Blur at bottom for gradient */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#0f82b08b] to-transparent backdrop-blur-sm pointer-events-none z-20" />

      {/* Scroll text + bounce arrow */}
      <motion.div
        onClick={scrollToNextSection}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center text-white cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-base font-medium">Dive into my story</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiChevronDown className="text-3xl mt-1" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Three;
