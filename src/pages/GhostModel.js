// src/pages/GhostModel.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const GhostModel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(400, 400);  // 增加尺寸以更好展示模型
        renderer.setClearColor(0x000000, 0);  // 透明背景
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        containerRef.current.appendChild(renderer.domElement);

        // 添加轨道控制器
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;  // 添加阻尼效果
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.enableZoom = false;     // 禁用缩放
        controls.enablePan = false;      // 禁用平移

        // 灯光设置
        const addLights = () => {
            // 环境光
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            // 主要定向光
            const mainLight = new THREE.DirectionalLight(0xffffff, 1);
            mainLight.position.set(5, 5, 5);
            scene.add(mainLight);

            // 补光
            const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
            fillLight.position.set(-5, 0, -5);
            scene.add(fillLight);

            // 顶光
            const topLight = new THREE.DirectionalLight(0xffffff, 0.2);
            topLight.position.set(0, 10, 0);
            scene.add(topLight);
        };

        addLights();

        // 加载模型
        const loader = new GLTFLoader();
        let model;

        loader.load(
            '/models/ghost_of_tsushiito.glb',  // 模型路径
            (gltf) => {
                model = gltf.scene;

                // 调整模型位置和大小
                model.scale.set(1, 1, 1);  // 根据实际模型大小调整
                model.position.set(0, 0, 0);

                // 如果模型太大或太小，调整缩放
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2 / maxDim;  // 将模型缩放到合适大小
                model.scale.multiplyScalar(scale);

                // 垂直居中
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center.multiplyScalar(scale));

                scene.add(model);

                // 调整相机位置以适应模型
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

        // 动画循环
        const animate = () => {
            requestAnimationFrame(animate);

            // 更新控制器
            controls.update();

            // 如果模型已加载，添加漂浮动画
            if (model) {
                model.position.y = Math.sin(Date.now() * 0.001) * 0.1;  // 上下漂浮
            }

            renderer.render(scene, camera);
        };

        animate();

        // 处理窗口大小变化
        const handleResize = () => {
            camera.aspect = 1;
            camera.updateProjectionMatrix();
            renderer.setSize(400, 400);
        };

        window.addEventListener('resize', handleResize);

        // 清理函数
        return () => {
            window.removeEventListener('resize', handleResize);
            containerRef.current?.removeChild(renderer.domElement);
            controls.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute top-1/2 right-16 -translate-y-1/2 transform cursor-grab active:cursor-grabbing transition-opacity duration-300 hover:opacity-90 md:block"
            style={{ width: '400px', height: '400px' }}
            title="Interactive 3D Model"
        />
    );
};

export default GhostModel;
