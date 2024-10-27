import React, { useRef, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import PropTypes from 'prop-types'



export function Book (props) {
  const { nodes, materials } = useGLTF('models/book.glb')

  const texture = useTexture(props.texturePath)
  const paperTexture = useTexture('textures/paper.png')

  const bookRef = useRef()
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={1} ref={bookRef}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        >
          <Decal
            debug={false}
            position={props.texturePath === 'textures/bulgakov.jpg' ?
              [0, -0.010, 0] : [0.005, 0.008, 0]}
            rotation={props.texturePath === 'textures/bulgakov.jpg' ?
              [0, 0, 0] : [0, 0, 0]}
            scale={
              props.texturePath === 'textures/bulgakov.jpg' ?
                [0.18, 0.25, 0.2] : [0.2, 0.25, 0.2]}
            polygonOffset
            polygonOffsetFactor={-1}>
            <meshBasicMaterial map={texture} polygonOffset polygonOffsetFactor={-1}/>
          </Decal>
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
        >
          <meshMatcapMaterial map={paperTexture}/>
        </mesh>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        >
          <meshBasicMaterial color="#521515"/>
        </mesh>

      </group>
    </group>
  )
}

Book.propTypes = {
  texturePath: PropTypes.string.isRequired,
  isOnFront: PropTypes.bool.isRequired
};

useGLTF.preload('models/book.glb')

export default Book