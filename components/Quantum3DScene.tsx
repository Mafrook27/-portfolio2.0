/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Sphere, Environment, Torus } from '@react-three/drei';
import * as THREE from 'three';

// --- PREMIUM DYNAMIC CONSTELLATION NODE NETWORK ---
interface Node {
  position: THREE.Vector3;
  targetPosition: THREE.Vector3;
  speed: number;
  size: number;
  color: string;
  phase: number;
}

const ConstellationNetwork: React.FC<{ count?: number }> = ({ count = 45 }) => {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const lineMeshRef = useRef<THREE.LineSegments>(null);
  const nodes = useRef<Node[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  const isMobile = viewport.width < 5.2;
  const sideLimit = viewport.width * 0.55;
  const vertLimit = viewport.height * 0.55;

  // Initialize nodes randomly dispersed throughout the interactive frustum
  if (nodes.current.length === 0) {
    const palette = ['#bf9d55', '#4F46E5', '#10B981', '#38BDF8', '#8B5CF6'];
    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * sideLimit * 2,
        (Math.random() - 0.5) * vertLimit * 2,
        (Math.random() - 0.5) * 2
      );
      nodes.current.push({
        position: pos.clone(),
        targetPosition: pos.clone(),
        speed: 0.2 + Math.random() * 0.5,
        size: 0.035 + Math.random() * 0.065,
        color: palette[i % palette.length],
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  // Update mouse coordinate handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const children = groupRef.current?.children;
    
    const mousePos3D = new THREE.Vector3(
      mouse.current.x * sideLimit,
      mouse.current.y * vertLimit,
      0
    );

    // 1. Advance and animate nodes (magnetic attraction + brownian drift)
    nodes.current.forEach((node, i) => {
      const mesh = children?.[i] as THREE.Mesh;
      if (mesh) {
        // Drift motion using harmonic wave mechanics
        node.targetPosition.x += Math.sin(t * node.speed + node.phase) * 0.004;
        node.targetPosition.y += Math.cos(t * node.speed * 0.8 + node.phase) * 0.004;

        // Soft cursor gravity field (nodes gently pull towards the mouse)
        const distToMouse = node.targetPosition.distanceTo(mousePos3D);
        if (distToMouse < 2.5) {
          const attractionStrength = (2.5 - distToMouse) * 0.03;
          node.position.lerp(mousePos3D, attractionStrength);
        } else {
          // Return to drift path smoothly
          node.position.lerp(node.targetPosition, 0.05);
        }

        // Keep elements strictly contained in viewport space
        if (Math.abs(node.position.x) > sideLimit * 1.1) {
          node.position.x = -node.position.x;
          node.targetPosition.x = node.position.x;
        }
        if (Math.abs(node.position.y) > vertLimit * 1.1) {
          node.position.y = -node.position.y;
          node.targetPosition.y = node.position.y;
        }

        mesh.position.copy(node.position);
        
        // Add dynamic orbital pulse
        const pulse = 1.0 + Math.sin(t * 3 + i) * 0.15;
        mesh.scale.setScalar(pulse);
      }
    });

    // 2. Generate elegant constellation linkage lines between adjacent nodes
    if (lineMeshRef.current) {
      const positions: number[] = [];
      const colors: number[] = [];
      const connectionDistance = isMobile ? 1.0 : 1.6;

      for (let i = 0; i < nodes.current.length; i++) {
        const nodeA = nodes.current[i];
        for (let j = i + 1; j < nodes.current.length; j++) {
          const nodeB = nodes.current[j];
          const dist = nodeA.position.distanceTo(nodeB.position);

          if (dist < connectionDistance) {
            // Elegant linear interpolation fading lines based on distance
            const alpha = 1.0 - dist / connectionDistance;
            
            positions.push(nodeA.position.x, nodeA.position.y, nodeA.position.z);
            positions.push(nodeB.position.x, nodeB.position.y, nodeB.position.z);

            const cA = new THREE.Color(nodeA.color);
            const cB = new THREE.Color(nodeB.color);

            // Set custom connection colors matching the linked node pair
            colors.push(cA.r, cA.g, cA.b, alpha * 0.35);
            colors.push(cB.r, cB.g, cB.b, alpha * 0.35);
          }
        }
      }

      lineMeshRef.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      lineMeshRef.current.geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 4)
      );
      lineMeshRef.current.geometry.computeBoundingSphere();
      lineMeshRef.current.geometry.computeBoundingBox();
    }
  });

  return (
    <group>
      {/* Network Linkages Geometry */}
      <lineSegments ref={lineMeshRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          vertexColors 
          transparent 
          blending={THREE.AdditiveBlending} 
          linewidth={1} 
        />
      </lineSegments>

      {/* Floating System/API Node spheres */}
      <group ref={groupRef}>
        {nodes.current.map((node, i) => (
          <Sphere key={i} args={[node.size, 16, 16]} position={[0, 0, 0]}>
            <meshBasicMaterial 
              color={node.color} 
              transparent 
              opacity={0.7} 
            />
          </Sphere>
        ))}
      </group>
    </group>
  );
};

// --- CAMERA PARALLAX CONTROLLER ---
const CameraParallax: React.FC = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Highly cushioned and organic camera floating motion
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.8, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.current.y * 0.6, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// --- HERO SCENE ---
export const HeroScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5.0], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Constellation Network Graph */}
      <ConstellationNetwork count={50} />
      
      {/* Soft parallax reaction */}
      <CameraParallax />
      
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={600} factor={3} saturation={0} fade speed={0.4} />
    </Canvas>
  );
};

// --- QUANTUM COMPUTER SCENE ---
export const QuantumComputerScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5.0], fov: 45 }}>
      <ambientLight intensity={1.0} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#bf9d55" />
      <Environment preset="studio" />
      
      <Float rotationIntensity={0.3} floatIntensity={0.2} speed={1}>
        <group>
          {/* Simple geometric sculpture that is sleek and abstract */}
          <Torus args={[1.2, 0.015, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="#bf9d55" transparent opacity={0.6} />
          </Torus>
          <Torus args={[0.9, 0.012, 16, 80]} rotation={[0, Math.PI / 4, 0]}>
            <meshBasicMaterial color="#38BDF8" transparent opacity={0.4} />
          </Torus>
          <Sphere args={[0.3, 32, 32]}>
            <meshStandardMaterial color="#10B981" metalness={0.9} roughness={0.1} />
          </Sphere>
        </group>
      </Float>
    </Canvas>
  );
};
