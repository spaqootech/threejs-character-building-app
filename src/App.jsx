import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function App() {
  return (
    <main className='flex-1 h-[100vh]'>
      <Canvas camera={{ position: [3, 3, 5] }}>
        <OrbitControls/>
        <mesh>
          <shadowMaterial/>
          <boxGeometry args={[3, 3, 3]}/>
          <meshNormalMaterial/>
        </mesh>
      </Canvas>
    </main>
  )
}

export default App