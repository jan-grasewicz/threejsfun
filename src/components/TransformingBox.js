import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import { a, useSpring } from 'react-spring/three'
import { useFrame, useUpdate } from 'react-three-fiber'
import * as THREE from 'three'

const BoxQuarter = ({ height = 3, spikeXPos = 1, ...rest }) => {
  const meshRef = useUpdate(
    (props) => {
      // console.log('tst', props)
      const { geometry } = props
      geometry.vertices[0].x = spikeXPos
      geometry.verticesNeedUpdate = true
      geometry.elementsNeedUpdate = true
      geometry.computeBoundingSphere()
      geometry.computeFaceNormals()
      // geometry.normalize()
    },
    [spikeXPos]
  )

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01
  // })

  return (
    <mesh {...rest} ref={meshRef}>
      <geometry
        attach='geometry'
        // ref={tetraRef}
        vertices={[
          new THREE.Vector3(1, -height / 2, 1),
          new THREE.Vector3(1, height / 2, 1),
          new THREE.Vector3(-1, height / 2, 1),
          new THREE.Vector3(1, height / 2, -1),
        ]}
        faces={[
          new THREE.Face3(0, 1, 2),
          new THREE.Face3(0, 3, 1),
          new THREE.Face3(0, 2, 3),
          new THREE.Face3(1, 3, 2),
        ]}
      />
      <meshStandardMaterial attach='material' color={0xf95b3c} />
    </mesh>
  )
}

const TransformingBox = ({ ...rest }) => {
  const [open, setOpen] = useState(false)
  const { topRotation, spikeXPos } = useSpring({
    spikeXPos: open ? -1 : 1,
    topRotation: open ? Math.PI / 2 : 0,
  })
  // console.log(spring)
  const boxRef = useRef()

  useFrame(() => {
    // boxRef.current.rotation.y += 0.01
  })
  // const spikeXPos = open ? -1 : 1
  const boxQuarterProps = { spikeXPos, height: 4 }
  const handleClick = (e) => {
    e.stopPropagation()
    setOpen((prev) => !prev)
  }

  const AnimatedBoxQuarter = a(BoxQuarter)
  return (
    <group ref={boxRef} onClick={handleClick} rotation-y={Math.PI / 4} {...rest}>
      <a.group position-y={0.5} rotation-y={topRotation}>
        <AnimatedBoxQuarter spikeXPos={spikeXPos} />
        <AnimatedBoxQuarter spikeXPos={spikeXPos} rotation-y={Math.PI} />
      </a.group>
      <group rotation-x={Math.PI}>
        <AnimatedBoxQuarter spikeXPos={spikeXPos} />
        <AnimatedBoxQuarter spikeXPos={spikeXPos} rotation-y={Math.PI} />
      </group>
    </group>
  )
}

export default TransformingBox
