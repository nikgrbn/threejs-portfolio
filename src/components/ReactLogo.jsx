
import { Float, useGLTF } from '@react-three/drei'

function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float dispose={null} floatIntensity={1}>
      <group position={[8,8,0]} {...props} scale={0.4} rotation={[0, Math.PI/1.3, 0]}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo

