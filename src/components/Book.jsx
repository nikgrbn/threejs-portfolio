import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Book(props) {
  const { nodes, materials } = useGLTF('models/book.glb')

  const texture = useTexture('textures/cp-systems.jpg');


  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={3}>
        <mesh
          geometry={nodes.Architexture_0.geometry}
          material={materials.Architexture}
        >
          <Decal
            position={[0.42, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.86,1,1]}
            polygonOffset
            polygonOffsetFactor={-1}>
            <meshBasicMaterial map={texture} polygonOffset polygonOffsetFactor={-1}/>
          </Decal>
        </mesh>
        <mesh
          geometry={nodes.Architexture_1.geometry}
          material={materials.Bookpage}
        >
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('models/book.glb')

export default Book

