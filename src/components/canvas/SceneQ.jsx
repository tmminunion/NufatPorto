import { Canvas,useLoader } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Navbar from '../Navbar/Navbar'
import React from 'react'
import { a } from '@react-spring/web'
import Background from '../Background/sky'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Sidebar from '../Navbar/Sidebar'

export default function Scene({children, ...props }) {
console.log(props)
  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
       
     <Sidebar />
        <Canvas {...props} camera={{ position: [0, -2, 15.5] }} dpr={[1, 1.5]} gl={{ antialias: false }} >
          
        <Background />
       
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas> 
 
        </div>
    </>
  )
}


