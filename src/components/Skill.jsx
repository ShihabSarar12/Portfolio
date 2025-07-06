/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Skill = ({ skill, level, Icon, description }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  // Animate number count-up
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(level / 30); // adjust smoothness
    const interval = setInterval(() => {
      start += step;
      if (start >= level) {
        start = level;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);
  }, [level]);

  useEffect(() => {
    controls.start({ width: `${level}%` });
  }, [controls, level]);

  return (
    <div className="mb-6 group relative">
      {/* Label and icon */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex gap-2 items-center text-cyan-400">
          {Icon && <Icon className="text-xl text-cyan-400" />}
          <span data-tooltip-id={skill}>{skill}</span>
          {/* Tooltip */}
          <Tooltip id={skill} place="right" content={description} />
        </div>
        <span className="text-sm text-white">{count}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-cyan-400 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Skill;
