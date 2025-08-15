
"use client"

import React from 'react'
import { Canvas, extend, Object3DNode } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";

// Make LumaSplatsThree available to R3F
extend( { LumaSplats: LumaSplatsThree } );

// For typeScript support:
declare module '@react-three/fiber' {
  interface ThreeElements {
    lumaSplats: Object3DNode<LumaSplatsThree, typeof LumaSplatsThree>
  }
}

export function SplattingViewer() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 4] }} style={{ touchAction: 'none' }}>
        <lumaSplats
            semanticsMask={LumaSplatsSemantics.FOREGROUND}
            source='https://lumalabs.ai/capture/822bac8d-70d6-404e-aaae-f89f46672c67'
            scale={1.5}
        />
      <OrbitControls autoRotate />
    </Canvas>
  )
}
