import React from 'react'

function About () {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext">Hi, I'm Nikita</p>
              <p className="grid-subtext">Since childhood programming was my passion.
                I'm always ready to learn and challenge myself.
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
