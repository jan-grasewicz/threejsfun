import React, { useRef, useState, useCallback, useEffect } from 'react'
// import { Group, BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three'
import { useFrame } from 'react-three-fiber'

const GroupMesh = ({ ...props }) => {
	// plain JS
	// const group = new Group()
	// const geo = new BoxBufferGeometry(2, 2, 2)
	// const mat = new MeshStandardMaterial({ color: 0x1fbeca })
	// const mesh = new Mesh(geo, mat)
	// group.position.set(0, 0.1, 0.1)
	// group.add(mesh)
	// scene.add(group)

	const meshRef = useRef()

	const [isHovered, setIsHovered] = useState(false)
	const onHover = useCallback(
		(e, value) => {
			e.stopPropagation() // stop it at the first intersection
			setIsHovered(value)
		},
		[setIsHovered],
	)

	const [isActive, setIsActive] = useState(false)
	const onClick = useCallback(
		(e) => {
			e.stopPropagation()
			setIsActive(!isActive)
		},
		[isActive],
	)

	const time = useRef(0)
	// const isActiveRef = useRef(isActive)
	// useEffect(() => {
	// 	isActiveRef.current = isActive
	// }, [isActive])

	useFrame((props) => {
		// console.log(props)
		meshRef.current.rotation.x += 0.01
		// if (isActiveRef.current) {
		if (isActive) {
			time.current += 0.03
			meshRef.current.position.y = Math.sin(time.current)
		}
	})

	// declarative
	return (
		<group {...props}>
			<mesh
				ref={meshRef}
				onClick={(e) => onClick(e)}
				onPointerOver={(e) => onHover(e, true)}
				onPointerOut={(e) => onHover(e, false)}
			>
				<boxBufferGeometry attach='geometry' args={[3, 1, 2]} />
				<meshStandardMaterial
					attach='material'
					color={isHovered ? 'red' : isActive ? 'green' : 'blue'}
				/>
			</mesh>
		</group>
	)
	// we don't need to add to the scene because since it's a child of the canvas it's automatically added
}

export default GroupMesh
