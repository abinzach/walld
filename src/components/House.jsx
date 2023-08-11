import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House(props) {
  const { nodes, materials } = useGLTF("/House_001_GLB.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Garage_door}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.Foundation}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials.Soffit}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4.geometry}
        material={materials.Gable}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_5.geometry}
        material={materials.Stairs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_6.geometry}
        material={materials.Stair_plate}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_7.geometry}
        material={materials.Window_panes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_8.geometry}
        material={materials.Window_frames}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_9.geometry}
        material={materials.Chimney}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_10.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_11.geometry}
        material={materials.Window_sills}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_12.geometry}
        material={materials.Doors}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_13.geometry}
        material={materials.Door_glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_14.geometry}
        material={materials.Decorative_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_15.geometry}
        material={materials.Door_frame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_16.geometry}
        material={materials.Columns}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_17.geometry}
        material={materials.Wood_beams}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_18.geometry}
        material={materials.Handle}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_19.geometry}
        material={materials.Roof_elements}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_20.geometry}
        material={materials.Terrace_foundation}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_21.geometry}
        material={materials.Terrace_beams}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_22.geometry}
        material={materials.Terrace_stairs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_23.geometry}
        material={materials["Wooden steps"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_24.geometry}
        material={materials.Terrace_wooden_floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_25.geometry}
        material={materials.Balustrade}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_26.geometry}
        material={materials.Gutters}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_27.geometry}
        material={materials.Roof}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_28.geometry}
        material={materials.Roof_tiles}
      />
    </group>
  );
}

useGLTF.preload("/House_001_GLB.glb");