/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import logo1 from "../assets/Java.svg";
import logo2 from "../assets/Javascripts.svg";
import logo3 from "../assets/C++.svg";
import logo4 from "../assets/Node.svg";
import logo5 from "../assets/Express.svg";
import logo6 from "../assets/Aws.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const positions = [
  { top: "5%", left: "5%" },
  { top: "10%", left: "55%" },
  { top: "30%", left: "20%" },
  { top: "50%", left: "60%" },
  { top: "70%", left: "30%" },
  { top: "80%", left: "70%" },
];

const WavingLogo = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-visible">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo}
          alt={`logo-${i}`}
          className="absolute w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            rotate: [0, i % 2 === 0 ? 15 : -15, i % 2 === 0 ? -15 : 15, 0],
            opacity: [0.3, 0.6, 1, 0.6, 0.3],
            y: [0, -10 + i * 2, 10 - i * 2, 0],
            x: [0, 8 - i, -8 + i, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 6 + i,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          style={{
            top: positions[i].top,
            left: positions[i].left,
          }}
        />
      ))}
    </div>
  );
};

export default WavingLogo;
