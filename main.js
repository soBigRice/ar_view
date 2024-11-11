/*
 * @Author: MrRice
 * @Date: 2024-11-08 11:43:00
 * @LastEditors: MrRice 1246333567@qq.com
 * @LastEditTime: 2024-11-11 16:46:03
 * @FilePath: /vr_viewer/main.js
 * @Description:
 * -----小舟从此逝，江海寄余生----
 * Copyright (c) 2024 by 米大饭, All Rights Reserved.
 */
import "./style.css";
import * as THREE from "three";
import * as ZapparThree from "@zappar/zappar-threejs";

const manager = new ZapparThree.LoadingManager();
let scene = new THREE.Scene();

const container = document.getElementById("app");

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

const camera = new ZapparThree.Camera();
// Add the below line for consistency
camera.backgroundTexture.encoding = THREE.sRGBEncoding;
scene.background = camera.backgroundTexture;
container.appendChild(renderer.domElement);

ZapparThree.glContextSet(renderer.getContext());

ZapparThree.permissionRequestUI().then((granted) => {
  if (granted) camera.start();
  else ZapparThree.permissionDeniedUI();
});

renderer.autoClear = false;
let imageTracker = new ZapparThree.ImageTrackerLoader(manager).load(
  "./locate.zpt"
);
let trackerGroup = new ZapparThree.ImageAnchorGroup(camera, imageTracker);
scene.add(trackerGroup);

//创建一个小盒子再这里
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
trackerGroup.add(box); //将盒子添加到trackerGroup中

window.addEventListener("resize", () => {
  renderer.setSize(container.clientWidth, container.clientHeight);

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
});
function animate() {
  requestAnimationFrame(animate);
  camera.updateFrame(renderer);
  renderer.render(scene, camera);
  renderer.clear();
}

animate();
