/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Bubble = ({ size = 20, x = "50%", delay = 0 }) => {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        width: size,
        height: size,
        left: x,
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.2)",
        filter: "blur(2px)",
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -600, opacity: [0, 0.5, 0] }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
};

export default Bubble;
