import React from 'react'

function Button ({name, isBeam = false, containerClass}) {
  return (
    <button className={`btn $${containerClass}`}>
      {name}
    </button>
  )
}

export default Button
