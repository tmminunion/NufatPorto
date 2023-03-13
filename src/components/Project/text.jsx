import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Text,useGLTF } from '@react-three/drei'
import ObjectFromBlender from '../../Util/Getobjek'
import Gettext from '@/Util/GetText'

export default function App() {
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 0, 15], fov: 38 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
      <ambientLight />
      <Gettext text='Saya adalah Nunu Fatulah!' position={[3.5, 5, -1]} fontSize={0.8} rotation={0.01} color='red' />
      <Gettext text='Jangan Pernah Mencoba Untuk Menyerah' position={[5, 3.5, -1]} fontSize={0.5} rotation={0.01} color='gold' />
      <Gettext text='Dan jangan pernah menyerah Untuk Mencoba' position={[6, 3, -1]} fontSize={0.5} rotation={0.01} color='gold' />
      <Gettext text='Ngopi Pak Haji ...!' position={[2.5, 0, -1]} fontSize={0.5} rotation={0.01} color='red' />
      

      <pointLight position={[10, 10, 10]} />
      <ObjectFromBlender
        files={'./model/mac-draco.glb'}
        position={[-4, -0.25, -1.5]}
        rotation={[0, 0, 0]}
        scale={0.8}
      />
    </Canvas>
  )
}




// import React, { useRef, useState, useEffect } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Text } from '@react-three/drei'

// export default function App() {
//   const [hovered, setHovered] = useState(false)
//   const textRef = useRef()

//   useEffect(() => {
//     textRef.current.rotation.y += 0.01
//   }, [])

//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Text
//         ref={textRef}
//         position={[0, 0, 0]}
//         rotation={[0, 0, 0]}
//         fontSize={1}
//         color={hovered ? 'hotpink' : 'white'}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         Hello, World!
//       </Text>
//     </Canvas>
//   )
// }


