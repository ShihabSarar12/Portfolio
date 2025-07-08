import { Canvas, useThree } from "@react-three/fiber";

import Wave from "./Wave/Wave.jsx";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import Banner from "./Banner.jsx";
import { Stars } from "@react-three/drei";

const CameraRig = () => {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  // Smooth scroll Y value
  const smoothY = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Transform scroll to camera Y range (from 0.4 to -1)
  const yPos = useTransform(smoothY, [0, 1], [0.4, 0]);

  useMotionValueEvent(yPos, "change", (latest) => {
    camera.position.y = latest;
  });

  return null;
};

const Three = () => {
  return (
    <div className="w-screen relative h-screen">
      <Canvas
        camera={{
          position: [0.6, 0.4, 3],
        }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} intensity={5} />

        {/* Camera scroll behavior */}
        <CameraRig />

        <Wave />
        <Stars depth={100} radius={250} fade={true} />
        {/* <OrbitControls /> */}
      </Canvas>
      <Banner />
    </div>
  );
};

export default Three;
