import { Canvas } from "@react-three/fiber";

import PointGrid from "./PointGrid/PointGrid.jsx";
import Banner from "./Banner.jsx";

const Projects = () => {
  return (
    <section className="relative bg-black w-screen h-screen">
      <Canvas camera={{ position: [-0.5, 1, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <PointGrid />
      </Canvas>
      <Banner />
    </section>
  );
};

export default Projects;
