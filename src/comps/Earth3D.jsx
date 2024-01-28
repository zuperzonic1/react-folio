
import React  from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import earthText from '../images/textures/earth.jpg';
// import earthMap from '../images/textures/earth_map.jpg';


const Earth = () => {
    const [colorMap] = useLoader(THREE.TextureLoader, [earthText]);
    const meshRef = React.useRef(); // Create a ref for the mesh
  
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y -= 0.001;
      }
    });
  
    return (
        <>
          <mesh ref={meshRef} scale={[2, 2, 2]}> {/* Attach the ref to the mesh */}
            <sphereGeometry args={[10, 32, 16]} />
            <meshStandardMaterial 
              map={colorMap}
              normalScale={[0.1, 0.1]}
            />
            <OrbitControls enableZoom={true} enablePan={true} />
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

