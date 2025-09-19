
// --- Básico Three.js ---
const app = document.getElementById('app');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0b0b);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 2.4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
app.appendChild(renderer.domElement);

// Luz sencilla
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dir = new THREE.DirectionalLight(0xffffff, 0.8);
dir.position.set(2, 3, 4);
scene.add(dir);

// --- Geometría al centro (elige: icosaedro) ---
const geom = new THREE.IcosahedronGeometry(0.7, 1);
const mat = new THREE.MeshStandardMaterial({ color: 0x66ccff, metalness: 0.2, roughness: 0.35 });
const mesh = new THREE.Mesh(geom, mat);
scene.add(mesh);


// Render loop
const clock = new THREE.Clock();
function tick() {
  // rotación mínima para que no esté 100% estático
  mesh.rotation.y += 0.003;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();

// Responsive
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// --- Botón: girar 720° (2 vueltas) en el eje Y ---
const spinBtn = document.getElementById('spinBtn');
let spinning = false;

spinBtn.addEventListener('click', () => {
  if (spinning) return; // Evita spamear
  spinning = true;

  // Tween sobre el objeto "rotation" del mesh
  gsap.to(mesh.rotation, {
    // "+=" suma relativo: 2 vueltas = 2 * 360° = 720° = 4π radianes
    y: "+=" + (Math.PI * 4),
    duration: 1.6,
    ease: "power2.inOut",
    onComplete: () => { spinning = false; }
  });
});
