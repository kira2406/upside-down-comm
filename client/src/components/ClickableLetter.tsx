import type { ThreeElements } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from 'three';

type ClickableLetterProps = Omit<ThreeElements['mesh'], 'onClick'> & {
  letter: string;
  geometry: THREE.BufferGeometry;
  material: THREE.Material | THREE.Material[];
  onClick?: (letter: string) => void;
};

const ClickableLetter = ({ geometry, material, letter, onClick, ...props }: ClickableLetterProps) => {
  const [hovered, setHover] = useState(false);

  // Change cursor on hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
      {...props}
      // CLICK HANDLER
      onClick={(e) => {
        e.stopPropagation(); // Prevent clicking through to the wall
        if (onClick) onClick(letter);
      }}
      // HOVER EVENTS
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    />
  );
};

export default ClickableLetter;