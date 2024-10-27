import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Volleyball(props) {
  const { nodes, materials } = useGLTF('/models/volleyball/scene.gltf')

  const ballRef = useRef();
  useGSAP(() => {
    gsap
    .timeline({
      repeat: -1,
      repeatDelay: 10,
    })
    .to(
      ballRef.current.rotation,
      {
        y: `+=${Math.PI * 2}`,
        duration: 5,
        repeat: -1,
        ease: 'elastic.inOut'
      }
    )
    .to(
      ballRef.current.position,
      {
        z: `+=0.5`,
        y: `-=0.5`,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'elastic.inOut'
      }
    )
  })

  return (
    <group {...props} dispose={null} ref={ballRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.003']}
      />
    </group>
  )
}

useGLTF.preload('/models/volleyball/scene.gltf')

export default Volleyball