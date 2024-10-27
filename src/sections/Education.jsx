import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants/index.js'
import { OrbitControls, Stars } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader.jsx'
import Rocket from '../components/Rocket.jsx'

function Education () {

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Education</h3>
      </div>

      <div className="work-container">
        <div className="work-canvas">
          <Canvas>
            <ambientLight intensity={0.8}/>
            <spotLight
                       position={[0,5,5]}
                       angle={0.3}
                       penumbra={1}
                       intensity={5}/>
            <directionalLight position={[10,10,10]} intensity={1}/>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>

            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={1000} // Amount of stars (default=5000)
              factor={6} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)
            />

            <Suspense fallback={<CanvasLoader/>}>
              <Rocket scale={3} position={[0,-4,0]}/>
            </Suspense>

          </Canvas>
        </div>

        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map(
              ({id, name, pos, icon, duration, title, animation}) => (
                <div key={id} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img src={icon} alt="logo" className="w-full h-full"/>
                    </div>
                    <div className="work-content_bar"/>
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{name}</p>
                    <p className="text-sm mb-5 text-white-500">{pos} | {duration}</p>
                    <p className="text-white-500 group-hover:text-white transition ease-in-out duration-500">
                      {title}
                    </p>
                  </div>

                </div>
              ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Education
