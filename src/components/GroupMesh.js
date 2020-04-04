import React from 'react'
import { Group, BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three'

const GroupMesh = () => {
	// plain JS
	// const group = new Group()
	// const geo = new BoxBufferGeometry(2, 2, 2)
	// const mat = new MeshStandardMaterial({ color: 0x1fbeca })
	// const mesh = new Mesh(geo, mat)
	// group.position.set(0, 0.1, 0.1)
	// group.add(mesh)
	// scene.add(group)

	// declarative
	return (
		<group position={[0, 0.1, 0.1]}>
			<mesh>
				<boxBufferGeometry attach='geometry' args={[1, 0.5, 3]} />
				<meshStandardMaterial attach='material' color={0xf95b3c} />
			</mesh>
		</group>
	)
	// we don't need to add to the scene because since it's a child of the canvas it's automatically added
}

export default GroupMesh
