import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MapPin, RotateCw, Sparkles, Navigation, Globe as GlobeIcon } from 'lucide-react';

export default function Globe({
  activeLocation = 'San Francisco HQ',
  onSelectLocation,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const pointerInteracting = useRef(false);
  const pointerStart = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.35, y: -1.8 }); // Centered over US initially
  const currentRotation = useRef({ x: 0.35, y: -1.8 });
  const reqAnimRef = useRef(null);

  // Office locations with lat, lon
  const LOCATIONS = useMemo(() => [
    { name: 'San Francisco HQ', lat: 37.7749, lon: -122.4194, label: 'San Francisco HQ', state: 'California, USA', isHQ: true },
    { name: 'Mid-Atlantic Office', lat: 38.9072, lon: -77.0369, label: 'Mid-Atlantic (Bethesda / DC)', state: 'Washington, DC, USA', isHQ: true },
    { name: 'Southwest Office', lat: 33.4484, lon: -112.0740, label: 'Southwest Regional Hub', state: 'Phoenix, AZ, USA' },
    { name: 'Central Office', lat: 41.8781, lon: -87.6298, label: 'Central Division', state: 'Chicago, IL, USA' },
    { name: 'Southern California', lat: 34.0522, lon: -118.2437, label: 'Southern California Hub', state: 'Los Angeles, CA, USA' },
    { name: 'India Global Hub', lat: 28.6139, lon: 77.2090, label: 'Global Engineering Partner', state: 'New Delhi, India' }
  ], []);

  // Connection Arcs across corporate network with clean altitudes
  const ARCS_DATA = useMemo(() => [
    { from: [37.7749, -122.4194], to: [38.9072, -77.0369], color: 0x38BDF8, altitude: 0.18 }, // SF -> DC
    { from: [37.7749, -122.4194], to: [33.4484, -112.0740], color: 0xF59E0B, altitude: 0.08 }, // SF -> PHX
    { from: [38.9072, -77.0369], to: [41.8781, -87.6298], color: 0x60A5FA, altitude: 0.08 }, // DC -> CHI
    { from: [38.9072, -77.0369], to: [28.6139, 77.2090], color: 0x34D399, altitude: 0.22 }  // DC -> India
  ], []);

  // Active location details
  const activeOffice = useMemo(() => {
    return LOCATIONS.find(loc => loc.name === activeLocation) || LOCATIONS[0];
  }, [LOCATIONS, activeLocation]);

  // Smoothly rotate globe to focus on selected location
  useEffect(() => {
    if (activeOffice) {
      const phi = (activeOffice.lat * Math.PI) / 180;
      const theta = -(activeOffice.lon * Math.PI) / 180 - Math.PI / 2;
      targetRotation.current = { x: phi * 0.45, y: theta };
    }
  }, [activeOffice]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 420;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.85;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Root Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. High-Fidelity Procedural Earth Texture (Smooth Natural Coastlines, Landmass Shading, City Lights)
    const createEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 4096;
      canvas.height = 2048;
      const ctx = canvas.getContext('2d');

      // Ocean Canvas Background with Subtle Equatorial Glow
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGrad.addColorStop(0, '#040B1E');
      oceanGrad.addColorStop(0.3, '#071536');
      oceanGrad.addColorStop(0.5, '#0A1C47');
      oceanGrad.addColorStop(0.7, '#071536');
      oceanGrad.addColorStop(1, '#040B1E');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lat/Lon Coordinate Graticule Grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.lineWidth = 2;

      // Longitude lines
      for (let x = 0; x <= canvas.width; x += canvas.width / 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Latitude lines
      for (let y = 0; y <= canvas.height; y += canvas.height / 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Helper function to map lat/lon to canvas x, y
      const toXY = (lat, lon) => {
        const x = ((lon + 180) / 360) * canvas.width;
        const y = ((90 - lat) / 180) * canvas.height;
        return [x, y];
      };

      // Draw Smooth Organic Coastlines using Catmull-Rom Spline Interpolation
      const drawSmoothCoastline = (coords, fillColor, strokeColor) => {
        if (!coords || coords.length < 3) return;
        const pts = coords.map(c => toXY(c[0], c[1]));

        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);

        for (let i = 0; i < pts.length; i++) {
          const p0 = pts[(i - 1 + pts.length) % pts.length];
          const p1 = pts[i];
          const p2 = pts[(i + 1) % pts.length];
          const p3 = pts[(i + 2) % pts.length];

          // Catmull-Rom to Cubic Bezier control points
          const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
          const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
          const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
          const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
        }
        ctx.closePath();

        // Fill Landmass with subtle gradient
        if (fillColor) {
          ctx.fillStyle = fillColor;
          ctx.fill();
        }

        // Coastal boundary line with neon-cyan illumination
        if (strokeColor) {
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 3;
          ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.shadowBlur = 0; // reset shadow
        }
      };

      // Accurate, high-density geographic coastline points
      const CONTINENTS_GEODATA = [
        // 1. North America & Central America
        [
          [71.5, -156.8], [70.5, -145], [69, -135], [65, -125], [60, -115], [58, -94], [62, -80], [58, -78],
          [52, -80], [50, -88], [48, -89], [45, -84], [43, -79], [47, -70], [45, -64], [44, -66], [42, -70],
          [39, -74], [35, -75.5], [32, -80], [28, -80.5], [25, -80.2], [25.5, -81.5], [28, -82.8], [30, -85],
          [30, -88], [29, -89.5], [29.5, -94], [28, -96.5], [26, -97.2], [22, -97.5], [19, -96], [18.5, -92],
          [21, -89], [21.5, -87], [18, -88], [15.5, -85], [14, -83.5], [12, -83.7], [9, -82.5], [8.5, -80],
          [7.5, -78], [8.5, -77], [8.5, -79], [8.3, -83], [10, -85.5], [13, -87.5], [16, -93], [16, -98],
          [18, -103], [20.5, -105.5], [23, -106], [24, -110], [23, -110], [27, -114], [31, -116], [32.5, -117.2],
          [34, -119], [36.5, -122], [38, -123], [42, -124.5], [46, -124], [48.5, -124.7], [50, -127], [54, -130],
          [57, -135], [59, -140], [60, -148], [58, -153], [55, -160], [54, -165], [58, -160], [60, -165],
          [65, -168], [66.5, -164], [70, -162], [71.5, -156.8]
        ],
        // 2. Greenland
        [
          [83, -35], [81, -18], [76, -19], [70, -22], [65, -35], [60, -43], [61, -48], [65, -52], [70, -54],
          [76, -68], [80, -65], [83, -35]
        ],
        // 3. South America
        [
          [12, -72], [11, -68], [10.5, -62], [7, -58], [5, -53], [2, -50], [-0.5, -48], [-3, -41], [-5.5, -35],
          [-9, -35], [-13, -39], [-18, -39.5], [-23, -42], [-24, -46], [-28, -48.5], [-33, -52], [-35, -56],
          [-38, -57.5], [-41, -63], [-46, -66], [-50, -68], [-53, -68], [-55, -66], [-54, -71], [-50, -74],
          [-45, -74], [-40, -73.5], [-35, -72], [-30, -71.5], [-24, -70.5], [-18, -70.5], [-14, -76], [-9, -79],
          [-5, -81], [-2, -80.5], [1, -79], [4, -77.5], [8, -77], [10, -75], [12, -72]
        ],
        // 4. Europe & Scandinavia
        [
          [71, 28], [69, 16], [62, 5], [58, 6], [55, 9], [54, 13], [54, 19], [58, 20], [60, 27], [65, 24],
          [68, 28], [70, 31], [67, 40], [60, 48], [50, 45], [46, 38], [44, 34], [46, 30], [42, 28], [40, 24],
          [38, 22], [36.5, 23], [38, 21], [40, 18], [42, 16], [45, 13], [44, 8], [43, 4], [41.5, 2.5], [37, -2],
          [36, -5.5], [37, -9], [39, -9.5], [42, -9], [43.5, -4], [44.5, -1.5], [47, -2.5], [49, -1], [51, 2],
          [53, 5], [54, 8], [57, 10], [60, 11], [63, 11], [66, 14], [70, 20], [71, 28]
        ],
        // 5. British Isles
        [
          [58.5, -3.5], [57.5, -2], [55.5, -1.5], [53, 0.5], [51, 1.5], [50, -0.5], [50.5, -4.5], [51.5, -5],
          [53.5, -3.5], [55, -4.5], [56.5, -6], [58, -5.5], [58.5, -3.5]
        ],
        [
          [55, -7], [53.5, -6], [52, -6.5], [51.5, -9], [53, -10], [54.5, -9], [55, -7]
        ],
        // 6. Africa
        [
          [36, -5.5], [37, 10], [33, 11], [31, 20], [32, 30], [31, 33], [27, 34], [22, 37], [15, 42], [12, 44],
          [11.5, 51], [9, 50], [4, 48], [0, 42], [-5, 39], [-10, 40], [-15, 40.5], [-20, 35], [-25, 33],
          [-30, 31], [-34, 26], [-34.5, 20], [-33, 18], [-28, 16], [-22, 14], [-15, 12], [-8, 13], [-5, 12],
          [0, 9], [4.5, 7], [5, 2], [5, -3], [4.5, -7], [7, -12], [10, -15], [14, -17], [18, -16], [21, -17],
          [26, -14], [30, -10], [33, -7], [35.5, -6], [36, -5.5]
        ],
        // 7. Madagascar
        [
          [-12, 49.5], [-16, 50], [-20, 48.5], [-25, 47], [-25.5, 45], [-22, 43], [-16, 44], [-13, 48], [-12, 49.5]
        ],
        // 8. Asia / Eurasia & Middle East
        [
          [75, 100], [72, 130], [70, 165], [65, 175], [60, 165], [55, 155], [50, 140], [43, 132], [40, 128],
          [35, 129], [37, 126], [39, 124], [38, 120], [36, 120], [32, 121], [28, 121.5], [23, 117], [22, 114],
          [21, 108], [17, 107], [11, 109], [8, 104], [12, 100], [14, 101], [10, 99], [3, 103], [1.5, 104],
          [4, 100], [8, 98], [16, 96], [20, 94], [22, 90], [21.5, 87], [18, 84], [15, 80], [10, 79.5], [8, 77.5],
          [10, 76], [15, 73.5], [19, 72.8], [22, 69], [23, 68], [25, 62], [25, 57], [22, 59.5], [17, 54],
          [14, 48], [12.5, 44], [14, 43], [19, 40], [25, 35], [28, 34], [31, 35], [33, 35.5], [36, 36],
          [37, 30], [39, 26], [41, 29], [42, 34], [41, 41], [40, 48], [42, 52], [45, 50], [47, 53], [52, 55],
          [58, 60], [65, 75], [72, 80], [75, 100]
        ],
        // 9. Japan
        [
          [45, 142], [43, 145], [41, 141], [38, 141.5], [35, 140], [33.5, 135], [34, 131], [36, 136], [39, 140],
          [41, 140], [43, 141], [45, 142]
        ],
        // 10. Australia
        [
          [-11, 142], [-15, 145], [-20, 148], [-25, 153], [-30, 153], [-35, 150.5], [-38, 148], [-38.5, 144],
          [-37, 140], [-35, 136], [-32, 132], [-32, 125], [-34, 120], [-34, 115], [-30, 114], [-24, 113],
          [-20, 116], [-17, 122], [-14, 126], [-12, 131], [-12, 136], [-15, 136], [-17, 139], [-14, 141], [-11, 142]
        ],
        // 11. New Zealand
        [
          [-35, 173], [-38, 178], [-41, 175], [-41, 172], [-38, 174], [-35, 173]
        ],
        [
          [-41, 173], [-44, 171], [-46.5, 168], [-46, 166], [-42, 171], [-41, 173]
        ],
        // 12. Indonesia / Philippines
        [
          [5, 96], [3, 98], [-4, 104], [-6, 106], [-3, 103], [1, 99], [5, 96]
        ],
        [
          [-6, 106], [-7.5, 110], [-8, 114], [-7, 113], [-6, 109], [-6, 106]
        ],
        [
          [5, 117], [1, 118], [-3, 116], [-3, 111], [1, 110], [5, 115], [5, 117]
        ],
        [
          [18, 121], [14, 124], [10, 125], [6, 125], [8, 122], [14, 120], [18, 121]
        ]
      ];

      // Draw all Continents with Organic Smooth Curves and Shading
      CONTINENTS_GEODATA.forEach(poly => {
        drawSmoothCoastline(poly, '#11224D', '#3B82F6');
      });

      // Scatter Glowing City / Settlement Matrix Dots inside Landmasses
      ctx.fillStyle = '#60A5FA';
      for (let i = 0; i < 4500; i++) {
        const lat = (Math.random() - 0.5) * 160;
        const lon = (Math.random() - 0.5) * 360;
        const [x, y] = toXY(lat, lon);

        // Sample pixel to ensure it's inside continent land
        const p = ctx.getImageData(x, y, 1, 1).data;
        if (p[0] > 14 || p[1] > 30 || p[2] > 70) {
          ctx.beginPath();
          ctx.arc(x, y, Math.random() * 2.4 + 1.0, 0, Math.PI * 2);
          ctx.fillStyle = Math.random() > 0.35 ? '#93C5FD' : '#38BDF8';
          ctx.fill();
        }
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture();

    // 2. Earth Globe Sphere Mesh
    const globeRadius = 1.0;
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.15
    });
    const earthMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(earthMesh);

    // 3. Atmospheric Outer Glow Sphere
    const glowGeo = new THREE.SphereGeometry(globeRadius * 1.12, 48, 48);
    const glowMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.62 - dot(vNormal, vec3(0, 0, 1.0)), 2.6);
          gl_FragColor = vec4(0.22, 0.55, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glowMesh);

    // 4. Balanced Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.35);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x93C5FD, 1.8);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x1D4ED8, 1.1);
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    // 5. Helper: Convert Lat/Lon to 3D Vector on Sphere
    const latLonToVector3 = (lat, lon, r = globeRadius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // 6. Location Pin Markers & Pulsing Beacons
    const markersGroup = new THREE.Group();
    globeGroup.add(markersGroup);

    const beaconRings = [];

    LOCATIONS.forEach(loc => {
      const pos = latLonToVector3(loc.lat, loc.lon, globeRadius * 1.01);

      // Gold Pin Sphere
      const markerGeo = new THREE.SphereGeometry(loc.name === activeLocation ? 0.03 : 0.02, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: loc.name === activeLocation ? 0xF59E0B : 0xFBBF24
      });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      markerMesh.position.copy(pos);
      markersGroup.add(markerMesh);

      // Pulsing Beacon Ring
      const ringGeo = new THREE.RingGeometry(0.022, 0.04, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xF59E0B,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.002));
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      markersGroup.add(ringMesh);

      beaconRings.push({ mesh: ringMesh, scale: 1, maxScale: 2.0, speed: 0.022 });
    });

    // 7. Animated 3D Great-Circle Connection Arcs & Light Pulses
    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);

    const pulseParticles = [];

    ARCS_DATA.forEach(arc => {
      const v1 = latLonToVector3(arc.from[0], arc.from[1]);
      const v2 = latLonToVector3(arc.to[0], arc.to[1]);

      // Mid-point lifted for parabolic 3D flight arc (tightly hugging atmospheric radius)
      const mid = v1.clone().add(v2).multiplyScalar(0.5);
      const distance = v1.distanceTo(v2);
      mid.normalize().multiplyScalar(globeRadius + distance * arc.altitude);

      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      const points = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: arc.color,
        transparent: true,
        opacity: 0.7,
        linewidth: 2
      });

      const curveMesh = new THREE.Line(curveGeo, curveMat);
      arcsGroup.add(curveMesh);

      // Travelling Light Pulse
      const pulseGeo = new THREE.SphereGeometry(0.02, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      arcsGroup.add(pulseMesh);

      pulseParticles.push({
        mesh: pulseMesh,
        curve: curve,
        progress: Math.random(),
        speed: 0.007
      });
    });

    // 8. Interaction: Pointer Drag & Rotation
    const onPointerDown = (e) => {
      pointerInteracting.current = true;
      pointerStart.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!pointerInteracting.current) return;
      const deltaX = e.clientX - pointerStart.current.x;
      const deltaY = e.clientY - pointerStart.current.y;
      pointerStart.current = { x: e.clientX, y: e.clientY };

      targetRotation.current.y += deltaX * 0.006;
      targetRotation.current.x += deltaY * 0.006;
      // Clamp vertical tilt
      targetRotation.current.x = Math.max(-0.9, Math.min(0.9, targetRotation.current.x));
    };

    const onPointerUp = () => {
      pointerInteracting.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 9. Animation Loop
    const animate = () => {
      reqAnimRef.current = requestAnimationFrame(animate);

      // Auto-spin gently when user is not dragging
      if (!pointerInteracting.current) {
        targetRotation.current.y += 0.002;
      }

      // Smooth interpolation (damping) towards target rotation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.06;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.06;

      globeGroup.rotation.x = currentRotation.current.x;
      globeGroup.rotation.y = currentRotation.current.y;

      // Animate Beacon Rings
      beaconRings.forEach(beacon => {
        beacon.scale += beacon.speed;
        if (beacon.scale > beacon.maxScale) {
          beacon.scale = 1;
        }
        beacon.mesh.scale.set(beacon.scale, beacon.scale, 1);
        beacon.mesh.material.opacity = Math.max(0, 1 - (beacon.scale - 1) / (beacon.maxScale - 1));
      });

      // Animate Arcs Light Pulses
      pulseParticles.forEach(pulse => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) pulse.progress = 0;
        const pt = pulse.curve.getPoint(pulse.progress);
        pulse.mesh.position.copy(pt);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || 400;
      const h = containerRef.current.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [LOCATIONS, ARCS_DATA, activeLocation]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        backgroundColor: '#030712',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), inset 0 0 60px rgba(13, 26, 99, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
      className={className}
    >
      {/* Background Celestial Star Grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.18) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.65,
          pointerEvents: 'none'
        }}
      />

      {/* Atmospheric Soft Nebula Backlight */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(13, 26, 99, 0.1) 60%, transparent 80%)',
          filter: 'blur(28px)',
          pointerEvents: 'none'
        }}
      />

      {/* Three.js 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          position: 'relative',
          zIndex: 2
        }}
      />

      {/* Top Left: Live Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '18px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(7, 16, 56, 0.88)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: '#FFFFFF',
          fontSize: '0.78rem',
          fontWeight: 600,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          pointerEvents: 'none'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
        <span>Live 3D Earth Network</span>
      </div>

      {/* Bottom Left: Pinned Location Callout */}
      {activeOffice && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '18px',
            zIndex: 10,
            backgroundColor: 'rgba(7, 16, 56, 0.94)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(217, 119, 6, 0.5)',
            borderRadius: '8px',
            padding: '10px 16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            pointerEvents: 'none'
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(217, 119, 6, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
            <MapPin size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
              Pinned Location
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>
              {activeOffice.label}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>
              {activeOffice.state}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Right: Drag Rotate Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '18px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '6px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#94A3B8',
          fontSize: '0.75rem',
          pointerEvents: 'none'
        }}
      >
        <RotateCw size={12} style={{ animation: 'spin 8s linear infinite' }} />
        <span>Drag to rotate globe</span>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
