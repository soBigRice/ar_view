import * as ZapparThree from "@zappar/zappar-threejs";
import * as THREE from "three";
import "./style.css";

// Set up ThreeJS in the usual way
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({ alpha: true });
document.body.appendChild(renderer.domElement);

let camera = new ZapparThree.Camera();
const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
};

window.addEventListener("resize", resize);

// The Zappar library needs the WebGL context to process camera images
// Use this function to set your context
ZapparThree.glContextSet(renderer.getContext());

// Create a camera and set the scene background to the camera's backgroundTexture
scene.background = camera.backgroundTexture;

// Request camera permissions and start the camera
ZapparThree.permissionRequestUI().then((granted) => {
  if (granted) camera.start();
  else ZapparThree.permissionDeniedUI();
});

// Set up a tracker, in this case an image tracker
let imageTracker = new ZapparThree.ImageTrackerLoader().load("./locate.zpt");
let trackerGroup = new ZapparThree.ImageAnchorGroup(camera, imageTracker);
scene.add(trackerGroup);

//创建一个盒子放进去
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
trackerGroup.add(box);

// Place any 3D content you'd like tracked from the image into the trackerGroup

function animate() {
  // Ask the browser to call this function again next frame
  requestAnimationFrame(animate);

  // The Zappar camera should have updateFrame called every frame
  camera.updateFrame(renderer);

  renderer.render(scene, camera);
}
resize();

// Start things off
animate();
