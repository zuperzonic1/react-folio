
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import earthText from '../assets/images/textures/earth.jpg';

const Earth = () => {
    const [colorMap] = useLoader(THREE.TextureLoader, [earthText]);
    const meshRef = React.useRef(); // Create a ref for the mesh
    const [scale, setScale] = useState([2, 2, 2]); // State for scale

    // Function to update scale based on window width
    const updateScale = () => {
      const width = window.innerWidth;
      // Adjust these values based on your specific media query needs
      if (width < 768) {
        setScale([2.8, 2.8, 2.8]);
      } else {
        setScale([1.9, 1.9, 1.9]);
      }
    };

    useEffect(() => {
      window.addEventListener('resize', updateScale);
      // Set the initial scale
      updateScale();

      // Cleanup
      return () => window.removeEventListener('resize', updateScale);
    }, []);

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
            <OrbitControls enableZoom={false} enablePan={true} />
          </mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 3, 5]} intensity={1.5} />
        </>
    );
};

const Earth3D = () => {
  return (
    <Container className="containerHeightIncrease">
      <Row className="justify-content-center">
      <Col md={8} className="text-center canvas-container">
  <Canvas camera={{ position: [0, 0, 50] }}>
    <Earth />
  </Canvas>
</Col>
      </Row>
    </Container>
  );
};

export default Earth3D;

