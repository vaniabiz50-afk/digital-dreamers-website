"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ---------- helpers ---------- */

/** Convert lat/lng (degrees) to a point on a sphere. */
function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/** Create a curved arc between two points on the globe surface. */
function createArc(
  start: THREE.Vector3,
  end: THREE.Vector3,
  radius: number,
  color: THREE.Color
): THREE.Line {
  const mid = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(radius * 1.35);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(48);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.35,
  });
  return new THREE.Line(geometry, material);
}

/* ---------- city coordinates ---------- */
const cities: [number, number][] = [
  [40.7, -74.0],   // New York
  [51.5, -0.1],    // London
  [35.7, 139.7],   // Tokyo
  [-33.9, 151.2],  // Sydney
  [1.35, 103.8],   // Singapore
  [48.9, 2.35],    // Paris
  [55.75, 37.6],   // Moscow
  [-23.5, -46.6],  // São Paulo
  [19.4, -99.1],   // Mexico City
  [28.6, 77.2],    // Delhi
  [37.6, 127.0],   // Seoul
  [34.0, -118.2],  // Los Angeles
  [25.3, 55.3],    // Dubai
  [-1.3, 36.8],    // Nairobi
  [31.2, 121.5],   // Shanghai
];

/* ---------- connections ---------- */
const connections: [number, number][] = [
  [0, 1],  [0, 3],  [1, 5],  [2, 4],
  [2, 14], [3, 4],  [5, 6],  [7, 8],
  [9, 4],  [10, 2], [11, 8], [12, 9],
  [13, 12],[14, 10],[0, 11],
];

/* ---------- component ---------- */

export function GlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const accent = new THREE.Color("#5ba3e6");
    const accentDim = new THREE.Color("#3d7ec7");
    const GLOBE_R = 2.2;

    /* --- renderer --- */
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* --- scene & camera --- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 6);
    camera.lookAt(0, 0, 0);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    /* --- wireframe sphere --- */
    const sphereGeo = new THREE.SphereGeometry(GLOBE_R, 36, 24);
    const wireframe = new THREE.WireframeGeometry(sphereGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: accentDim,
      transparent: true,
      opacity: 0.08,
    });
    globeGroup.add(new THREE.LineSegments(wireframe, wireMat));

    /* --- surface dots --- */
    const dotGeo = new THREE.SphereGeometry(0.025, 6, 6);
    const dotMat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.9,
    });

    const cityVecs: THREE.Vector3[] = [];
    cities.forEach(([lat, lng]) => {
      const pos = latLngToVec3(lat, lng, GLOBE_R);
      cityVecs.push(pos);
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      globeGroup.add(dot);
    });

    /* --- connection arcs --- */
    connections.forEach(([a, b]) => {
      const arc = createArc(cityVecs[a], cityVecs[b], GLOBE_R, accent);
      globeGroup.add(arc);
    });

    /* --- Saturn-style rings --- */
    const ringInner = GLOBE_R * 1.3;
    const ringOuter = GLOBE_R * 1.75;
    const ringGeo = new THREE.RingGeometry(ringInner, ringOuter, 96);
    const ringMat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI * 0.42;
    ring.rotation.z = Math.PI * 0.05;
    globeGroup.add(ring);

    /* Second thinner ring */
    const ring2Geo = new THREE.RingGeometry(
      GLOBE_R * 1.8,
      GLOBE_R * 1.95,
      96
    );
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0.035,
      side: THREE.DoubleSide,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI * 0.42;
    ring2.rotation.z = Math.PI * 0.05;
    globeGroup.add(ring2);

    /* --- ambient light --- */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    /* --- animate --- */
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    /* --- resize --- */
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="globe-container" />;
}
