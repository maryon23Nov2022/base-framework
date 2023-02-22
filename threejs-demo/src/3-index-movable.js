import * as THREE from "three";
import { AxesHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);      //x, y, z
scene.add(camera);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// cube.position.x = 3;
cube.position.set(5, 0, 0);

console.log(cube);

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
const axesHelper = new AxesHelper(5);
scene.add(axesHelper);

function render(){
    cube.position.x += 0.01;
    if(cube.position.x > 5){
        cube.position.x = 0;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();