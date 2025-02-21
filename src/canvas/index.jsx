import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center,OrbitControls  } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

export default function CanvasModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [1, 1, 1], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
      <OrbitControls enablePan={false} enableZoom={true} />
    </Canvas>
  );
}
