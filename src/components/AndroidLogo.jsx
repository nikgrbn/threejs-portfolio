import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function AndroidLogo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/android.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['ArmatureAction.001'];
    if (action) {
      action.reset();
      action.setEffectiveTimeScale(0.25); // Set to 0.5 to slow down the speed by half
      action.play();
    }

    return () => {
      if (action) {
        action.stop();
      }
    }
  }, [actions])

  useGSAP(() => {
    gsap
    .to(group.current.rotation, {
      y: group.current.rotation.y + 0.5,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'expo.inOut'
    })
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 0, 0]}>
          <primitive object={nodes.Back} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/android.glb')

export default AndroidLogo
