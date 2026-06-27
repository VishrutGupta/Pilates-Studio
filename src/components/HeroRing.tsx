import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PilatesRing() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(performance.now() * 0.0002) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.02;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.04;
    }
  });

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#C9A96E',
        metalness: 0.95,
        roughness: 0.25,
        emissive: '#3a2e1a',
        emissiveIntensity: 0.4,
      }),
    []
  );

  const wireMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#d0ac6f',
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Main torus — the magic circle */}
      <mesh ref={ringRef} material={goldMaterial}>
        <torusGeometry args={[2.2, 0.18, 32, 120]} />
      </mesh>

      {/* Wireframe overlay torus */}
      <mesh material={wireMaterial} scale={1.02}>
        <torusGeometry args={[2.2, 0.19, 16, 48]} />
      </mesh>

      {/* Inner counter-rotating ring */}
      <mesh ref={innerRingRef} material={wireMaterial} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.04, 12, 80]} />
      </mesh>

      {/* Floating accent spheres */}
      <mesh position={[2.2, 0, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.08, 24, 24]} />
      </mesh>
      <mesh position={[-2.2, 0, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.08, 24, 24]} />
      </mesh>
      <mesh position={[0, 2.2, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.08, 24, 24]} />
      </mesh>
      <mesh position={[0, -2.2, 0]} material={goldMaterial}>
        <sphereGeometry args={[0.08, 24, 24]} />
      </mesh>
    </group>
  );
}

export default function HeroRing() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5e0" />
      <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#C9A96E" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#d0ac6f" />
      <PilatesRing />
    </Canvas>
  );
}
