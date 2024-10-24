import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function Book (props) {
  const { nodes, materials } = useGLTF('models/book.glb')
  const texture = useTexture('textures/cp-systems.jpg')

  const bookRef = useRef()
  useGSAP(() => {
    gsap
    .to(bookRef.current.position, {
      y: bookRef.current.position.y + 0.5,
      x: bookRef.current.position.x + 0.5,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
      })
  })

  useGSAP(() => {
    gsap
    .to(bookRef.current.rotation, {
      y: `-=${Math.PI * 2/10}`,
      x: `+=${Math.PI * 2/10}`,
      z: `-=${Math.PI * 2/10}`,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      duration: 5.5,
      stagger: {
        each: 0.15,
      },
    });
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={10} ref={bookRef}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        >
          <Decal
            debug={false}
            position={[0.005, 0.008, 0]}
            rotation={[0, 0, 0]}
            scale={[0.2, 0.25, 0.2]}
            polygonOffset
            polygonOffsetFactor={-1}>
            <meshBasicMaterial map={texture} polygonOffset polygonOffsetFactor={-1}/>
          </Decal>
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/book.glb')

export default Book