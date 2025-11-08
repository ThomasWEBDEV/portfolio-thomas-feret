"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { motion } from "framer-motion";

function TextMesh() {
  return (
    <Center>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <boxGeometry args={[8, 2, 0.5]} />
          <meshStandardMaterial color="#3B82F6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </Center>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <TextMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
