import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';

function Image({ url, position }) {
  const texture = useLoader(THREE.TextureLoader, url);
  const [zoomed, setZoomed] = useState(false);

  const meshRef = useRef();

  const handleClick = () => {
    setZoomed(!zoomed);
  };

  useFrame(({ camera }) => {
    const mesh = meshRef.current;

    if (zoomed) {
      camera.position.lerp(mesh.position.clone().add(new THREE.Vector3(0, 0, 3)), 0.1);
    } else {
      camera.position.lerp(new THREE.Vector3(0, 0, 5), 0.1);
    }
  });

  return (
    <mesh position={position} onClick={handleClick} ref={meshRef}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function App() {
  const cameraRef = useRef();

  return (
    <Canvas>
      <OrbitControls enableDamping={true} enableZoom={false} ref={cameraRef} />
      <Image url="https://picsum.photos/200/300" position={[-2, -2, 0]} />
      <Image url="https://picsum.photos/300/200" position={[-1, -1, 0]} />
      <Image url="https://picsum.photos/400/400" position={[0, 0, 0]} />
      <Image url="https://picsum.photos/200/200" position={[1, 1, 1]} />
      <Image url="https://picsum.photos/300/300" position={[2, 2, 0]} />
    </Canvas>
  );
}

export default App;
