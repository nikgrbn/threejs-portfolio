import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function Rocket(props) {
  const group = useRef()
  const { nodes, materials,
    animations } = useGLTF('/models/rocket/Rocket3.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['NaveR'];
    if (action) {
      action.reset();
      action.setEffectiveTimeScale(0.75);
      action.play();
    }
    return () => {
      if (action) {
        action.stop();
      }
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="NaveRed"
            geometry={nodes.NaveRed.geometry}
            material={materials['Material.003']}
            skeleton={nodes.NaveRed.skeleton}
          />
          <primitive object={nodes.Corpo} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rocket/Rocket3.glb')

export default Rocket