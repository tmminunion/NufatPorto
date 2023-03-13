import * as THREE from 'three'
import { useMemo } from 'react'
import { Canvas,useLoader } from '@react-three/fiber'
import Sidebar from '../Navbar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { ContactShadows, Environment, Float, Html, OrbitControls, Preload} from '@react-three/drei'
import { MathUtils } from 'three'
import Background from '../Background/sky'
const material = new THREE.MeshStandardMaterial()
const geometries = [
  { geometry: new THREE.TetrahedronBufferGeometry(2) },
  { geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.IcosahedronBufferGeometry(2) },
  { geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(2) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5) }
]

function Geometries() {
  const n = 40
  const randProps = useMemo(() => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]), [])
  return randProps.map((prop) => {
    return (
      <Float>
        <mesh
          scale={MathUtils.randFloat(0.1, 0.1)}
          position={[MathUtils.randFloat(-8, 8), MathUtils.randFloat(-8, 8), MathUtils.randFloat(-8, 8)]}
          geometry={prop.geometry}
          material={material}
        />
      </Float>
    )
  })
}

export default function App(  ) {
  return (
    <>
         <Sidebar />
        <Canvas  camera={{ position: [0, -2, 15.5] }} dpr={[1, 1.5]} gl={{ antialias: false }} >
          
        <Background />
       
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <hemisphereLight groundColor="red" />
      <Float floatIntensity={0} rotationIntensity={0.1}>
        <Html castShadow receiveShadow transform style={{ marginLeft: '50%', transform: 'translateX(-50%)' }}>
          <iframe title="embed" width={1920} height={1280} src="/porto/index.html" frameBorder={0} />
        </Html>
      </Float>
      <Geometries />
       
      <Environment background preset="dawn" blur={0.8} />
      <ContactShadows position={[0, -13, 0]} opacity={0.7} scale={40} blur={1} />
        <OrbitControls />
           <Preload all />
      <OrbitControls />
    </Canvas> 
   </>
  )
}
export async function getStaticProps() {
  return { props: { title: 'Portopolio', sidebar:true } }
}
