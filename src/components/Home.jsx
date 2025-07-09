import Three from "./Three";
import TechTimeline from "./TechTimeline";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Three />

      {/* GLASS DIVIDER */}

      <TechTimeline />
    </div>
  );
};

export default Home;
