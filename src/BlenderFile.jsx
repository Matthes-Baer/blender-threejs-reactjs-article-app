/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/blenderStuff/blenderFile.glb
*/

import { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./blenderStuff/blenderFile.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  useLayoutEffect(() => {
    names.forEach((animation) => {
      actions?.[animation]?.play();
    });
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[-0.07, 0.16, -0.27]}
          scale={[1, 0.03, 1]}
        />
        <mesh
          name="Sphere"
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          position={[-0.62, 0.43, -0.79]}
          rotation={[-0.01, 0.11, -0.02]}
          scale={0.09}
        />
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.001"]}
          position={[0.4, 0.55, 0.15]}
          scale={0.41}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./blenderStuff/blenderFile.glb");
