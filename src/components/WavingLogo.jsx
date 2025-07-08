/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
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
  const logoRefs = useRef([]);

  useAnimationFrame((t) => {
    logoRefs.current.forEach((el, i) => {
      if (el) {
        const offset = i * 0.5;
        const y = Math.sin(t / 500 + offset) * 10;
        const x = Math.cos(t / 700 + offset) * 8;
        el.style.transform = `translate(${x}px, ${y}px) rotate(${
          Math.sin(t / 800 + offset) * 5
        }deg)`;
      }
    });
  });

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-visible">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          ref={(el) => (logoRefs.current[i] = el)}
          src={logo}
          alt={`logo-${i}`}
          className="absolute w-14 sm:w-20 md:w-24 lg:w-28 xl:w-32 opacity-40 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: i * 0.4, duration: 1 }}
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
