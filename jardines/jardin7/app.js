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
const material = new THREE.MeshNormalMaterial( 
    {flatShading: true,});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -8;

// Array of colors for color changes
const colors = [
    0xff0000, // Red
    0x00ff00, // Green
    0x0000ff, // Blue
    0xffff00, // Yellow
    0xff00ff, // Magenta
    0x00ffff, // Cyan
    0xff8800, // Orange
    0x8800ff, // Purple
    0x00ff88, // Light Green
    0xff0088  // Pink
];

// Function to change material color
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    material.color.setHex(randomColor);
}

// Window resize event listener
window.addEventListener('resize', function() {
    // Update canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Update camera aspect ratio
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    
    // Update renderer size
    renderer.setSize(canvas.width, canvas.height);
    
    // Change color on resize
    changeColor();
});

//renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);

// Initial render
renderer.render(scene, camera);

// Animation function
function animate() {
    requestAnimationFrame(animate);
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
 
    renderer.render(scene, camera);
}

// Start animation
animate();