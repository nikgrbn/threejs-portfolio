import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Book from '../components/Book.jsx'

function Hero () {
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10
    }
  })

  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const size = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen flex flex-col relative">
      <div className="w-full mx-auto flex flex-col
      sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nikita
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building & Improving things
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
            <Leva/>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
            <HackerRoom
              scale={size.deskScale}
              position={size.deskPosition}
              rotation={[0.2, 2.8, 0]}

              // Liva panel
              // position={[x.positionX, x.positionY, x.positionZ]}
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              // scale={[x.scale, x.scale, x.scale]}
            />

            <group>
              <Target position={size.targetPosition}/>
              <ReactLogo position={size.reactLogoPosition}/>
              <Cube position={size.cubePosition}/>
              <Book
                position={size.bookPosition}
                rotation={size.bookRotation}
                scale={size.bookScale}
              />
            </group>

            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero
