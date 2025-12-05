import type { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

const COLOR_INTENSITIES: Record<string, number> = {
  "yellow": 2.5,   // Yellow
  "green": 13,    // Green
  "red": 6,    // Red
  "blue": 14    // Blue
};

type BulbProps = ThreeElements['mesh'] & {
  baseMaterial: THREE.MeshStandardMaterial;
  color: string;
  isActive: boolean;
}


const Bulb = ({ baseMaterial, color, isActive, ...props }: BulbProps) => {
  return (
    <mesh castShadow receiveShadow {...props}>
      <meshStandardMaterial
        {...baseMaterial}
        color={color}
        emissive={isActive ? color : "black"} 
        emissiveIntensity={isActive ? COLOR_INTENSITIES[color] : 0}
        toneMapped={false} 
      />
    </mesh>
  );
};

export default Bulb;