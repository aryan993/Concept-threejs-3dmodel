import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./App.css";

function Model(props) {
  const { scene } = useGLTF("/P1.glb");             //uploading the file from loacl directory to the scene var using useGLTF
  return <primitive object={scene} />;              // to upload file to local directory we can use multor
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-10, 15, 15], fov: 5 }}>
      <pointLight position={[1000, 1000, 1000]} intensity={0.5} />
      <pointLight position={[100, -100, 100]} intensity={0.5} />
      <pointLight position={[100, 100, -100]} intensity={0.5} />
      <pointLight position={[-100, -100, -100]} intensity={0.5} />
      <pointLight position={[100, -100, -100]} intensity={0.5} />
      <pointLight position={[-100, 100, -100]} intensity={0.5} />

      <ambientLight intensity={5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
