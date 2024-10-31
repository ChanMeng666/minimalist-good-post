import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = ({
                         modelPath,
                         position = 'right-16',
                         containerStyles = {},
                         width = 400,
                         height = 400,
                         title = 'Interactive 3D Model'
                     }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        containerRef.current.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(5, 5, 5);
        scene.add(mainLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-5, 0, -5);
        scene.add(fillLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 0.2);
        topLight.position.set(0, 10, 0);
        scene.add(topLight);

        // Load Model
        const loader = new GLTFLoader();
        let model;

        loader.load(
            modelPath,
            (gltf) => {
                model = gltf.scene;

                // Auto-adjust model size and position
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2 / maxDim;
                model.scale.multiplyScalar(scale);

                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center.multiplyScalar(scale));

                scene.add(model);
                camera.position.z = 4;
                controls.update();
            },
            (progress) => {
                console.log(`Loading: ${(progress.loaded / progress.total * 100)}%`);
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            if (model) {
                model.position.y = Math.sin(Date.now() * 0.001) * 0.1;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            containerRef.current?.removeChild(renderer.domElement);
            controls.dispose();
        };
    }, [modelPath, width, height]);

    // return (
    //     <div
    //         ref={containerRef}
    //         className={`absolute ${position} transform cursor-grab active:cursor-grabbing transition-opacity duration-300 hover:opacity-90 md:block`}
    //         style={{
    //             width: `${width}px`,
    //             height: `${height}px`,
    //             ...containerStyles
    //         }}
    //         title={title}
    //     />
    // );


    return (
        <div
            ref={containerRef}
            className={`${position.includes('relative') ? '' : 'absolute'} ${position} transform cursor-grab active:cursor-grabbing transition-opacity duration-300 hover:opacity-90 md:block`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                ...containerStyles
            }}
            title={title}
        />
    );
};

export default ModelViewer;
