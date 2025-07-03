import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// 3D Card Component
const AnimatedCard = ({ name, role, image }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Interactive tilt animation
  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * 0.3;
      groupRef.current.rotation.y = mouse.x * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={hovered ? 1.05 : 1}>
      <Float
        speed={2}
        rotationIntensity={1.2}
        floatIntensity={2.5}
        floatingRange={[0, 0.1]}
      >
        <Html center>
          <div
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            className={`w-[280px] h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 relative group`}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 w-full bg-black/70 px-4 py-3 backdrop-blur-sm">
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-blue-300 text-sm">{role}</p>
            </div>

            {/* Overlay glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none" />
          </div>
        </Html>
      </Float>
    </group>
  );
};

const TeamCard3D = ({ name, role, image }) => {
  return (
    <div className="h-[400px] w-[300px]">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Environment preset="sunset" />
        <AnimatedCard name={name} role={role} image={image} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default TeamCard3D;
