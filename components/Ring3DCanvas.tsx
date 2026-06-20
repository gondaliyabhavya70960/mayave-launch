"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  Lightformer,
  OrbitControls,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import {
  Color,
  type Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from "three";

/**
 * Interactive 3D render of the LR15017 solitaire. The model ships as a GLB
 * (converted from the supplied STL) with two meshes — "metal" and "gem" — so
 * the band gets a polished precious-metal material and the stone a refractive
 * diamond material.
 */
function Ring() {
  const { scene } = useGLTF("/ring.glb");

  const model = useMemo(() => {
    const root = scene.clone(true);

    const metal = new MeshStandardMaterial({
      color: new Color("#e0e2e7"),
      metalness: 1,
      roughness: 0.2,
      envMapIntensity: 1.35,
    });
    const gem = new MeshPhysicalMaterial({
      color: new Color("#ffffff"),
      metalness: 0,
      roughness: 0,
      transmission: 1,
      thickness: 0.5,
      ior: 2.42,
      specularIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0,
      envMapIntensity: 2.6,
      flatShading: true,
    });

    root.traverse((o) => {
      const mesh = o as Mesh;
      if (!mesh.isMesh) return;
      mesh.material = mesh.name.toLowerCase().includes("gem") ? gem : metal;
      mesh.castShadow = true;
    });
    return root;
  }, [scene]);

  // Modelled Z-up; rotate to Y-up so it stands and spins like a turntable.
  return <primitive object={model} rotation={[-Math.PI / 2, 0, 0]} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 12,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {Math.round(progress)}%
      </span>
    </Html>
  );
}

export default function Ring3DCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [2.2, 1.3, 5.2], fov: 30 }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.7} castShadow />
      <directionalLight position={[-5, 3, -4]} intensity={0.5} />

      <Suspense fallback={<Loader />}>
        <Ring />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[0, 5, 3]} scale={[8, 3, 1]} />
          <Lightformer form="rect" intensity={2} position={[-5, 2, -2]} scale={[5, 5, 1]} />
          <Lightformer form="rect" intensity={2.5} position={[5, 1, 2]} scale={[5, 5, 1]} />
          <Lightformer form="ring" intensity={2} position={[0, 0, 6]} scale={4} />
        </Environment>
      </Suspense>

      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.42}
        scale={4}
        blur={2.6}
        far={2.5}
        color="#1a1213"
      />

      <OrbitControls
        makeDefault
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
        minDistance={3.4}
        maxDistance={9}
      />
    </Canvas>
  );
}

useGLTF.preload("/ring.glb");
