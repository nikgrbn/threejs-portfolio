/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { Decal, useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Smartphone(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF('/models/smartphone.glb')
  const camTexture = useTexture('textures/rings.png');
  const bodyTexture = useTexture('textures/cube.png');
  const txt = useTexture('textures/bulgakov.jpg')
  const displayTexture = useVideoTexture(props.texture ? props.texture : '/textures/project/project2.mp4');

  useEffect(() => {
    if (displayTexture) {
      displayTexture.flipY = false;
    }
  }, [displayTexture]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [displayTexture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={40} position={[0, 0.074, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Body}>
          <meshMatcapMaterial matcap={bodyTexture} toneMapped={false}/>
        </mesh>
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials.Display}
        >
          <Decal
            debug={true}
            position={[0, 0.004, 0]}
            rotation={[Math.PI/2, 0, 0]}
            scale={[0.071, 0.13, 0.1]}
          >
            <meshBasicMaterial map={displayTexture} polygonOffset polygonOffsetFactor={-1} toneMapped={false}/>
          </Decal>

          {/*<meshBasicMaterial map={displayTexture} toneMapped={false}/>*/}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.metal}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Body}>
          <meshMatcapMaterial matcap={bodyTexture} toneMapped={false}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Body}
          position={[0.019, -0.005, -0.065]}
          scale={[1.314, 1, 1.199]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Glass}
            position={[0, -0.001, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.camara}
          position={[-0.011, 0.003, -0.07]}
          scale={-0.002}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Glass}
            position={[0, -0.585, -0.003]}
          />
          <meshMatcapMaterial matcap={camTexture} toneMapped={false}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.camara}
          position={[0.023, -0.005, -0.065]}
          scale={[0.002, 0, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.camara}
          position={[0.015, -0.005, -0.065]}
          scale={[0.002, 0, 0.002]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_Logo.geometry}
          material={materials['MI Logo']}
          position={[0, -0.004, 0.048]}
          rotation={[0, 0, -Math.PI]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/smartphone.glb')

export default Smartphone