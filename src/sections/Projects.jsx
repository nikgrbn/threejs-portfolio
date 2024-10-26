import React, { Suspense, useEffect, useRef, useState } from 'react'
import { myProjects } from '../constants/index.js'
import { Canvas, useLoader } from '@react-three/fiber'
import { Center, Float, OrbitControls, Text3D, useMatcapTexture, useTexture } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader.jsx'
import Smartphone from '../components/Smartphone.jsx'
import { TextureLoader } from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import Swarm from '../components/Swarm.jsx'

const projectCount = myProjects.length

function Projects () {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]
  const matcapTexture = useLoader(TextureLoader, '/textures/cube.png');
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        if (prevIndex === 0) {
          return projectCount - 1
        } else {
          return prevIndex - 1
        }
      } else {
        if (prevIndex === projectCount - 1) {
          return 0
        } else {
          return prevIndex + 1
        }
      }
    })
  }

  return (
    <section className="c-space my-20">
      <p className="head-text">
        My Projects
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">

        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              <img src={`https://skillicons.dev/icons?i=${
                currentProject.tags.map((tag) => tag.name).join(',')
              }&theme=dark`} alt="git"
                   className="w-auto h-10"/>
            </div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href}
               target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"/>
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4"/>
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4"/>
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={2}/>
            <directionalLight position={[10, 10, 5]}/>
            <Center>
              <Swarm count={150} />
              <Suspense fallback={<CanvasLoader/>}>
                <group scale={ isMobile ? 0.8 : 0.8} position={isMobile ? [1, 0 ,0] : [1, 0, 0]} rotation={[0, -0.1, 0]}>
                  {/*<DemoComputer texture={currentProject.texture}/>*/}
                  <Smartphone texture={currentProject.texture}/>
                </group>
                <group scale={isMobile ? 0.4: 0.4} position={isMobile ? [-2.4, 0.7, 1.3] : [-2.2, 0.7, 1.3]} rotation={[0, 0.4, 0]}>
                  <Float speed={1}>
                    <Text3D
                      font="/assets/Lato_Regular.json"
                      position={[1.1, 0, 0]}
                      bevelEnabled={true}
                      bevelSize={0.08}
                      bevelThickness={0.03}
                      height={1}
                      lineHeight={0.9}
                      curveSegments={24}
                      brevelSegments={1}
                    >
                      <meshMatcapMaterial matcap={matcapTexture}/>
                      {currentProject.upText}
                    </Text3D>

                    <Text3D
                      font="/assets/Lato_Regular.json"
                      position={[0, -2, 0]}
                      bevelEnabled={true}
                      bevelSize={0.08}
                      bevelThickness={0.03}
                      height={2}
                      lineHeight={0.9}
                      curveSegments={24}
                      brevelSegments={1}
                    >
                      <meshMatcapMaterial matcap={matcapTexture}/>
                      {currentProject.downText}
                    </Text3D>
                  </Float>

                </group>

              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
          </Canvas>
        </div>

      </div>
    </section>
  )
}

export default Projects
