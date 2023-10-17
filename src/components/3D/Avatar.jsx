import React from 'react'
import { useGLTF } from '@react-three/drei'

const Avatar = (props) =>{
  const { nodes, materials } = useGLTF('models/shihab_face.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} position={[0, 0.707, 0]} rotation={[-1.322, 0, 0]} />
    </group>
  )
}

export default Avatar;

useGLTF.preload('models/shihab_face.glb');
