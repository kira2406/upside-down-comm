import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import {Model} from './Byerslights'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

interface ThreeSceneProps {
  activeLetter: string | null;
  onLetterClick?: (letter: string) => void;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ activeLetter, onLetterClick }) => {

  const directionLightParams = {
    sunPosition: [5, 10, 5],
    sunIntensity: 0.4,
    color: '#676755'
  }

  const spotLightParams = {
    "power": 0.1,
    "beamSize": 0.2,
    "blend": 1.0,
    "normalize": false,
    "color": '#ffddaa',
    "position": [0.4, 4.9, 6.8]
  } 

  
  return (
    <div className="h-full w-full absolute inset-0 bg-white">
      <Canvas shadows camera={{ position: [0, -1, 2.3], fov: 50, rotation:[0, 0,0] }}>
        
        <color attach="background" args={['#000']} />
        
        <directionalLight 
          position={directionLightParams["sunPosition"] as [number, number, number]}
          intensity={directionLightParams["sunIntensity"]}
          castShadow 
          color={directionLightParams["color"]}
          shadow-mapSize={[1024, 1024]}
        />

        <spotLight 
          position={spotLightParams["position"] as [number, number, number]}
          intensity={spotLightParams["power"]}
          color={spotLightParams["color"]}
          angle={spotLightParams["beamSize"]}
          penumbra={spotLightParams["blend"]}
          decay={spotLightParams["normalize"] ? 2 : 0}
          distance={spotLightParams["normalize"] ? 50 : 100} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />

        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Model 
              activeLetter={activeLetter}
              onLetterClick={onLetterClick}
            />
          </group>
          
          <ContactShadows 
            position={[0, -4, 0]} 
            opacity={0.5} 
            scale={10} 
            blur={2} 
            far={4} 
          />
        </Suspense>

        <EffectComposer>
          <Bloom 
            luminanceThreshold={1}
            mipmapBlur 
            intensity={1}
            radius={0.8}
          />
        </EffectComposer>

      </Canvas>
    </div>
  );
};

export default ThreeScene;