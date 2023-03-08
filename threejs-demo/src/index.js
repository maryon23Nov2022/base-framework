require.context("../public", true, /.*/, "sync");
import "./index.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import backImage from "./assets/ship/25s.jpg";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.125, 512);
camera.position.set(0, 0, 16);      //x, y, z
scene.add(camera);

const envTexture = new THREE.TextureLoader().load(backImage);
envTexture.mapping = THREE.EquirectangularReflectionMapping;
scene.background = envTexture;
scene.environment = envTexture;

const light_up = new THREE.DirectionalLight(0xffffff, 4);
scene.add(light_up);
const light_down = new THREE.DirectionalLight(0xffffff, 4);
light_down.position.set(0, -1024, 0);
scene.add(light_down);
const light_left = new THREE.DirectionalLight(0xffffff, 4);
light_left.position.set(-1024, 0, 0);
scene.add(light_left);

// GLTFLoader
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
require.context("!!file-loader?name=draco/[name].[ext]!./assets/draco", true, /.*/, "sync");
dracoLoader.setDecoderPath("./draco/");
loader.setDRACOLoader(dracoLoader);

// ships
let ships = [];
loader.load(require("./assets/ship/model/xz.glb"), (gltf) => {
  ships[0] = gltf.scene;
  ships[0].scale.set(0.25, 0.25, 0.25);
  ships[0].position.set(8, 0, 0);
  scene.add(ships[0]);
});
loader.load(require("./assets/ship/model/xq6.glb"), (gltf) => {
  ships[1] = gltf.scene;
  ships[1].scale.set(0.125, 0.125, 0.125);
  ships[1].position.set(8, -64, 0);
  scene.add(ships[1]);
});

// particals
const particalsGeometry = new THREE.BufferGeometry();
const count = 256;
const positionArray = new Float32Array(count * 3);
// const radius = 128, radiusSquare = radius * radius;
const xlen = 1024, ylen = 512, zlen = 1024;
for(let i = 0; i < positionArray.length; i += 3){
  let x, y, z;
  x = (Math.random() - 0.5) * xlen;
  y = (Math.random() - 0.5) * ylen;
  z = (Math.random() - 0.5) * zlen;
  // x = y = z = 0;
  // while(x * x + y * y + z * z < 0.36 * radius * radius){
    // x = Math.asin((Math.random() - 0.5) * 2) / Math.PI * 2 * Math.sqrt(radiusSquare);
    // y = Math.asin((Math.random() - 0.5) * 2) / Math.PI * 2 * Math.sqrt(radiusSquare - x * x);
    // z = Math.asin((Math.random() - 0.5) * 2) / Math.PI * 2 * Math.sqrt(radiusSquare - x * x - y * y);
    // Perhaps it's a wrong formula
  // }
  positionArray[i] = x, positionArray[i + 1] = y, positionArray[i + 2] = z;
}
particalsGeometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));
const particalsMaterial = new THREE.PointsMaterial({ size: 1 / 2 });
const particals = new THREE.Points(particalsGeometry, particalsMaterial);
// particals.position.set(radius / 2, 0, 0);
scene.add(particals);
const particals_copy = new THREE.Points(particalsGeometry, particalsMaterial);
particals_copy.position.set(0, 0, -zlen)
scene.add(particals_copy);
console.log(particals.position.z, particals_copy.position.z);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.physicallyCorrectLights = true;
const res = renderer.domElement;
document.querySelector("#canvas-container").appendChild(res);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, res);
// controls.enableZoom = false;
controls.enableDamping = true;

const axesHelper = new THREE.AxesHelper(12);
scene.add(axesHelper);

window.addEventListener("resize", function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
});

window.addEventListener("mousemove", function(e){
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;
  ships[0].rotation.set(y * Math.PI / 4, x * Math.PI / 2, 0);
  ships[1].rotation.set(y * Math.PI / 4, x * Math.PI / 2, 0);
  // console.log(e.clientX, x);
});

let curY = 0, desY = 0;

window.addEventListener("wheel", function(e){
  let i = 0;
  for(i = 0; i < ships.length; ++ i){
    if(ships[i].position.y === 0) break;
  }
  // console.log(curY, i, ships[0].position.y);
  if(i === ships.length) return;
  // console.log(e.deltaY, curY, desY);
  if(e.deltaY > 0 && ships[ships.length - 1].position.y !== 0){
    desY = curY - 64;
  } else if(e.deltaY < 0 && ships[0].position.y !== 0){
    desY = curY + 64;
  }
});

const clock = new THREE.Clock();

function render(){
  controls.update();
  if(curY !== desY){
    const dif = (Math.abs(desY - curY) - 32) / 32;
    const v = 32 * Math.PI * Math.sqrt(1 - dif * dif);
    let dis = clock.getDelta() * v;
    if(dis === 0) dis = 1 / 16;
    if(curY < desY) dis = -dis;
    for(let i = 0; i < ships.length; ++ i){
      ships[i].position.y += dis;
    }
    if(dis >= Math.abs(desY - curY)){
      curY = desY;
      for(let i = 0; i < ships.length; ++ i){
        ships[i].position.y = Math.round(ships[i].position.y);
      }
    }
    else curY -= dis;
    // camera.position.y = curY;
    // controls.target = new THREE.Vector3(0, curY, 0)
  }
  particals.position.z += 4;
  particals_copy.position.z += 4;
  if(particals.position.z > zlen) particals.position.z = particals_copy.position.z - zlen;
  if(particals_copy.position.z > zlen) particals_copy.position.z = particals.position.z - zlen;
  // particals.rotation.y = clock.getElapsedTime();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();