import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Hero from "./Hero";
import CanvasLoader from "../Loader";


function Computers ({ isMobile, computerModel }) {
  // const computer = useGLTF("./model/mac-draco.glb");
const computer = useGLTF(computerModel);

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
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -2, -2.2] : [0, -0.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

function ComputersCanvas (){
  const [isMobile, setIsMobile] = useState(false);


const [computerModels, setComputerModels] = useState([
    { name: "Mac", url: "./model/mac-draco.glb" },
    { name: "PC", url: "./desktop_pc/scene.gltf" },
  { name: "Mac", url: "./model/mac-draco.glb" },
    { name: "PC", url: "./desktop_pc/scene.gltf" },
  ]);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

const computerRef = useRef();

 const handleModelChange = () => {
    // Determine the next model index to use
    const nextModelIndex = (selectedModelIndex + 1) % computerModels.length;

    // Update the selected model index
    setSelectedModelIndex(nextModelIndex);
  };

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
     <button onClick={handleModelChange}>Change Model</button>
    
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 20, 15], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
         
          <Computers isMobile={isMobile} computerModel={computerModels[selectedModelIndex].url} />
      </Suspense>
  <mesh          ref={computerRef}
          onClick={handleModelChange}
        />
      <Preload all />
      </Canvas><Hero />
    
    </>
  );
};

export default ComputersCanvas;
