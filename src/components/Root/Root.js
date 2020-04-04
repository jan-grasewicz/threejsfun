import React from 'react'
import { Canvas } from 'react-three-fiber'
import Box from '../Box'

const Root = () => {
	return (
		<Canvas pixelRatio={0.75}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-2, 0, 1]} />
			<Box position={[0, 0, 0]} />
			<Box position={[2, 0, 3]} />
		</Canvas>
	)
}

export default Root
