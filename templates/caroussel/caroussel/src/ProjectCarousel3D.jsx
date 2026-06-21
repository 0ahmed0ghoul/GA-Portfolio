import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ProjectCarousel3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const carouselGroupRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [hoveredProject, setHoveredProject] = useState(null);
  const scrollYRef = useRef(0);

  const projects = [
    { 
      title: "E-Commerce Platform", 
      desc: "Modern shopping experience", 
      color: 0xff6b6b,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
    },
    { 
      title: "Portfolio Website", 
      desc: "Creative showcase", 
      color: 0x4ecdc4,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
    },
    { 
      title: "Task Manager App", 
      desc: "Productivity tool", 
      color: 0x45b7d1,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
    },
    { 
      title: "Social Network", 
      desc: "Connect with friends", 
      color: 0x96ceb4,
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop"
    },
    { 
      title: "Weather Dashboard", 
      desc: "Live weather data", 
      color: 0xffeaa7,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
    },
    { 
      title: "Music Player", 
      desc: "Stream your favorites", 
      color: 0xdda15e,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
    },
    { 
      title: "Blog Platform", 
      desc: "Share your thoughts", 
      color: 0xbc6c25,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
    },
    { 
      title: "Recipe Book", 
      desc: "Culinary collection", 
      color: 0xf4a261,
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    camera.position.y = 0;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4ecdc4, 0.5);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    const spotLight = new THREE.SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 20, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Create carousel group
    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);
    carouselGroupRef.current = carouselGroup;

    // Create project cards
    const radius = 12;
    const cardWidth = 4;
    const cardHeight = 5;
    const numProjects = projects.length;
    const angleStep = (Math.PI * 2) / numProjects;

    const textureLoader = new THREE.TextureLoader();

    projects.forEach((project, index) => {
      const angle = angleStep * index;

      // Card group
      const cardGroup = new THREE.Group();
      
      // Card geometry (rounded rectangle)
      const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, 0.2, 1, 1, 1);
      const cardMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shininess: 30,
      });
      const card = new THREE.Mesh(cardGeometry, cardMaterial);
      card.castShadow = true;
      card.receiveShadow = true;
      cardGroup.add(card);

      // Image plane
      const imageGeometry = new THREE.PlaneGeometry(cardWidth - 0.4, 3);
      textureLoader.load(
        project.image,
        (texture) => {
          const imageMaterial = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
          });
          const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
          imageMesh.position.set(0, 0.7, 0.11);
          cardGroup.add(imageMesh);
        },
        undefined,
        () => {
          // Fallback color if image fails to load
          const imageMaterial = new THREE.MeshBasicMaterial({ 
            color: project.color,
            side: THREE.DoubleSide
          });
          const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
          imageMesh.position.set(0, 0.7, 0.11);
          cardGroup.add(imageMesh);
        }
      );

      // Title background
      const titleBgGeometry = new THREE.PlaneGeometry(cardWidth - 0.4, 1.5);
      const titleBgMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xf8f9fa,
        side: THREE.DoubleSide
      });
      const titleBg = new THREE.Mesh(titleBgGeometry, titleBgMaterial);
      titleBg.position.set(0, -1.6, 0.11);
      cardGroup.add(titleBg);

      // Create text canvas for title
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      context.fillStyle = '#f8f9fa';
      context.fillRect(0, 0, 512, 256);
      context.fillStyle = '#333333';
      context.font = 'bold 40px Arial';
      context.textAlign = 'center';
      context.fillText(project.title, 256, 80);
      context.font = '28px Arial';
      context.fillStyle = '#666666';
      context.fillText(project.desc, 256, 140);

      const textTexture = new THREE.CanvasTexture(canvas);
      const textMaterial = new THREE.MeshBasicMaterial({ 
        map: textTexture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const textMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(cardWidth - 0.4, 1.5),
        textMaterial
      );
      textMesh.position.set(0, -1.6, 0.12);
      cardGroup.add(textMesh);

      // Position card in circle
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      cardGroup.position.set(x, 0, z);
      cardGroup.rotation.y = -angle;

      // Store project data
      cardGroup.userData = { 
        projectIndex: index, 
        project: project,
        originalScale: 1,
        hovered: false
      };

      carouselGroup.add(cardGroup);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - scrollYRef.current;
      
      // Rotate carousel based on scroll
      carouselGroup.rotation.y += scrollDelta * 0.001;
      
      scrollYRef.current = scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Handle mouse wheel
    const handleWheel = (e) => {
      carouselGroup.rotation.y += e.deltaY * 0.0005;
    };
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Handle mouse move for hover effect
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(
        carouselGroup.children,
        true
      );

      // Reset all cards
      carouselGroup.children.forEach(cardGroup => {
        if (cardGroup.userData.hovered) {
          cardGroup.scale.set(1, 1, 1);
          cardGroup.userData.hovered = false;
        }
      });

      setHoveredProject(null);

      if (intersects.length > 0) {
        let cardGroup = intersects[0].object;
        while (cardGroup.parent && cardGroup.parent !== carouselGroup) {
          cardGroup = cardGroup.parent;
        }
        
        if (cardGroup.userData.projectIndex !== undefined) {
          cardGroup.scale.set(1.1, 1.1, 1.1);
          cardGroup.userData.hovered = true;
          setHoveredProject(cardGroup.userData.projectIndex);
          document.body.style.cursor = 'pointer';
        }
      } else {
        document.body.style.cursor = 'default';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Handle click
    const handleClick = () => {
      if (hoveredProject !== null) {
        alert(`Opening ${projects[hoveredProject].title}!\n\nNavigating to project page...`);
      }
    };
    window.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      mountRef.current?.removeChild(renderer.domElement);
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* View Project Button Overlay */}
      {hoveredProject !== null && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        >
          <button
            style={{
              padding: '15px 40px',
              background: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              pointerEvents: 'all',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            View Project
          </button>
        </div>
      )}

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
      `}</style>
    </div>
  );
};

export default ProjectCarousel3D;
