// // import React, { useEffect, useRef } from 'react';
// // import * as THREE from 'three';
// //
// // const MinimalistCube = () => {
// //     const containerRef = useRef(null);
// //
// //     useEffect(() => {
// //         if (!containerRef.current) return;
// //
// //         // Scene setup
// //         const scene = new THREE.Scene();
// //         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// //         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// //
// //         renderer.setSize(300, 300);
// //         containerRef.current.appendChild(renderer.domElement);
// //
// //         // Create cube
// //         const geometry = new THREE.BoxGeometry(2, 2, 2);
// //         const material = new THREE.MeshPhongMaterial({
// //             color: 0xeeeeee,
// //             wireframe: false,
// //             transparent: true,
// //             opacity: 0.8,
// //         });
// //         const cube = new THREE.Mesh(geometry, material);
// //         scene.add(cube);
// //
// //         // Add lights
// //         const light = new THREE.DirectionalLight(0xffffff, 1);
// //         light.position.set(1, 1, 1);
// //         scene.add(light);
// //         scene.add(new THREE.AmbientLight(0x404040));
// //
// //         camera.position.z = 5;
// //
// //         // Animation
// //         let mouseX = 0;
// //         let mouseY = 0;
// //
// //         const handleMouseMove = (event) => {
// //             const rect = containerRef.current.getBoundingClientRect();
// //             mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
// //             mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
// //         };
// //
// //         containerRef.current.addEventListener('mousemove', handleMouseMove);
// //
// //         const animate = () => {
// //             requestAnimationFrame(animate);
// //
// //             cube.rotation.x += 0.005;
// //             cube.rotation.y += 0.005;
// //
// //             // Smooth follow mouse
// //             cube.rotation.x += (mouseY * 0.5 - cube.rotation.x) * 0.05;
// //             cube.rotation.y += (mouseX * 0.5 - cube.rotation.y) * 0.05;
// //
// //             renderer.render(scene, camera);
// //         };
// //
// //         animate();
// //
// //         return () => {
// //             containerRef.current?.removeEventListener('mousemove', handleMouseMove);
// //             containerRef.current?.removeChild(renderer.domElement);
// //         };
// //     }, []);
// //
// //     return (
// //         <div
// //             ref={containerRef}
// //             className="absolute top-1/2 right-12 -translate-y-1/2 transform transition-opacity duration-300 hover:opacity-75"
// //             style={{ width: '300px', height: '300px' }}
// //         />
// //     );
// // };
// //
// // export default MinimalistCube;
//
//
//
//
// // // src/pages/MinimalistCube.js
// // import React, { useEffect, useRef } from 'react';
// // import * as THREE from 'three';
// //
// // const MinimalistStar = () => {
// //     const containerRef = useRef(null);
// //
// //     useEffect(() => {
// //         if (!containerRef.current) return;
// //
// //         // Scene setup
// //         const scene = new THREE.Scene();
// //         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// //         const renderer = new THREE.WebGLRenderer({
// //             antialias: true,
// //             alpha: true,
// //             powerPreference: "high-performance"
// //         });
// //
// //         renderer.setPixelRatio(window.devicePixelRatio);
// //         renderer.setSize(300, 300);
// //         containerRef.current.appendChild(renderer.domElement);
// //
// //         // Create star geometry
// //         const createStarGeometry = () => {
// //             const geometry = new THREE.IcosahedronGeometry(1.5, 0);
// //             // Modify vertices to create star-like shape
// //             const vertices = geometry.attributes.position;
// //             for (let i = 0; i < vertices.count; i++) {
// //                 const x = vertices.getX(i);
// //                 const y = vertices.getY(i);
// //                 const z = vertices.getZ(i);
// //                 const length = Math.sqrt(x * x + y * y + z * z);
// //                 const factor = length < 1 ? 0.75 : 1.2;
// //                 vertices.setXYZ(i, x * factor, y * factor, z * factor);
// //             }
// //             return geometry;
// //         };
// //
// //         // Create gradient texture
// //         const createGradientTexture = () => {
// //             const canvas = document.createElement('canvas');
// //             canvas.width = 256;
// //             canvas.height = 256;
// //             const ctx = canvas.getContext('2d');
// //             const gradient = ctx.createLinearGradient(0, 0, 256, 256);
// //
// //             // Light mode colors
// //             const isLightMode = document.documentElement.getAttribute('data-theme') !== 'dark';
// //             if (isLightMode) {
// //                 gradient.addColorStop(0, '#e0e0e0');
// //                 gradient.addColorStop(0.5, '#f5f5f5');
// //                 gradient.addColorStop(1, '#ffffff');
// //             } else {
// //                 gradient.addColorStop(0, '#1a1a1a');
// //                 gradient.addColorStop(0.5, '#2d2d2d');
// //                 gradient.addColorStop(1, '#404040');
// //             }
// //
// //             ctx.fillStyle = gradient;
// //             ctx.fillRect(0, 0, 256, 256);
// //
// //             const texture = new THREE.CanvasTexture(canvas);
// //             texture.needsUpdate = true;
// //             return texture;
// //         };
// //
// //         // Create materials
// //         const createMaterials = () => {
// //             const texture = createGradientTexture();
// //             const material = new THREE.MeshPhysicalMaterial({
// //                 map: texture,
// //                 metalness: 0.2,
// //                 roughness: 0.1,
// //                 envMapIntensity: 1,
// //                 clearcoat: 1.0,
// //                 clearcoatRoughness: 0.1,
// //                 wireframe: false,
// //                 transparent: true,
// //                 opacity: 0.9,
// //             });
// //
// //             const edgeMaterial = new THREE.LineBasicMaterial({
// //                 color: document.documentElement.getAttribute('data-theme') !== 'dark'
// //                     ? '#d4d4d4'
// //                     : '#404040',
// //                 transparent: true,
// //                 opacity: 0.5,
// //             });
// //
// //             return { material, edgeMaterial };
// //         };
// //
// //         // Create star mesh
// //         const geometry = createStarGeometry();
// //         const { material, edgeMaterial } = createMaterials();
// //         const star = new THREE.Mesh(geometry, material);
// //
// //         // Add edges
// //         const edges = new THREE.EdgesGeometry(geometry);
// //         const line = new THREE.LineSegments(edges, edgeMaterial);
// //         star.add(line);
// //
// //         scene.add(star);
// //
// //         // Add lights
// //         const addLights = () => {
// //             const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// //             scene.add(ambientLight);
// //
// //             const pointLight1 = new THREE.PointLight(0xffffff, 1);
// //             pointLight1.position.set(5, 5, 5);
// //             scene.add(pointLight1);
// //
// //             const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
// //             pointLight2.position.set(-5, -5, -5);
// //             scene.add(pointLight2);
// //         };
// //
// //         addLights();
// //         camera.position.z = 5;
// //
// //         // Animation variables
// //         let mouseX = 0;
// //         let mouseY = 0;
// //         let targetRotationX = 0;
// //         let targetRotationY = 0;
// //         let currentRotationX = 0;
// //         let currentRotationY = 0;
// //
// //         // Handle mouse/touch movement
// //         const handlePointerMove = (event) => {
// //             const rect = containerRef.current.getBoundingClientRect();
// //             mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
// //             mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
// //
// //             targetRotationX = mouseY * 0.5;
// //             targetRotationY = mouseX * 0.5;
// //         };
// //
// //         // Handle window resize
// //         const handleResize = () => {
// //             camera.aspect = 1;
// //             camera.updateProjectionMatrix();
// //             renderer.setSize(300, 300);
// //         };
// //
// //         // Automatic rotation when no mouse interaction
// //         let autoRotationSpeed = 0.005;
// //         let lastInteractionTime = 0;
// //         const AUTO_ROTATION_DELAY = 2000; // 2 seconds
// //
// //         const animate = () => {
// //             requestAnimationFrame(animate);
// //
// //             // Check if we should use auto-rotation
// //             const currentTime = Date.now();
// //             if (currentTime - lastInteractionTime > AUTO_ROTATION_DELAY) {
// //                 star.rotation.y += autoRotationSpeed;
// //             } else {
// //                 // Smooth interpolation for mouse/touch interaction
// //                 currentRotationX += (targetRotationX - currentRotationX) * 0.05;
// //                 currentRotationY += (targetRotationY - currentRotationY) * 0.05;
// //
// //                 star.rotation.x = currentRotationX;
// //                 star.rotation.y = currentRotationY;
// //             }
// //
// //             // Gentle floating animation
// //             star.position.y = Math.sin(Date.now() * 0.001) * 0.1;
// //
// //             renderer.render(scene, camera);
// //         };
// //
// //         // Event listeners
// //         containerRef.current.addEventListener('pointermove', (e) => {
// //             handlePointerMove(e);
// //             lastInteractionTime = Date.now();
// //         });
// //         window.addEventListener('resize', handleResize);
// //
// //         animate();
// //
// //         // Cleanup
// //         return () => {
// //             window.removeEventListener('resize', handleResize);
// //             containerRef.current?.removeEventListener('pointermove', handlePointerMove);
// //             containerRef.current?.removeChild(renderer.domElement);
// //             geometry.dispose();
// //             material.dispose();
// //             edgeMaterial.dispose();
// //         };
// //     }, []);
// //
// //     return (
// //         <div
// //             ref={containerRef}
// //             className="absolute top-1/2 right-12 -translate-y-1/2 transform cursor-pointer transition-opacity duration-300 hover:opacity-75 md:block"
// //             style={{ width: '300px', height: '300px' }}
// //             title="交互式3D星形"
// //         />
// //     );
// // };
// //
// // export default MinimalistStar;
//
//
//
//
// // src/pages/MinimalistCube.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
//
// const MinimalistStar = () => {
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         if (!containerRef.current) return;
//
//         // Scene setup
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer({
//             antialias: true,
//             alpha: true,
//             powerPreference: "high-performance"
//         });
//
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.setSize(300, 300);
//         containerRef.current.appendChild(renderer.domElement);
//
//         // Create star geometry with more detail
//         const createStarGeometry = () => {
//             const geometry = new THREE.IcosahedronGeometry(1.5, 1);
//             const vertices = geometry.attributes.position;
//             for (let i = 0; i < vertices.count; i++) {
//                 const x = vertices.getX(i);
//                 const y = vertices.getY(i);
//                 const z = vertices.getZ(i);
//                 const length = Math.sqrt(x * x + y * y + z * z);
//                 const factor = length < 1 ? 0.75 : 1.2;
//                 vertices.setXYZ(i, x * factor, y * factor, z * factor);
//             }
//             return geometry;
//         };
//
//         // Create gradient texture with gold colors
//         const createGoldGradientTexture = () => {
//             const canvas = document.createElement('canvas');
//             canvas.width = 512;
//             canvas.height = 512;
//             const ctx = canvas.getContext('2d');
//             const gradient = ctx.createLinearGradient(0, 0, 512, 512);
//
//             // Gold gradient colors
//             const isLightMode = document.documentElement.getAttribute('data-theme') !== 'dark';
//             if (isLightMode) {
//                 gradient.addColorStop(0, '#ffd700');    // Gold
//                 gradient.addColorStop(0.5, '#f4d03f');  // Lighter gold
//                 gradient.addColorStop(1, '#ffeb3b');    // Yellow gold
//             } else {
//                 gradient.addColorStop(0, '#b8860b');    // Dark gold
//                 gradient.addColorStop(0.5, '#daa520');  // Golden rod
//                 gradient.addColorStop(1, '#ffd700');    // Gold
//             }
//
//             ctx.fillStyle = gradient;
//             ctx.fillRect(0, 0, 512, 512);
//
//             const texture = new THREE.CanvasTexture(canvas);
//             texture.needsUpdate = true;
//             return texture;
//         };
//
//         // Create particle system
//         const createParticleSystem = () => {
//             const particlesGeometry = new THREE.BufferGeometry();
//             const particleCount = 100;
//             const positions = new Float32Array(particleCount * 3);
//             const colors = new Float32Array(particleCount * 3);
//
//             for (let i = 0; i < particleCount; i++) {
//                 const i3 = i * 3;
//                 positions[i3] = (Math.random() - 0.5) * 5;
//                 positions[i3 + 1] = (Math.random() - 0.5) * 5;
//                 positions[i3 + 2] = (Math.random() - 0.5) * 5;
//
//                 colors[i3] = 1;
//                 colors[i3 + 1] = 0.8 + Math.random() * 0.2; // Gold tint
//                 colors[i3 + 2] = 0;
//             }
//
//             particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//             particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//
//             const particlesMaterial = new THREE.PointsMaterial({
//                 size: 0.05,
//                 vertexColors: true,
//                 transparent: true,
//                 opacity: 0.6,
//             });
//
//             return new THREE.Points(particlesGeometry, particlesMaterial);
//         };
//
//         // Create materials with gold effect
//         const createMaterials = () => {
//             const texture = createGoldGradientTexture();
//             const material = new THREE.MeshPhysicalMaterial({
//                 map: texture,
//                 metalness: 0.8,
//                 roughness: 0.1,
//                 envMapIntensity: 1,
//                 clearcoat: 1.0,
//                 clearcoatRoughness: 0.1,
//                 wireframe: false,
//                 transparent: true,
//                 opacity: 0.9,
//             });
//
//             const edgeMaterial = new THREE.LineBasicMaterial({
//                 color: 0xffd700,
//                 transparent: true,
//                 opacity: 0.7,
//             });
//
//             return { material, edgeMaterial };
//         };
//
//         // Create star mesh and particles
//         const geometry = createStarGeometry();
//         const { material, edgeMaterial } = createMaterials();
//         const star = new THREE.Mesh(geometry, material);
//         const particles = createParticleSystem();
//
//         // Add edges
//         const edges = new THREE.EdgesGeometry(geometry);
//         const line = new THREE.LineSegments(edges, edgeMaterial);
//         star.add(line);
//
//         // Add everything to scene
//         scene.add(star);
//         scene.add(particles);
//
//         // Enhanced lighting setup
//         const addLights = () => {
//             const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//             scene.add(ambientLight);
//
//             const pointLight1 = new THREE.PointLight(0xffd700, 1);
//             pointLight1.position.set(5, 5, 5);
//             scene.add(pointLight1);
//
//             const pointLight2 = new THREE.PointLight(0xffeb3b, 0.5);
//             pointLight2.position.set(-5, -5, -5);
//             scene.add(pointLight2);
//
//             // Add spotlight for dramatic effect
//             const spotlight = new THREE.SpotLight(0xffffff, 0.5);
//             spotlight.position.set(0, 5, 0);
//             spotlight.angle = Math.PI / 4;
//             spotlight.penumbra = 0.1;
//             spotlight.decay = 2;
//             spotlight.distance = 20;
//             scene.add(spotlight);
//         };
//
//         addLights();
//         camera.position.z = 5;
//
//         // Animation variables
//         let mouseX = 0;
//         let mouseY = 0;
//         let targetRotationX = 0;
//         let targetRotationY = 0;
//         let currentRotationX = 0;
//         let currentRotationY = 0;
//         let isClicked = false;
//
//         // Handle mouse/touch movement
//         const handlePointerMove = (event) => {
//             const rect = containerRef.current.getBoundingClientRect();
//             mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//             mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
//
//             targetRotationX = mouseY * 0.5;
//             targetRotationY = mouseX * 0.5;
//         };
//
//         // Handle click events
//         const handleClick = () => {
//             isClicked = !isClicked;
//             if (isClicked) {
//                 star.scale.set(1.2, 1.2, 1.2);
//                 particles.material.opacity = 0.8;
//             } else {
//                 star.scale.set(1, 1, 1);
//                 particles.material.opacity = 0.6;
//             }
//         };
//
//         // Handle window resize
//         const handleResize = () => {
//             camera.aspect = 1;
//             camera.updateProjectionMatrix();
//             renderer.setSize(300, 300);
//         };
//
//         let autoRotationSpeed = 0.005;
//         let lastInteractionTime = 0;
//         const AUTO_ROTATION_DELAY = 2000;
//
//         // Animate particles
//         const animateParticles = () => {
//             const positions = particles.geometry.attributes.position.array;
//             for (let i = 0; i < positions.length; i += 3) {
//                 positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
//                 positions[i + 1] += Math.cos(Date.now() * 0.001 + i) * 0.001;
//                 positions[i + 2] += Math.sin(Date.now() * 0.001 + i) * 0.001;
//             }
//             particles.geometry.attributes.position.needsUpdate = true;
//         };
//
//         const animate = () => {
//             requestAnimationFrame(animate);
//
//             const currentTime = Date.now();
//             if (currentTime - lastInteractionTime > AUTO_ROTATION_DELAY) {
//                 star.rotation.y += autoRotationSpeed;
//                 particles.rotation.y -= autoRotationSpeed * 0.5;
//             } else {
//                 currentRotationX += (targetRotationX - currentRotationX) * 0.05;
//                 currentRotationY += (targetRotationY - currentRotationY) * 0.05;
//
//                 star.rotation.x = currentRotationX;
//                 star.rotation.y = currentRotationY;
//                 particles.rotation.x = -currentRotationX * 0.5;
//                 particles.rotation.y = -currentRotationY * 0.5;
//             }
//
//             // Floating animation
//             star.position.y = Math.sin(Date.now() * 0.001) * 0.1;
//             particles.position.y = -Math.sin(Date.now() * 0.001) * 0.1;
//
//             animateParticles();
//             renderer.render(scene, camera);
//         };
//
//         // Event listeners
//         containerRef.current.addEventListener('pointermove', (e) => {
//             handlePointerMove(e);
//             lastInteractionTime = Date.now();
//         });
//         containerRef.current.addEventListener('click', handleClick);
//         window.addEventListener('resize', handleResize);
//
//         animate();
//
//         // Cleanup
//         return () => {
//             window.removeEventListener('resize', handleResize);
//             containerRef.current?.removeEventListener('pointermove', handlePointerMove);
//             containerRef.current?.removeEventListener('click', handleClick);
//             containerRef.current?.removeChild(renderer.domElement);
//             geometry.dispose();
//             material.dispose();
//             edgeMaterial.dispose();
//             particles.geometry.dispose();
//             particles.material.dispose();
//         };
//     }, []);
//
//     return (
//         <div
//             ref={containerRef}
//             className="absolute top-1/2 right-12 -translate-y-1/2 transform cursor-pointer transition-opacity duration-300 hover:opacity-90 md:block"
//             style={{ width: '300px', height: '300px' }}
//             title="点击互动的金色星形"
//         />
//     );
// };
//
// export default MinimalistStar;
