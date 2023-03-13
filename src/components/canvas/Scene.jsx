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
       
   
      {children}
    
        </div>
    </>
  )
}


