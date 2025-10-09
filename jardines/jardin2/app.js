console.log('Árbol simple con bolas y palos');

const canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor(0x87CEEB);

// Posicionar la cámara
camera.position.set(0, 10, 10);
camera.lookAt(0, 0, 0);

// Crear árbol simple
function createSimpleTree() {
    const tree = new THREE.Group();
    
    // Tronco (palo marrón)
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 3, 8);
    const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 1.5;
    tree.add(trunk);
    
    
    // Hojas (bolas verdes)
    const leavesGeometry = new THREE.SphereGeometry(0.8, 8, 6);
    const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    
    // Bola principal de hojas
    const mainLeaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    mainLeaves.position.set(0, 3.5, 0);
    tree.add(mainLeaves);
    
    
    return tree;
}

// Crear el árbol
const tree = createSimpleTree();
scene.add(tree);


// Animación simple
function animate() {
    requestAnimationFrame(animate);
    
    // Solo rotar el árbol
    tree.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// Iniciar animación
animate();