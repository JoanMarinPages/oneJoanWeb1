"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Splat } from '@react-three/drei'

export function SplattingViewer() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 4] }} style={{ touchAction: 'none' }}>
        <Splat
            src='https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67/splat'
            scale={1.5}
        />
      <OrbitControls autoRotate />
    </Canvas>
  )
}
