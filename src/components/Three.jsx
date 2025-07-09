import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import Wave from "./Wave/Wave";
import Banner from "./Banner.jsx";
import { OrbitControls, Stars, Stats } from "@react-three/drei";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";

const CameraRig = () => {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();

  // Smooth scroll Y value
  const smoothY = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Transform scroll to camera Y range (from 0.4 to -1)
  const yPos = useTransform(smoothY, [0, 1], [0.7, 1]);

  useMotionValueEvent(yPos, "change", (latest) => {
    camera.position.y = latest;
  });

  return null;
};

const Three = () => {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{
          position: [0.6, 0.4, 3],
        }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} intensity={5} />
        <Stars depth={100} radius={250} fade={true} />

        {/* Camera scroll behavior */}
        <CameraRig />

        <Wave />

        {/* <OrbitControls /> */}
      </Canvas>

      <Banner />
      <div className="relative bottom-5 w-full h-15 bg-gradient-to-t from-[#0f82b08b] to-transparent backdrop-blur-sm pointer-events-none z-20" />
    </div>
  );
};

export default Three;
