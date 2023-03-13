
import { OrbitControls,Text,useGLTF } from '@react-three/drei'
function ObjectFromBlender({ files, position, rotation, scale }) {
  const file = useGLTF(files);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={file.scene}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </mesh>
  );
}

export default ObjectFromBlender;
