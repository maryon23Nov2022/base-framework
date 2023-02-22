import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import nxImage from "./assets/environmentMaps/1/nx.jpg";
import nyImage from "./assets/environmentMaps/1/ny.jpg";
import nzImage from "./assets/environmentMaps/1/nz.jpg";
import pxImage from "./assets/environmentMaps/1/px.jpg";
import pyImage from "./assets/environmentMaps/1/py.jpg";
import pzImage from "./assets/environmentMaps/1/pz.jpg";
import envImage from "./assets/hdr/002.hdr"

const cubeTextureLoader = new THREE.CubeTextureLoader();
const envMapTexture = cubeTextureLoader.load([
    pxImage, nxImage, pyImage, nyImage, pzImage, nzImage
]);

const rbgeLoader = new RGBELoader();
rbgeLoader.loadAsync(envImage).then(function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});

const scene = new THREE.Scene();
// scene.background = envMapTexture;
// scene.environment = envMapTexture;
//Sets the default environment map for all physical materials in the scene.

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);      //x, y, z
scene.add(camera);

const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshStandardMaterial({
    metalness: 0.7,
    roughness: 0.1,
    // envMap: envMapTexture
    //Set the environment map
});
const sphere = new THREE.Mesh(sphereGeometry, material);
scene.add(sphere);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
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