import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

function Particles({ count = 1200, additive = false, scaleMultiplier = 1, baseOpacity = 0.9 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const c1 = new THREE.Color('#7c3aed');
    const c2 = new THREE.Color('#ec4899');
    const c3 = new THREE.Color('#22d3ee');
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color = c1.clone().lerp(c2, t).lerp(c3, Math.random() * 0.5);
      arr[i * 3] = color.r;
      arr[i * 3 + 1] = color.g;
      arr[i * 3 + 2] = color.b;
    }
    return arr;
  }, [count]);

  const scales = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) arr[i] = (Math.random() * 0.6 + 0.2) * scaleMultiplier;
    return arr;
  }, [count, scaleMultiplier]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!mesh.current) return;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const spiral = 1 + 0.4 * Math.sin(t * 0.6 + i * 0.15);
      const px = positions[idx] * spiral;
      const py = positions[idx + 1] * spiral;
      const pz = positions[idx + 2] * spiral;
      dummy.position.set(px, py, pz);
      const s = 1 + Math.sin(t * 1.2 + i) * 0.15;
      dummy.scale.setScalar(scales[i] * s);
      dummy.rotation.set(Math.sin(t + i) * Math.PI, Math.cos(t * 0.7 + i) * Math.PI, Math.sin(t * 0.3 + i) * Math.PI);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(0.06, 0), []);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: baseOpacity,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthWrite: !additive ? true : false,
      }),
    [additive, baseOpacity]
  );

  return (
    <instancedMesh ref={mesh} args={[geometry, material, count]}>
      <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
    </instancedMesh>
  );
}

function Aurora() {
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });
  return (
    <mesh position={[0, 0, -30]}>
      <planeGeometry args={[120, 60, 128, 64]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main(){
            vUv = uv;
            vec3 pos = position;
            float w = sin(uv.x * 8.0 + uTime * 0.6) * 0.6 + cos(uv.y * 6.0 + uTime * 0.4) * 0.6;
            pos.z += w;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main(){
            vec2 uv = vUv;
            float stripe = smoothstep(0.35, 0.0, abs(fract(uv.x * 3.0 + uTime * 0.08) - 0.5));
            vec3 c1 = vec3(0.2, 0.05, 0.35);
            vec3 c2 = vec3(0.1, 0.25, 0.45);
            vec3 c3 = vec3(0.9, 0.3, 0.8);
            vec3 color = mix(c1, c2, uv.y) + stripe * c3 * 0.7;
            gl_FragColor = vec4(color, 0.35);
          }
        `}
      />
    </mesh>
  );
}

function CameraRig({ mouseRef }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame(() => {
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    target.set(mx * 2.0, my * 1.2, camera.position.z);
    camera.position.lerp(target, 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeBackground() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1..1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // -1..1
      mouseRef.current.x = x;
      mouseRef.current.y = -y; // invert Y for natural feel
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={[0x000000]} />
        <fog attach="fog" args={[0x000000, 10, 120]} />
        {/* Core particles */}
        <Particles count={1000} additive={false} scaleMultiplier={1} baseOpacity={0.85} />
        {/* Additive glow layer to simulate bloom */}
        <Particles count={700} additive scaleMultiplier={1.8} baseOpacity={0.35} />
        <Aurora />
        <CameraRig mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
}
