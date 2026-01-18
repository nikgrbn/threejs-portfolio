import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function Target(props) {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
  })

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.2}>
      {/* The Stand (Pole) */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="#888" roughness={0.5} />
      </mesh>
      
      {/* The Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* The Target Board */}
      <mesh position={[0, 1.8, 0.06]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
        <meshStandardMaterial color="#ff5555" />
        
        {/* White Inner Circle */}
        <mesh position={[0, -0.03, 0]}>
           <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
           <meshStandardMaterial color="white" />
        </mesh>

        {/* Red Center */}
        <mesh position={[0, -0.04, 0]}>
           <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
           <meshStandardMaterial color="#ff5555" />
        </mesh>
      </mesh>
    </group>
  )
}

export default Target
