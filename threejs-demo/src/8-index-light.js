import * as THREE from "three";
import { DoubleSide } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);      //x, y, z
scene.add(camera);

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshStandardMaterial();
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.castShadow = true;
scene.add(sphere);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 8);
spotLight.position.set(2, 2, 2);
spotLight.castShadow = true;
spotLight.target = sphere;
spotLight.distance = 16;
spotLight.penumbra = 1;
scene.add(spotLight);

const pointLight = new THREE.PointLight(0xff0000, 32);
pointLight.castShadow = true;
pointLight.distance = 16;
pointLight.decay = 2;
pointLight.penumbra = 1;

const bulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshBasicMaterial({ color: "#ff0000" })
);
bulb.position.set(-2, 2, 2);
bulb.add(pointLight);
scene.add(bulb);

const planeGeometry = new THREE.PlaneGeometry(32, 32);
const plane = new THREE.Mesh(planeGeometry, material);
plane.position.set(0, -2, 0);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.physicallyCorrectLights = true;

document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const axesHelper = new THREE.AxesHelper(12);
scene.add(axesHelper);

const clock = new THREE.Clock();

function render(){
    let time = clock.getElapsedTime();
    bulb.position.x = Math.sin(time) * 2 * Math.sqrt(2);
    bulb.position.z = Math.cos(time) * 2 * Math.sqrt(2);
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