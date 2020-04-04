import React from 'react'
import { Canvas } from 'react-three-fiber'
import Box from '../Box'
import GroupMesh from '../GroupMesh'

const Root = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-2, 0, 1]} />
			<Box position={[-4, 0, 0]} />
			<Box position={[2, 0, 3]} />
			<GroupMesh />
		</Canvas>
	)
}

export default Root
