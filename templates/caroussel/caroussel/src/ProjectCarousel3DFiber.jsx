// Alternative implementation using React Three Fiber
// Install: npm install @react-three/fiber @react-three/drei three

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

const ProjectCard = ({ project, position, rotation, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Load texture
  const texture = useTexture(project.image, 
    // onLoad
    undefined,
    // onError - fallback
    () => null
  );

  useFrame(() => {
    if (meshRef.current) {
      // Smooth scale animation
      const targetScale = hovered ? 1.15 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  const handleClick = () => {
    setClicked(true);
    alert(`Opening ${project.title}!\n\nNavigating to project page...`);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      {/* Main card */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 5, 0.2]} />
        <meshPhongMaterial color="white" />
      </mesh>

      {/* Image */}
      <mesh position={[0, 0.7, 0.11]}>
        <planeGeometry args={[3.6, 3]} />
        <meshBasicMaterial 
          map={texture} 
          color={texture ? 'white' : project.color}
        />
      </mesh>

      {/* Title background */}
      <mesh position={[0, -1.6, 0.11]}>
        <planeGeometry args={[3.6, 1.5]} />
        <meshBasicMaterial color="#f8f9fa" />
      </mesh>

      {/* Text */}
      <Text
        position={[0, -1.4, 0.12]}
        fontSize={0.25}
        color="#333333"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.2}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        {project.title}
      </Text>

      <Text
        position={[0, -1.9, 0.12]}
        fontSize={0.18}
        color="#666666"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.2}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        {project.desc}
      </Text>

      {/* Hover overlay */}
      {hovered && (
        <Html
          position={[0, 0, 0.15]}
          center
          distanceFactor={10}
          style={{
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              padding: '15px 40px',
              borderRadius: '30px',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            }}
          >
            View Project
          </div>
        </Html>
      )}
    </group>
  );
};

const Carousel = ({ projects }) => {
  const groupRef = useRef();
  const { viewport } = useThree();
  const scrollYRef = useRef(0);

  // Handle scroll rotation
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - scrollYRef.current;
      
      if (groupRef.current) {
        groupRef.current.rotation.y += scrollDelta * 0.001;
      }
      
      scrollYRef.current = scrollY;
    };

    const handleWheel = (e) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += e.deltaY * 0.0005;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const radius = 12;
  const numProjects = projects.length;
  const angleStep = (Math.PI * 2) / numProjects;

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const angle = angleStep * index;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <ProjectCard
            key={index}
            project={project}
            position={[x, 0, z]}
            rotation={[0, -angle, 0]}
            index={index}
          />
        );
      })}
    </group>
  );
};

const ProjectCarousel3DFiber = () => {
  const projects = [
    { 
      title: "E-Commerce Platform", 
      desc: "Modern shopping experience", 
      color: "#ff6b6b",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
    },
    { 
      title: "Portfolio Website", 
      desc: "Creative showcase", 
      color: "#4ecdc4",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
    },
    { 
      title: "Task Manager App", 
      desc: "Productivity tool", 
      color: "#45b7d1",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    },
    { 
      title: "Social Network", 
      desc: "Connect with friends", 
      color: "#96ceb4",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop"
    },
    { 
      title: "Weather Dashboard", 
      desc: "Live weather data", 
      color: "#ffeaa7",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
    },
    { 
      title: "Music Player", 
      desc: "Stream your favorites", 
      color: "#dda15e",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
    },
    { 
      title: "Blog Platform", 
      desc: "Share your thoughts", 
      color: "#bc6c25",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
    },
    { 
      title: "Recipe Book", 
      desc: "Culinary collection", 
      color: "#f4a261",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        shadows
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#4ecdc4" />
        <spotLight
          position={[0, 20, 0]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Carousel */}
        <Carousel projects={projects} />
      </Canvas>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '14px',
          textAlign: 'center',
          zIndex: 1000,
          animation: 'bounce 2s infinite',
          pointerEvents: 'none',
        }}
      >
        <div style={{ marginBottom: '10px', fontSize: '24px' }}>↕</div>
        Scroll or use mouse wheel to rotate
      </div>

      {/* Add height for scrolling */}
      <div style={{ height: '200vh' }} />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        body {
          cursor: default;
        }
        
        canvas {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel3DFiber;
