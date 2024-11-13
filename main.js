import * as THREE from "three";

import * as THREEx from "./THREEXAR";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setClearColor(new THREE.Color("lightgrey"), 0);
// renderer.setSize(640, 480);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0px";
renderer.domElement.style.left = "0px";
document.body.appendChild(renderer.domElement);

// array of functions for the rendering loop
var onRenderFcts = [];
var arToolkitContext, arMarkerControls;

// init scene and camera
var scene = new THREE.Scene();

//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
// var camera = new THREE.Camera();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
scene.add(camera);

////////////////////////////////////////////////////////////////////////////////
//          handle arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
  // to read from the webcam
  sourceType: "webcam",

  sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480,
  sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640,

  // // to read from an image
  // sourceType : 'image',
  // sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/images/img.jpg',

  // to read from a video
  // sourceType : 'video',
  // sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/videos/headtracking.mp4',
});

arToolkitSource.init(function onReady() {
  arToolkitSource.domElement.addEventListener("canplay", () => {
    console.log(
      "canplay",
      "actual source dimensions",
      arToolkitSource.domElement.videoWidth,
      arToolkitSource.domElement.videoHeight
    );

    initARContext();
  });
  window.arToolkitSource = arToolkitSource;
  setTimeout(() => {
    onResize();
  }, 2000);
});

// handle resize
window.addEventListener("resize", function () {
  onResize();
});

function onResize() {
  arToolkitSource.onResizeElement();
  arToolkitSource.copyElementSizeTo(renderer.domElement);
  if (window.arToolkitContext.arController !== null) {
    arToolkitSource.copyElementSizeTo(
      window.arToolkitContext.arController.canvas
    );
  }

  renderer.setSize(window.innerWidth, window.innerHeight);
}
////////////////////////////////////////////////////////////////////////////////
//          initialize arToolkitContext
////////////////////////////////////////////////////////////////////////////////

function initARContext() {
  // create atToolkitContext
  arToolkitContext = new THREEx.ArToolkitContext({
    cameraParametersUrl: "./camera_para.dat",
    detectionMode: "mono",
  });
  // initialize it
  arToolkitContext.init(() => {
    // copy projection matrix to camera
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());

    arToolkitContext.arController.orientation = getSourceOrientation();
    arToolkitContext.arController.options.orientation = getSourceOrientation();

    console.log("arToolkitContext", arToolkitContext);
    window.arToolkitContext = arToolkitContext;
  });

  // MARKER
  arMarkerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
    type: "pattern",
    // patternUrl: THREEx.ArToolkitContext.baseURL + "../data/data/patt.hiro",
    // patternUrl: "./pattern-marker.patt",
    patternUrl: "./pattern-NB.patt",
    // patternUrl : THREEx.ArToolkitContext.baseURL + '../data/data/patt.kanji',
    // as we controls the camera, set changeMatrixMode: 'cameraTransformMatrix'
    changeMatrixMode: "cameraTransformMatrix",
  });

  scene.visible = false;

  console.log("ArMarkerControls", arMarkerControls);
  window.arMarkerControls = arMarkerControls;
}

function getSourceOrientation() {
  if (!arToolkitSource) {
    return null;
  }

  console.log(
    "actual source dimensions",
    arToolkitSource.domElement.videoWidth,
    arToolkitSource.domElement.videoHeight
  );

  if (
    arToolkitSource.domElement.videoWidth >
    arToolkitSource.domElement.videoHeight
  ) {
    console.log("source orientation", "landscape");
    return "landscape";
  } else {
    console.log("source orientation", "portrait");
    return "portrait";
  }
}

// update artoolkit on every frame
onRenderFcts.push(function () {
  if (!arToolkitContext || !arToolkitSource || !arToolkitSource.ready) {
    return;
  }

  arToolkitContext.update(arToolkitSource.domElement);

  // update scene.visible if the marker is seen
  scene.visible = camera.visible;
});

//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////

// add a torus knot
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshNormalMaterial({
//   transparent: true,
//   opacity: 0.5,
//   side: THREE.DoubleSide,
// });
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = geometry.parameters.height / 2;
// scene.add(mesh);

// var geometry = new THREE.TorusKnotGeometry(0.3, 0.1, 64, 16);
// var material = new THREE.MeshNormalMaterial();
// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.y = 0.5;
// scene.add(mesh);

// onRenderFcts.push(function (delta) {
//   // mesh.rotation.x += Math.PI * delta;
// });

const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);

// const materialMap = new Map();

//加载一个FBX的模型
const loader = new FBXLoader();
loader.load("./model/build.fbx", (res) => {
  res.scale.setScalar(0.01);
  res.rotateX(-Math.PI / 2);
  // res.traverse((child) => {
  //   if (child.isMesh) {
  //     if (!materialMap.has(child.material.uuid)) {
  //       const newMat = new THREE.MeshBasicMaterial();
  //       Object.assign(newMat, child.material);
  //       materialMap.set(child.material.uuid, newMat);
  //     } else {
  //       child.material = materialMap.get(child.material.uuid);
  //     }
  //   }
  // });
  scene.add(res);
});

//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// render the scene
onRenderFcts.push(function () {
  renderer.render(scene, camera);
});

// run the rendering loop
var lastTimeMsec = null;
requestAnimationFrame(function animate(nowMsec) {
  // keep looping
  requestAnimationFrame(animate);
  // measure time
  lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
  var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
  lastTimeMsec = nowMsec;
  // call each update function
  onRenderFcts.forEach(function (onRenderFct) {
    onRenderFct(deltaMsec / 1000, nowMsec / 1000);
  });
});
