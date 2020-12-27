import React from 'react'
import { Canvas } from 'react-three-fiber'
import TransformingBox from '../TransformingBox'
// import Box from '../Box'
// import GroupMesh from '../GroupMesh'

const Root = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <TransformingBox position={[0, -1, 0]} />
      {/* <Box position={[-4, -1, 1]} /> */}
      {/* <GroupMesh position={[3, 0, -5]} /> */}
    </Canvas>
  )
}

export default Root
