import React from 'react'
import Globe from 'react-globe.gl'
import MyGlobe from '../components/MyGlobe.jsx'
import Button from '../components/Button.jsx'
import Book from '../components/Book.jsx'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

function About () {
  const isSmall = useMediaQuery({ maxWidth: 768 })

  return (
    <section className="c-space my-20">
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
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext"> Tech Stack</p>
              <p className="grid-subtext"> I specialize in full stack development
                of web and native applications.
                In addition, I have experience in design tools like Photoshop, Blender and Figma.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center">
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

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/*<img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>*/}
            <Canvas>
              <Float floatIntensity={1}>
                <Book
                  texturePath = 'textures/cp-systems.jpg'
                  isOnFront={true}
                  position={isSmall ? [-1, 0, 0] : [-2, 0, 0]} scale={isSmall ? 18: 23} rotation={[-Math.PI/40, -Math.PI/20, 0]}/>
              </Float>
              <Float floatIntensity={0.1}>
                <Book
                  texturePath = 'textures/bulgakov.jpg'
                  isOnFront={false}
                  position={isSmall ? [3, 0, -5] : [4, 0, -5]} scale={isSmall ? 18: 23} rotation={[-Math.PI/3, 0, -Math.PI/3]}/>
              </Float>
            </Canvas>
            <div>
              <p className="grid-headtext">
                Books! Books! Books!
              </p>
              <p className="grid-subtext">
                Reading is my favorite hobby.
                You can check
                <a href='https://www.goodreads.com/user/show/155514694-nikita-grebenchuk'
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



      </div>
    </section>
  )
}

export default About
