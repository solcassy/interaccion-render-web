
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x222222);
document.body.appendChild(renderer.domElement);

let currentMaterialIndex = 0;
let currentColorIndex = 0;
let resizeCount = 0;

const colors = [
    0xff6b6b, // Rojo
    0x4ecdc4, // Turquesa
    0x45b7d1  // Azul
];


const materials = [
 
    new THREE.MeshBasicMaterial({ color: colors[0] }),
    
    
    new THREE.MeshBasicMaterial({ 
        color: colors[1], 
        wireframe: true 
    }),
    
  
    new THREE.MeshPhongMaterial({ 
        color: colors[2],
        shininess: 100
    })
];


const geometry = new THREE.SphereGeometry(1, 32, 32);


const sphere = new THREE.Mesh(geometry, materials[0]);
scene.add(sphere);


camera.position.z = 5;


const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

function changeMaterialAndColor() {
   
    currentMaterialIndex = (currentMaterialIndex + 1) % materials.length;
    

    currentColorIndex = (currentColorIndex + 1) % colors.length;
    
    
    sphere.material = materials[currentMaterialIndex];
    
    sphere.material.color.setHex(colors[currentColorIndex]);
    
 
    updateInfo();
}


function updateInfo() {

    console.log('Material:', currentMaterialIndex, 'Color:', colors[currentColorIndex]);
}


function handleResize() {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    changeMaterialAndColor();
}


window.addEventListener('resize', handleResize);


function animate() {
    requestAnimationFrame(animate);
    

    sphere.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

updateInfo();


animate();

console.log('Ejercicio Resize - Three.js');
console.log('Cambia el tamaño de la ventana para ver los efectos!');
console.log('Materiales disponibles:', materials.length);
console.log('Colores disponibles:', colors.length);
