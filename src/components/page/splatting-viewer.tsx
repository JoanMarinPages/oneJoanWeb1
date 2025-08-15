"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF, ScrollControls, useScroll } from '@react-three/drei'

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path)
  const group = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame((state, delta) => {
    const offset = 1 - scroll.offset
    state.camera.position.set(Math.sin(offset) * -5, Math.atan(offset * Math.PI * 2) * 2, Math.cos((offset * Math.PI) / 2) * 5)
    state.camera.lookAt(0, 0, 0)
    
    if (group.current) {
       group.current.rotation.y = offset * Math.PI * 2
    }
  })

  return <primitive object={scene} ref={group}/>
}

useGLTF.preload('/assets/models/shoe.glb')
useGLTF.preload('/assets/models/headphone.glb')
useGLTF.preload('/assets/models/vr-headset.glb')

export function SplattingViewer({ path }: { path: string }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', touchAction: 'none' }}>
      <color attach="background" args={['#222631']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <ScrollControls pages={3} damping={0.25}>
        <Stage environment="city" intensity={0.6}>
            <Model path={path} />
        </Stage>
      </ScrollControls>
    </Canvas>
  )
}
