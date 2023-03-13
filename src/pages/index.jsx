import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import { useRef, useState, useMemo, useEffect } from 'react'
import randomWord from 'random-words'

import { Text, TrackballControls, OrbitControls, Preload} from '@react-three/drei'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import Background from '@/components/Background/sky'
import Hero from '@/components/Hero/Hero'
import ComputersCanvas from '@/components/Hero/Computer'

export default function Page(props) {
  return (
    <>
    
    </>
  )
}



Page.canvas = (props) => <ComputersCanvas scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}


