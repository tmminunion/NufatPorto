import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MenuItem(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const material = new THREE.MeshBasicMaterial({ color: props.color });
  const geometry = new THREE.BoxGeometry(0.2, 1.5, 0.1);

  return (
    <mesh ref={mesh} position={props.position} onClick={props.onClick}>
      <boxGeometry args={[0.2, 1.5, 0.1]} />
      <meshBasicMaterial color={props.color} />
    </mesh>
  );
}
function App() {
  const handleClick = (event) => {
    console.log('Menu clicked:', event.target);
  };

  return (
    <Canvas>
       <Background />
      <MenuItem position={[-3, 0, 0]} color={0xff0000} onClick={handleClick} />
      <MenuItem position={[-1, 0, 0]} color={0x00ff00} onClick={handleClick} />
      <MenuItem position={[1, 0, 0]} color={0x0000ff} onClick={handleClick} />
      <MenuItem position={[3, 0, 0]} color={0xff00ff} onClick={handleClick} />
    </Canvas>
  );
}
export default App;


function Background() {
  const particles = useRef();

  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * 800 - 400;
    const y = Math.random() * 800 - 400;
    const z = Math.random() * 800 - 400;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    colors[i * 3] = Math.random();
    colors[i * 3 + 1] = Math.random();
    colors[i * 3 + 2] = Math.random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({ size: 4, vertexColors: true });

  useFrame(() => {
    particles.current.rotation.x += 0.001;
    particles.current.rotation.y += 0.001;
  });

  return <points ref={particles} geometry={geometry} material={material} />;
}
