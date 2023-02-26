require.context("../public", true, /.*/, "sync");

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water2";
import Water_1_M_Normal from "./assets/island/water/Water_1_M_Normal.jpg";
import Water_2_M_Normal from "./assets/island/water/Water_2_M_Normal.jpg";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import skyImage from "./assets/island/050.hdr";
import videoSrc from "./assets/island/sky.mp4";
import glbSrc from "./assets/island/model/island.glb";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2048);
camera.position.set(128, 128, 128);      //x, y, z
scene.add(camera);

const light = new THREE.DirectionalLight(0xffffff, 4);
scene.add(light);

const video = document.createElement("video")
video.src = videoSrc;
video.loop = true;
video.muted = true;
video.play();

// sky
const skyTexture = new THREE.VideoTexture(video);
const skyGeometry = new THREE.SphereGeometry(1024, 64, 64);
skyGeometry.scale(1, 1, -1);
const skyMaterial = new THREE.MeshBasicMaterial({
    map: skyTexture
});
skyMaterial.map.needsUpdate = true;
const sky = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(sky);

const hdrLoader = new RGBELoader();
hdrLoader.loadAsync(skyImage).then(function(texture){
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});

// water
const waterGeometry = new THREE.CircleGeometry(512, 64);
const water = new Water(waterGeometry, {
  textureWidth: 1024,
  textureHeight: 1024,
  color: 0xeeeeff,
  flowDirection: new THREE.Vector2(1, 1),
  scale: 1,
  normalMap0: new THREE.TextureLoader().load(Water_1_M_Normal),
  normalMap1: new THREE.TextureLoader().load(Water_2_M_Normal),
});
water.rotation.x = -Math.PI / 2;
water.position.y = 3;
scene.add(water);

// GLTFLoader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

require.context("!!file-loader?name=draco/[name].[ext]!./assets/draco", true, /.*/, "sync");
dracoLoader.setDecoderPath("./draco/");
loader.setDRACOLoader(dracoLoader);
loader.load(glbSrc, (gltf) => {
  scene.add(gltf.scene);
});

const renderer = new THREE.WebGLRenderer({
  // antialias: true,
  logarithmicDepthBuffer: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.physicallyCorrectLights = true;

const res = renderer.domElement;
document.body.appendChild(res);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, res);
controls.enableDamping = true;

const axesHelper = new THREE.AxesHelper(12);
scene.add(axesHelper);

function render(){
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();

window.addEventListener("resize", function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
})