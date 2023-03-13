import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import { useRef, useState, useMemo, useEffect } from 'react'
import randomWord from 'random-words'

import { Text, TrackballControls, OrbitControls, Preload} from '@react-three/drei'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import Background from '@/components/Background/sky'

export default function Page(props) {
  console.log('run');
    fetch('http://nufat.id/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        let i = 0;
        data.forEach(item => {
          localStorage.setItem(`datapetc_${i}`, item.title.rendered);
          i++;
        });
       
      });
  return (
    <>
     
    </>
  )
}



Page.canvas = (props) => <App scale={0.5} route='/blob' position-y={-1} />

export async function getStaticProps() {


  return { props: { title: 'Index' } }
}




function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}
function getJUDUL(id) {
   const kata = localStorage.getItem(`datapetc_${id}`)
  const words = kata.split(' ')
  const truncated = words.slice(0, 3).join(' ')
  return truncated
}
function Cloud({ count = 4, radius = 50 }) {
  // Create a count x count random words with spherical distribution



  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),getJUDUL(j)])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}


export  function App() {
  return (
  <>        <Canvas camera={{ position: [0, -2, 15.5] }} dpr={[1, 1.5]} gl={{ antialias: false }} >
          
        <Background />
       
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={10} radius={40} />
      <TrackballControls />
        <Preload all />
      <OrbitControls />
    </Canvas> 
   </>
  )
}
