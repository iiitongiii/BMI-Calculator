// console.log(THREE)
// console.log(THREE.OrbitControls)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
camera.position.y = 0;
camera.position.x = 0;

const displacementMap_01 = new THREE.TextureLoader().load('./img/displacementMap_01.jpg');

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0)

const geometry = new THREE.TorusGeometry(0.4, 0.15, 32, 64);
const material = new THREE.MeshStandardMaterial({
  displacementMap: displacementMap_01,
  displacementScale: 60 * 0.001,
  wireframe: true
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.y = 1

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('mousemove', (event) => {

  gsap.to(camera.position, {
    x: event.clientX / window.innerWidth * 2 - 1,
    duration: 3
  })
  gsap.to(camera.position, {
    y: -(event.clientY / window.innerWidth) * 2 + 1,
    duration: 3
  })

})


let myCanvas = document.body.appendChild(renderer.domElement);
myCanvas.style.position = "absolute"
myCanvas.style.overflow = "hidden"


function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;


  renderer.render(scene, camera);
}
animate();


//* OrbitControls
const controls = new THREE.OrbitControls(camera, myCanvas);
controls.enableDamping = true;
controls.enabled = false;

//grid helper
// const gridHelper = new THREE.GridHelper(20, 20);
// scene.add(gridHelper);


//light

const light = new THREE.DirectionalLight(0xFFFFFF);
const helper = new THREE.DirectionalLightHelper(light, 1);
scene.add(light);
light.intensity = 1.3;