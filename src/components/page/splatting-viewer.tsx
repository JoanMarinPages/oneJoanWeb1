"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

// Este componente contiene todo el código de Three.js
// y se carga de forma dinámica en splatting.tsx

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} />
}

useGLTF.preload('/assets/models/shoe.glb')
useGLTF.preload('/assets/models/headphone.glb')
useGLTF.preload('/assets/models/vr-headset.glb')

export function SplattingViewer({ path }: { path: string }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ touchAction: 'none' }}>
      <color attach="background" args={['#222631']} />
      <Stage environment="city" intensity={0.6}>
        <Model path={path} />
      </Stage>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  )
}
