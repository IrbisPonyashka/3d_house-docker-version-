'use client';

import { Center, useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  url?: string;
  onError?: () => void;
  onLoaded?: () => void;
}

export function HoverControlledModel({ url, onLoaded }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const { gl } = useThree(); // получаем canvas DOM-элемент

  const gltf = useGLTF(url || '', true);

  useEffect(() => {
    if (gltf?.scene && onLoaded) {
      onLoaded();
    }
  }, [gltf, onLoaded]);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (isInside) {
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        setTargetRotation({ x: 0, y: x * 2.5 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gl]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.x,
        0.1
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.y,
        0.1
      );
    }
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={gltf.scene} scale={1} />
      </group>
    </Center>
  );
}
