import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Canvas, useLoader, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import earthText from '../assets/images/textures/earth.jpg';

const Earth = () => {
    const [colorMap] = useLoader(THREE.TextureLoader, [earthText]);
    const meshRef = useRef(); // Changed to useRef for simplicity
    const { size } = useThree(); // Get the size of the canvas
    const [scale, setScale] = useState([2, 2, 2]); // State for scale

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const updateScale = () => {
            const scaleValue = isMobile ? [3, 3, 3] : [2.5, 2.5, 2.5];
            setScale(scaleValue);
        };

        // Add event listener for resize
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });

        // Update scale initially and whenever isMobile changes
        updateScale();

        // Cleanup
        return () => window.removeEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    }, [isMobile]); // Rerun this effect if isMobile changes
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= 0.001;
        }
    });

    return (
        <>
            <mesh ref={meshRef} scale={scale}>
                <sphereGeometry args={[10, 32, 16]} />
                <meshStandardMaterial 
                    map={colorMap}
                    normalScale={[0.1, 0.1]}
                />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
            </mesh>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 3, 5]} intensity={1.5} />
        </>
    );
};

const Earth3D = () => {
  const [canvasHeight, setCanvasHeight] = useState('50vh'); // Default to 50% of the viewport height
  useEffect(() => {
    // Update the canvas height based on window size
    const handleResize = () => {
      if (window.innerWidth < 768) { // Mobile
        setCanvasHeight('40vh'); // Smaller height for mobile
      } else { // Desktop and Tablet
        setCanvasHeight('70vh'); // Larger height for desktop/tablet
      }
    };

    // Set the initial canvas height
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means it only runs on mount and unmount

  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center align-items-center" style={{ height: canvasHeight }}>
        <Col className="text-center" style={{ width: '100%', height: '100%', maxHeight: '80vh' }}>
          <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 50] }}>
            <Earth />
          </Canvas>
        </Col>
      </Row>
    </Container>
  );
};


export default Earth3D;
