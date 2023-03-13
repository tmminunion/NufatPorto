import { useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial, OrbitControls, Preload } from '@react-three/drei'
import { Html } from "@react-three/drei"
import Background from '../Background/sky'
export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
      <Canvas camera={{ position: [0, -2, 15.5] }} dpr={[1, 1.5]} gl={{ antialias: false }} >
          
        <Background />
       
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
      <Html distanceFactor={30}>
        <div class="content">
          hello <br />
          world
        </div>
      </Html>
    </mesh>
      <Preload all />
      <OrbitControls />
    </Canvas> 
  )
}
