import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import MyGlobe from '../components/MyGlobe.jsx'
import Button from '../components/Button.jsx'
import Book from '../components/Book.jsx'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import Swarm from '../components/Swarm.jsx'
import Volleyball from '../components/Volleyball.jsx'
import { Leva, useControls } from 'leva'

function About () {
  const isSmall = useMediaQuery({ maxWidth: 768 })
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(
      'Rmaps123@gmail.com'
    )
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  // const x = useControls('Volleyball', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10
  //   }
  // })

return (
  <section className="c-space my-20" id="about">
    <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5">

      <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <img src="/assets/grid1-m2.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
          <div>
            <p className="grid-headtext">Hi, I'm Nikita</p>
            <p className="grid-subtext">Since childhood programming was my passion.
              I always ready to learn and create new stuff.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <div className="rounded-3xl w-full h-fit flex justify-center items-center">
            <MyGlobe/>
          </div>
          <div>
            <p className="grid-headtext">
              Based in Netanya | Ramat-Gan
            </p>
            <p className="grid-subtext">
              Living in Israel I speak fluent English, Hebrew and Russian.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 xl:row-span-4">
        <div className="grid-container">
          <img src="/assets/grid2-me.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain sm:h[326px]"/>
          <div>
            <p className="grid-headtext"> Tech Stack</p>
            <p className="grid-subtext"> I specialize in full stack development
              of web and native applications.
              Proficient in Java, Python and JS.
              In addition, I have experience in design tools like Photoshop, Blender and Figma.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 xl:row-span-3">
        <div className="grid-container">
          {/*<img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>*/}
          <Canvas>
            <directionalLight intensity={2} scale={1}/>
            <ambientLight intensity={0.8} scale={0.1}/>
            <Volleyball
              // position={[x.positionX, x.positionY, x.positionZ]}
              // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              // scale={[x.scale, x.scale, x.scale]}

              position={isSmall ? [2.1, -0.7, 0] : isMedium ? [0.5, -0.3, -2.2] : [4.1, -0.7, 0]}
              rotation={[6.4, 0.2, -4.0]}
              scale={isSmall ? 0.9 : isMedium ? 1.2 : 1}
            />

            <Book
              texturePath="textures/cp-systems.jpg"
              isOnFront={true}
              position={isSmall ? [-2, 0, 0] : isMedium ? [-1.5, 0, 0] : [-2, 0, 0]}
              scale={isSmall ? 18 : isMedium ? 20 : 23}
              rotation={[-Math.PI / 40, -Math.PI / 20, 0]}/>
            <Book
              texturePath="textures/bulgakov.jpg"
              isOnFront={false}
              position={isSmall ? [1, 0, -5] : [4, 0, -5]}
              scale={isSmall ? 18 : isMedium ? 20 : 23}
              rotation={[-Math.PI / 3, 0, -Math.PI / 3]}/>
          </Canvas>
          <div>
            <p className="grid-headtext">
              Books! Volley! Books!
            </p>
            <p className="grid-subtext">
              Playing volleyball and reading are my hobbies.
              You can check
              <a href="https://www.goodreads.com/user/show/155514694-nikita-grebenchuk"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-500">
                {' '}my latest book reviews{' '}
              </a>
              on Goodreads.com!
            </p>
          </div>
        </div>
      </div>

      <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container">
          <img src="assets/grid4.png"
               alt="grid-4"
               className="w-full h-fit object-cover sm:object-top sm:h-[266px]"/>
          <div className="space-y-2">
            <p className="grid-subtext text-center">
              Contact me
            </p>
            <div className="copy-container" onClick={handleCopy}>
              <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="copy-icon"/>
              <p className="text-xs font-medium text-gray_gradient text-white">Rmaps123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
)
}

export default About
