console.log('sesion 05. ejercicio 1 geometrias');
console.log(THREE);

// configurar el canvas
const canvas = document.getElementById('lienzo');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//elementos basicos


// escena,camara,mesh,renderer



//escena
const scene = new THREE.Scene();

//camara
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);


//mesh
const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshBasicMaterial( 
    {flatShading: true,
    specular: "#ffffff",
    shininess: 10,
    color: "#5C95FF",
} );
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -5;


//renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);

renderer.render(scene, camera);
function animate() {
    requestAnimationFrame(animate);
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
 
    renderer.render(scene, camera);
 }
 animate();


 