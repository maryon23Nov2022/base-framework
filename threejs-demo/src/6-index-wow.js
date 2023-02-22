import * as THREE from "three";
import { AxesHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import door from "./assets/stickers/door.jpg";
import alphaImage from "./assets/stickers/alpha.jpg";
import ambientOcclusionImage from "./assets/stickers/ambientOcclusion.jpg";
import displacementImage from "./assets/stickers/height.jpg";
import roughnessImage from "./assets/stickers/roughness.jpg";
import metalnessImage from "./assets/stickers/metalness.jpg";
import normalImage from "./assets/stickers/normal.jpg";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 1, 1);      //x, y, z
scene.add(camera);

const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry(1, 1, 1, 128, 128, 128);
geometry.setAttribute(
    "uv2",
    new THREE.BufferAttribute(geometry.attributes.uv.array, 2)
);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(door);
const alphaTexture = textureLoader.load(alphaImage);
const ambientOcclusionTexture = textureLoader.load(ambientOcclusionImage);
const displacementTexture = textureLoader.load(displacementImage);
const roughnessTexture = textureLoader.load(roughnessImage);
const metalnessTexture = textureLoader.load(metalnessImage);
const normalTexture = textureLoader.load(normalImage);

const material = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaMap: alphaTexture,
    side: THREE.DoubleSide,
    aoMap: ambientOcclusionTexture,
    displacementMap: displacementTexture,
    displacementScale: 1 / 16,
    roughnessMap: roughnessTexture,
    metalness: 1.0,
    metalnessMap: metalnessTexture,
    normalMap: normalTexture
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const planeGeometry = new THREE.PlaneGeometry(1, 1, 128, 128);
planeGeometry.setAttribute(
    "uv2",
    new THREE.BufferAttribute(planeGeometry.attributes.uv.array, 2)
);
const plane = new THREE.Mesh(planeGeometry, material);
plane.position.set(1, 0, 0);
scene.add(plane);
// console.log("plane: ", plane);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const axesHelper = new AxesHelper(12);
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