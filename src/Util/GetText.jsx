import { OrbitControls, Text, useGLTF } from '@react-three/drei'
import React, { useRef, useEffect, useState } from 'react'

export default function Gettext({ text, fontSize, rotation, position, color }) {
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (textRef.current) {
      textRef.current.rotation.y += rotation
    }
  }, [rotation])

  return (
    <Text
      ref={textRef}
      position={position}
      rotation={[0, 0, 0]}
      fontSize={fontSize}
      color={hovered ?'white' : color  }
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {text}
    </Text>
  )
}

