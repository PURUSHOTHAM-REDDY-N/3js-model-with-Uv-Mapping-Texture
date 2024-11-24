import React from "react";
import { useSnapshot } from "valtio";
import { useGLTF, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";
import state from "../store";

export default function Shirt() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_half.glb"); // Load the model

  let fullTexture = useTexture("https://images.styleforge.cc/1732389968104_blob.jpeg"); // Load the texture
  let secondTexture = useTexture("https://images.styleforge.cc/1732389968104_blob.jpeg"); // Load the texture

  // fullTexture.generateMipmaps=true
  
  // fullTexture.wrapS = RepeatWrapping;
  // fullTexture.wrapT = RepeatWrapping;
  // fullTexture.repeat.set(1, 1);

  // fullTexture.offset=[0.5,0.5]
  // fullTexture.matrixAutoUpdate=false

  fullTexture.mapping
  console.log("materials:", materials);
  console.log("nodes:", nodes);
  console.log("texture geometry:",fullTexture.mapping );

  fullTexture.flipY = false
  secondTexture.flipY = false

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.half_shirt_1.geometry}
        material={materials.body_back}
        dispose={null}
        
      >
        <meshStandardMaterial  map={secondTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_2.geometry}
        material={materials.body_front}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_3.geometry}
        material={materials.button}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_4.geometry}
        material={materials.collar_front}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_5.geometry}
        material={materials.collar_stand_front}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_6.geometry}
        material={materials.sleeves_front}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>
      <mesh
        castShadow
        geometry={nodes.half_shirt_7.geometry}
        material={materials.top_button}
        dispose={null}
        
      >
        <meshStandardMaterial  map={fullTexture} />
      </mesh>

    </group>
  );
}
