import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const FuturisticCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(500, 500);
    mountRef.current?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Cube with metallic finish and ornate patterns
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      metalness: 0.7,
      roughness: 0.3,
    });

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // Adding intricate patterns (using textures for simplicity)
    const textureLoader = new THREE.TextureLoader();
    const patternTexture = textureLoader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg');
    cubeMaterial.map = patternTexture;

    scene.add(cube);

    // Central glowing orb
    const orbGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const orbMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(0, 0, 1.1);
    scene.add(orb);

    // Floral design around the orb
    const floralGeometry = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
    const floralMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const floral = new THREE.Mesh(floralGeometry, floralMaterial);
    floral.position.set(0, 0, 1.1);
    floral.rotation.x = Math.PI / 2;
    scene.add(floral);

    // Neon-colored tendrils
    const createTendril = (color: number, startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number) => {
      const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(startX, startY, startZ),
        new THREE.Vector3(endX, endY, endZ),
      ]);
      const tendrilGeometry = new THREE.TubeGeometry(path, 20, 0.1, 8, false);
      const tendrilMaterial = new THREE.MeshBasicMaterial({ color });
      const tendril = new THREE.Mesh(tendrilGeometry, tendrilMaterial);
      scene.add(tendril);
    };

    createTendril(0x00ffff, 0, 0, 0, 2, 2, 2);
    createTendril(0xff00ff, 0, 0, 0, -2, -2, -2);
    createTendril(0xffa500, 0, 0, 0, 2, -2, 2);
    createTendril(0xffff00, 0, 0, 0, -2, 2, -2);

    // Multicolored LED indicators
    const createLED = (color: number, positionX: number, positionY: number, positionZ: number) => {
      const ledGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const ledMaterial = new THREE.MeshBasicMaterial({ color });
      const led = new THREE.Mesh(ledGeometry, ledMaterial);
      led.position.set(positionX, positionY, positionZ);
      scene.add(led);
    };

    createLED(0xff0000, 0.5, 0.5, -0.5);
    createLED(0x00ff00, 0.5, 0.3, -0.5);
    createLED(0x0000ff, 0.5, 0.1, -0.5);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(500, 500);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '500px', height: '500px' }} />;
};

export default FuturisticCube;
