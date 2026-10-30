import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { MapPin, RotateCw, Play, Pause, Compass, Radio } from 'lucide-react';

export default function Globe({
  activeLocation = 'Mumbai Office',
  onSelectLocation,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const pointerInteracting = useRef(false);
  const pointerStart = useRef({ x: 0, y: 0 });
  const isAutoSpinning = useRef(true);
  const [autoSpin, setAutoSpin] = useState(true);

  // Exactly 4 office locations only
  const LOCATIONS = useMemo(() => [
    {
      name: 'Mumbai Office',
      city: 'Mumbai',
      lat: 18.9986,
      lon: 72.8258,
      label: 'Mumbai Corporate Office',
      address: 'Altimus, Level 35, Pandurang Budhkar Marg, Worli',
      zip: 'Mumbai – 400018, Maharashtra, India',
      state: 'Worli, Mumbai, Maharashtra, India',
      coords: '18.9986° N, 72.8258° E',
      badge: 'India Corporate Hub',
      isPrimary: true
    },
    {
      name: 'San Francisco HQ',
      city: 'San Francisco',
      lat: 37.7749,
      lon: -122.4194,
      label: 'San Francisco HQ',
      address: '181 Fremont St',
      zip: 'San Francisco, CA 94105',
      state: 'California, USA',
      coords: '37.7749° N, 122.4194° W',
      badge: 'Global Headquarters'
    },
    {
      name: 'Mid-Atlantic Office',
      city: 'Washington DC',
      lat: 38.9072,
      lon: -77.0369,
      label: 'Mid-Atlantic Office',
      address: '420 Constitution Ave NE',
      zip: 'Washington, DC 20002',
      state: 'Washington, DC, USA',
      coords: '38.9072° N, 77.0369° W',
      badge: 'Regional Division'
    },
    {
      name: 'Southwest Office',
      city: 'Phoenix',
      lat: 33.4484,
      lon: -112.0740,
      label: 'Southwest Office',
      address: '500 Phoenix Plaza, Suite 12',
      zip: 'Phoenix, AZ 85001',
      state: 'Phoenix, AZ, USA',
      coords: '33.4484° N, 112.0740° W',
      badge: 'Regional Hub'
    }
  ], []);

  // Intercontinental corporate network arcs strictly connecting these 4 locations only (sleek close-to-globe altitudes)
  const ARCS_DATA = useMemo(() => [
    { from: [18.9986, 72.8258], to: [37.7749, -122.4194], color: 0xF59E0B, altitude: 0.09, label: 'Mumbai ⇄ SF HQ' },
    { from: [18.9986, 72.8258], to: [38.9072, -77.0369], color: 0x38BDF8, altitude: 0.08, label: 'Mumbai ⇄ DC' },
    { from: [18.9986, 72.8258], to: [33.4484, -112.0740], color: 0xFBBF24, altitude: 0.085, label: 'Mumbai ⇄ Phoenix' },
    { from: [37.7749, -122.4194], to: [38.9072, -77.0369], color: 0x38BDF8, altitude: 0.045, label: 'SF ⇄ DC' },
    { from: [37.7749, -122.4194], to: [33.4484, -112.0740], color: 0x60A5FA, altitude: 0.035, label: 'SF ⇄ Phoenix' }
  ], []);

  // Active location details
  const activeOffice = useMemo(() => {
    return LOCATIONS.find(loc => loc.name === activeLocation) || LOCATIONS[0];
  }, [LOCATIONS, activeLocation]);

  const activeOfficeRef = useRef(activeOffice);
  useEffect(() => {
    activeOfficeRef.current = activeOffice;
  }, [activeOffice]);

  // Target rotation references
  const targetRotation = useRef({ x: 0.22, y: -2.842 }); // Centered over Mumbai (lat 19N, lon 73E)
  const currentRotation = useRef({ x: 0.22, y: -2.842 });
  const targetZoom = useRef(2.85);
  const currentZoom = useRef(2.85);
  const reqAnimRef = useRef(null);

  // Smoothly rotate globe to focus on selected location
  const rotateToOffice = useCallback((office) => {
    if (!office) return;
    const phi = (office.lat * Math.PI) / 180;
    const theta = -(office.lon * Math.PI) / 180 - Math.PI / 2;
    targetRotation.current = { x: phi * 0.45, y: theta };
  }, []);

  useEffect(() => {
    if (activeOffice) {
      rotateToOffice(activeOffice);
    }
  }, [activeOffice, rotateToOffice]);

  // Main Three.js Lifecycle
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 460;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = currentZoom.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Root Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial position matching Mumbai
    globeGroup.rotation.x = currentRotation.current.x;
    globeGroup.rotation.y = currentRotation.current.y;

    const globeRadius = 1.0;

    // Helper: Convert Lat/Lon to 3D Cartesian Coordinates on Sphere
    const latLonToVector3 = (lat, lon, r = globeRadius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(r * Math.sin(phi) * Math.cos(theta));
      const z = r * Math.sin(phi) * Math.sin(theta);
      const y = r * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // 2. High-Fidelity Procedural Earth Texture
    const createEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 4096;
      canvas.height = 2048;
      const ctx = canvas.getContext('2d');

      // Ocean Background with Radial / Linear Depth
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGrad.addColorStop(0, '#030818');
      oceanGrad.addColorStop(0.25, '#05122F');
      oceanGrad.addColorStop(0.5, '#0A1C47');
      oceanGrad.addColorStop(0.75, '#05122F');
      oceanGrad.addColorStop(1, '#030818');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lat/Lon Graticule Lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1.8;

      for (let x = 0; x <= canvas.width; x += canvas.width / 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += canvas.height / 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Equator Highlight
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.18)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      const toXY = (lat, lon) => {
        const x = ((lon + 180) / 360) * canvas.width;
        const y = ((90 - lat) / 180) * canvas.height;
        return [x, y];
      };

      // Catmull-Rom Smooth Organic Coastline Drawing
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

          const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
          const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
          const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
          const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
        }
        ctx.closePath();

        if (fillColor) {
          ctx.fillStyle = fillColor;
          ctx.fill();
        }

        if (strokeColor) {
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 3.2;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.65)';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      };

      // Accurate Geographic Continents
      const CONTINENTS_GEODATA = [
        // North America
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
        // Greenland
        [
          [83, -35], [81, -18], [76, -19], [70, -22], [65, -35], [60, -43], [61, -48], [65, -52], [70, -54],
          [76, -68], [80, -65], [83, -35]
        ],
        // South America
        [
          [12, -72], [11, -68], [10.5, -62], [7, -58], [5, -53], [2, -50], [-0.5, -48], [-3, -41], [-5.5, -35],
          [-9, -35], [-13, -39], [-18, -39.5], [-23, -42], [-24, -46], [-28, -48.5], [-33, -52], [-35, -56],
          [-38, -57.5], [-41, -63], [-46, -66], [-50, -68], [-53, -68], [-55, -66], [-54, -71], [-50, -74],
          [-45, -74], [-40, -73.5], [-35, -72], [-30, -71.5], [-24, -70.5], [-18, -70.5], [-14, -76], [-9, -79],
          [-5, -81], [-2, -80.5], [1, -79], [4, -77.5], [8, -77], [10, -75], [12, -72]
        ],
        // Europe
        [
          [71, 28], [69, 16], [62, 5], [58, 6], [55, 9], [54, 13], [54, 19], [58, 20], [60, 27], [65, 24],
          [68, 28], [70, 31], [67, 40], [60, 48], [50, 45], [46, 38], [44, 34], [46, 30], [42, 28], [40, 24],
          [38, 22], [36.5, 23], [38, 21], [40, 18], [42, 16], [45, 13], [44, 8], [43, 4], [41.5, 2.5], [37, -2],
          [36, -5.5], [37, -9], [39, -9.5], [42, -9], [43.5, -4], [44.5, -1.5], [47, -2.5], [49, -1], [51, 2],
          [53, 5], [54, 8], [57, 10], [60, 11], [63, 11], [66, 14], [70, 20], [71, 28]
        ],
        // British Isles
        [
          [58.5, -3.5], [57.5, -2], [55.5, -1.5], [53, 0.5], [51, 1.5], [50, -0.5], [50.5, -4.5], [51.5, -5],
          [53.5, -3.5], [55, -4.5], [56.5, -6], [58, -5.5], [58.5, -3.5]
        ],
        // Africa
        [
          [36, -5.5], [37, 10], [33, 11], [31, 20], [32, 30], [31, 33], [27, 34], [22, 37], [15, 42], [12, 44],
          [11.5, 51], [9, 50], [4, 48], [0, 42], [-5, 39], [-10, 40], [-15, 40.5], [-20, 35], [-25, 33],
          [-30, 31], [-34, 26], [-34.5, 20], [-33, 18], [-28, 16], [-22, 14], [-15, 12], [-8, 13], [-5, 12],
          [0, 9], [4.5, 7], [5, 2], [5, -3], [4.5, -7], [7, -12], [10, -15], [14, -17], [18, -16], [21, -17],
          [26, -14], [30, -10], [33, -7], [35.5, -6], [36, -5.5]
        ],
        // Madagascar
        [
          [-12, 49.5], [-16, 50], [-20, 48.5], [-25, 47], [-25.5, 45], [-22, 43], [-16, 44], [-13, 48], [-12, 49.5]
        ],
        // Asia / Eurasia / Indian Subcontinent / Middle East
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
        // Sri Lanka
        [
          [9.8, 80.2], [8.5, 81.2], [6.9, 81.8], [5.9, 80.5], [6.9, 79.8], [8.5, 79.8], [9.8, 80.2]
        ],
        // Japan
        [
          [45, 142], [43, 145], [41, 141], [38, 141.5], [35, 140], [33.5, 135], [34, 131], [36, 136], [39, 140],
          [41, 140], [43, 141], [45, 142]
        ],
        // Australia
        [
          [-11, 142], [-15, 145], [-20, 148], [-25, 153], [-30, 153], [-35, 150.5], [-38, 148], [-38.5, 144],
          [-37, 140], [-35, 136], [-32, 132], [-32, 125], [-34, 120], [-34, 115], [-30, 114], [-24, 113],
          [-20, 116], [-17, 122], [-14, 126], [-12, 131], [-12, 136], [-15, 136], [-17, 139], [-14, 141], [-11, 142]
        ],
        // New Zealand
        [
          [-35, 173], [-38, 178], [-41, 175], [-41, 172], [-38, 174], [-35, 173]
        ]
      ];

      // Draw all Continents with Organic Shading & Glowing Border
      CONTINENTS_GEODATA.forEach(poly => {
        drawSmoothCoastline(poly, '#0E1E45', '#38BDF8');
      });

      // Scatter Glowing City / Infrastructure Matrix Nodes across Landmasses
      for (let i = 0; i < 4800; i++) {
        const lat = (Math.random() - 0.5) * 160;
        const lon = (Math.random() - 0.5) * 360;
        const [x, y] = toXY(lat, lon);

        const p = ctx.getImageData(x, y, 1, 1).data;
        if (p[0] > 10 || p[1] > 25 || p[2] > 60) {
          ctx.beginPath();
          ctx.arc(x, y, Math.random() * 2.2 + 0.8, 0, Math.PI * 2);
          ctx.fillStyle = Math.random() > 0.4 ? '#93C5FD' : '#60A5FA';
          ctx.fill();
        }
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture();

    // 3. Globe Sphere Mesh
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.62,
      metalness: 0.18
    });
    const earthMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(earthMesh);

    // 4. Atmospheric Outer Glow (Fresnel rim shader)
    const glowGeo = new THREE.SphereGeometry(globeRadius * 1.14, 48, 48);
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
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.8);
          gl_FragColor = vec4(0.24, 0.65, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glowMesh);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x93C5FD, 2.0);
    dirLight.position.set(5, 4, 6);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x1E40AF, 1.2);
    backLight.position.set(-6, -4, -6);
    scene.add(backLight);

    // 6. 3D Location Markers & Pulsing Radar Beacons for the 4 locations ONLY
    const markersGroup = new THREE.Group();
    globeGroup.add(markersGroup);

    const beaconRings = [];
    const pinsMap = new Map();

    LOCATIONS.forEach(loc => {
      const isMumbai = loc.name === 'Mumbai Office';
      const basePos = latLonToVector3(loc.lat, loc.lon, globeRadius * 1.002);
      const pinHeight = isMumbai ? 0.055 : 0.038;
      const topPos = latLonToVector3(loc.lat, loc.lon, globeRadius + pinHeight);

      // Pin Stem (Cylinder pointing radially outwards)
      const stemGeo = new THREE.CylinderGeometry(isMumbai ? 0.004 : 0.0028, isMumbai ? 0.004 : 0.0028, pinHeight, 8);
      stemGeo.translate(0, pinHeight / 2, 0);
      stemGeo.rotateX(Math.PI / 2);

      const stemMat = new THREE.MeshBasicMaterial({
        color: isMumbai ? 0xF59E0B : 0x38BDF8,
        transparent: true,
        opacity: 0.95
      });
      const stemMesh = new THREE.Mesh(stemGeo, stemMat);
      stemMesh.position.copy(basePos);
      stemMesh.lookAt(basePos.clone().multiplyScalar(2));
      markersGroup.add(stemMesh);

      // Top Beacon Jewel / Sphere
      const headGeo = new THREE.SphereGeometry(isMumbai ? 0.019 : 0.014, 16, 16);
      const headMat = new THREE.MeshBasicMaterial({
        color: isMumbai ? 0xFBBF24 : 0x60A5FA
      });
      const headMesh = new THREE.Mesh(headGeo, headMat);
      headMesh.position.copy(topPos);
      markersGroup.add(headMesh);

      // Concentric Pulsing Radar Rings at base
      const ringGeo1 = new THREE.RingGeometry(0.018, isMumbai ? 0.038 : 0.030, 24);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: isMumbai ? 0xF59E0B : 0x38BDF8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
      });
      const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
      ringMesh1.position.copy(basePos.clone().multiplyScalar(1.001));
      ringMesh1.lookAt(basePos.clone().multiplyScalar(2));
      markersGroup.add(ringMesh1);

      beaconRings.push({ mesh: ringMesh1, scale: 1, maxScale: isMumbai ? 2.8 : 2.2, speed: isMumbai ? 0.024 : 0.018 });

      if (isMumbai) {
        // Second staggered ring for Mumbai prominence
        const ringGeo2 = new THREE.RingGeometry(0.025, 0.048, 24);
        const ringMat2 = new THREE.MeshBasicMaterial({
          color: 0xFCD34D,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6
        });
        const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
        ringMesh2.position.copy(basePos.clone().multiplyScalar(1.002));
        ringMesh2.lookAt(basePos.clone().multiplyScalar(2));
        markersGroup.add(ringMesh2);

        beaconRings.push({ mesh: ringMesh2, scale: 1.4, maxScale: 3.2, speed: 0.02 });
      }

      pinsMap.set(loc.name, { topPos, basePos, headMesh, stemMesh });
    });

    // 7. 3D Great-Circle Network Arcs & Streaming Photons (Elevated above Earth & visible everywhere)
    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);

    const pulseParticles = [];

    // Helper: Compute Great-Circle Arc with Spherical Interpolation
    const createGreatCircleCurve = (coordsFrom, coordsTo, maxAltitude = 0.28, segments = 64) => {
      const v1 = latLonToVector3(coordsFrom[0], coordsFrom[1], globeRadius * 1.002);
      const v2 = latLonToVector3(coordsTo[0], coordsTo[1], globeRadius * 1.002);

      const angle = v1.angleTo(v2);
      const sinAngle = Math.sin(angle);
      const points = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        let p;
        if (sinAngle < 0.001) {
          p = v1.clone().lerp(v2, t);
        } else {
          const w1 = Math.sin((1 - t) * angle) / sinAngle;
          const w2 = Math.sin(t * angle) / sinAngle;
          p = v1.clone().multiplyScalar(w1).add(v2.clone().multiplyScalar(w2));
        }

        // Parabolic altitude above surface: peaks at t = 0.5, strictly above earth for all 0 <= t <= 1
        const alt = Math.sin(t * Math.PI) * maxAltitude;
        points.push(p.normalize().multiplyScalar(globeRadius + alt));
      }

      return new THREE.CatmullRomCurve3(points);
    };

    ARCS_DATA.forEach(arc => {
      const curve = createGreatCircleCurve(arc.from, arc.to, arc.altitude, 64);
      const points = curve.getPoints(90);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

      const curveMat = new THREE.LineBasicMaterial({
        color: arc.color,
        transparent: true,
        opacity: 0.95,
        depthTest: false,
        depthWrite: false
      });

      const curveMesh = new THREE.Line(curveGeo, curveMat);
      curveMesh.renderOrder = 10;
      arcsGroup.add(curveMesh);

      // Glowing Data Photon
      const pulseGeo = new THREE.SphereGeometry(0.015, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        depthTest: false,
        depthWrite: false
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.renderOrder = 12;
      arcsGroup.add(pulseMesh);

      pulseParticles.push({
        mesh: pulseMesh,
        curve: curve,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.003
      });
    });

    // 8. Pointer Drag & Touch Handling
    const onPointerDown = (e) => {
      pointerInteracting.current = true;
      pointerStart.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!pointerInteracting.current) return;
      const deltaX = e.clientX - pointerStart.current.x;
      const deltaY = e.clientY - pointerStart.current.y;
      pointerStart.current = { x: e.clientX, y: e.clientY };

      targetRotation.current.y += deltaX * 0.005;
      targetRotation.current.x += deltaY * 0.005;
      // Clamp vertical tilt
      targetRotation.current.x = Math.max(-0.85, Math.min(0.85, targetRotation.current.x));
    };

    const onPointerUp = () => {
      pointerInteracting.current = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      targetZoom.current += e.deltaY * 0.0015;
      targetZoom.current = Math.max(2.1, Math.min(3.6, targetZoom.current));
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    domEl.addEventListener('wheel', onWheel, { passive: false });

    // 9. Animation Loop
    const animate = () => {
      reqAnimRef.current = requestAnimationFrame(animate);

      // Auto-spin gently if enabled and user is not dragging
      if (isAutoSpinning.current && !pointerInteracting.current) {
        targetRotation.current.y += 0.0018;
      }

      // Smooth damping interpolation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.055;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.055;
      currentZoom.current += (targetZoom.current - currentZoom.current) * 0.08;

      globeGroup.rotation.x = currentRotation.current.x;
      globeGroup.rotation.y = currentRotation.current.y;
      camera.position.z = currentZoom.current;

      // Animate Beacon Radar Rings
      beaconRings.forEach(beacon => {
        beacon.scale += beacon.speed;
        if (beacon.scale > beacon.maxScale) {
          beacon.scale = 1;
        }
        beacon.mesh.scale.set(beacon.scale, beacon.scale, 1);
        beacon.mesh.material.opacity = Math.max(0, 1 - (beacon.scale - 1) / (beacon.maxScale - 1));
      });

      // Animate Arcs Data Pulses
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
      const h = containerRef.current.clientHeight || 460;
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
      domEl.removeEventListener('wheel', onWheel);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [LOCATIONS, ARCS_DATA]);

  const toggleAutoSpin = () => {
    isAutoSpinning.current = !isAutoSpinning.current;
    setAutoSpin(isAutoSpinning.current);
  };

  const handleCenterMumbai = () => {
    const mumbai = LOCATIONS.find(l => l.name === 'Mumbai Office');
    if (mumbai) {
      rotateToOffice(mumbai);
      if (onSelectLocation) onSelectLocation('Mumbai Office');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        backgroundColor: '#020617',
        borderRadius: '12px',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), inset 0 0 80px rgba(10, 28, 71, 0.6)',
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
          backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.22) 1.2px, transparent 0)',
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
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(14, 30, 69, 0.15) 60%, transparent 80%)',
          filter: 'blur(32px)',
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
          gap: '10px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(2, 6, 23, 0.88)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          color: '#FFFFFF',
          fontSize: '0.78rem',
          fontWeight: 600,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
          pointerEvents: 'none'
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 10px #10B981' }} />
        <span>Live 3D Earth Network</span>
        <span style={{ color: 'rgba(255, 255, 255, 0.35)' }}>|</span>
        <span style={{ color: '#38BDF8', fontSize: '0.72rem' }}>4 Corporate Locations</span>
      </div>

      {/* Top Right: Interactive Action Controls */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '18px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <button
          onClick={handleCenterMumbai}
          title="Focus on Mumbai Office"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '6px',
            backgroundColor: activeLocation === 'Mumbai Office' ? 'rgba(245, 158, 11, 0.22)' : 'rgba(2, 6, 23, 0.85)',
            border: activeLocation === 'Mumbai Office' ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.18)',
            color: activeLocation === 'Mumbai Office' ? '#FCD34D' : '#E2E8F0',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease'
          }}
        >
          <Compass size={14} color="#F59E0B" />
          <span>Pin: Mumbai</span>
        </button>

        <button
          onClick={toggleAutoSpin}
          title={autoSpin ? "Pause Auto-Rotation" : "Resume Auto-Rotation"}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            backgroundColor: 'rgba(2, 6, 23, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: '#CBD5E1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease'
          }}
        >
          {autoSpin ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </div>

      {/* Bottom Left: Pinned Location Callout Card */}
      {activeOffice && (
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '16px',
            zIndex: 10,
            backgroundColor: 'rgba(2, 6, 23, 0.94)',
            backdropFilter: 'blur(16px)',
            border: activeOffice.name === 'Mumbai Office' ? '1px solid rgba(245, 158, 11, 0.65)' : '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '8px',
            padding: '10px 14px',
            boxShadow: '0 10px 28px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: 'calc(100% - 220px)',
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              backgroundColor: activeOffice.name === 'Mumbai Office' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(56, 189, 248, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: activeOffice.name === 'Mumbai Office' ? '#F59E0B' : '#38BDF8',
              flexShrink: 0
            }}
          >
            <MapPin size={18} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <span style={{ fontSize: '0.64rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                Pinned Location
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: '3px',
                  backgroundColor: activeOffice.name === 'Mumbai Office' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(56, 189, 248, 0.2)',
                  color: activeOffice.name === 'Mumbai Office' ? '#FCD34D' : '#38BDF8'
                }}
              >
                {activeOffice.badge}
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              {activeOffice.label}
            </div>
            <div style={{ fontSize: '0.74rem', color: '#CBD5E1', lineHeight: '1.3', marginTop: '2px' }}>
              {activeOffice.address}, {activeOffice.zip}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Right: Drag & Zoom Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          right: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '6px',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#94A3B8',
          fontSize: '0.72rem',
          pointerEvents: 'none'
        }}
      >
        <RotateCw size={12} style={{ animation: 'spin 8s linear infinite' }} />
        <span>Drag to rotate • Scroll to zoom</span>
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
