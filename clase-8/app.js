console.log(THREE);

// configurar el canvas
const canvas = document.getElementById('lienzo');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(
    75, // campo de visión
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near plane
    1000 // far plane
);

// Crear el renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000011); // color de fondo oscuro

// Posicionar la cámara (más cerca del sistema)
camera.position.z = 8;

// ===== CONTROLES DE CÁMARA CON MOUSE (drag + wheel) =====
// Órbita simple alrededor del origen (el sol) sin librerías externas
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

// Usamos coordenadas esféricas para orbitar alrededor del origen
const spherical = new THREE.Spherical();
spherical.setFromVector3(camera.position.clone());
let radius = spherical.radius; // distancia de la cámara al origen
let polar = spherical.phi;     // inclinación
let azimuth = spherical.theta; // rotación horizontal

function updateCameraFromSpherical() {
	// Limitar ángulos para evitar voltear la cámara
	const minPolar = 0.1;
	const maxPolar = Math.PI - 0.1;
	polar = Math.max(minPolar, Math.min(maxPolar, polar));

	spherical.radius = Math.max(2, Math.min(60, radius));
	spherical.phi = polar;
	spherical.theta = azimuth;

	const pos = new THREE.Vector3().setFromSpherical(spherical);
	camera.position.copy(pos);
	camera.lookAt(0, 0, 0);
}

canvas.addEventListener('mousedown', (e) => {
	isDragging = true;
	lastMouseX = e.clientX;
	lastMouseY = e.clientY;
});

window.addEventListener('mouseup', () => {
	isDragging = false;
});

window.addEventListener('mousemove', (e) => {
	if (!isDragging) return;
	const deltaX = e.clientX - lastMouseX;
	const deltaY = e.clientY - lastMouseY;

	const rotateSpeed = 0.005;
	azimuth -= deltaX * rotateSpeed;
	polar -= deltaY * rotateSpeed;

	lastMouseX = e.clientX;
	lastMouseY = e.clientY;

	updateCameraFromSpherical();
});

canvas.addEventListener('wheel', (e) => {
	e.preventDefault();
	const zoomFactor = 1 + (e.deltaY > 0 ? 0.1 : -0.1);
	radius *= zoomFactor;
	updateCameraFromSpherical();
}, { passive: false });

// ===== CREAR EL SOL =====

// 1. Definir la geometría del sol (esfera más grande)
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);

// 2. Cargar texturas 4K
const textureLoader = new THREE.TextureLoader();

// Cargar las texturas de 4K (mayor resolución)
const colorTexture = textureLoader.load('./assets/Foil002_4K-JPG/Foil002_4K-JPG_Color.jpg');
const normalTexture = textureLoader.load('./assets/Foil002_4K-JPG/Foil002_4K-JPG_NormalGL.jpg');
const roughnessTexture = textureLoader.load('./assets/Foil002_4K-JPG/Foil002_4K-JPG_Roughness.jpg');
const metalnessTexture = textureLoader.load('./assets/Foil002_4K-JPG/Foil002_4K-JPG_Metalness.jpg');

// Cargar textura de madera para Venus
const woodColorTexture = textureLoader.load('./assets/Wood048_1K-JPG/Wood048_1K-JPG_Color.jpg');
const woodNormalTexture = textureLoader.load('./assets/Wood048_1K-JPG/Wood048_1K-JPG_NormalGL.jpg');
const woodRoughnessTexture = textureLoader.load('./assets/Wood048_1K-JPG/Wood048_1K-JPG_Roughness.jpg');

// Cargar textura de ónix para Tierra
const onyxColorTexture = textureLoader.load('./assets/Onyx006_1K-JPG/Onyx006_1K-JPG_Color.jpg');
const onyxNormalTexture = textureLoader.load('./assets/Onyx006_1K-JPG/Onyx006_1K-JPG_NormalGL.jpg');
const onyxRoughnessTexture = textureLoader.load('./assets/Onyx006_1K-JPG/Onyx006_1K-JPG_Roughness.jpg');

// Cargar textura de roca para Júpiter
const rockColorTexture = textureLoader.load('./assets/Rock035_1K-JPG/Rock035_1K-JPG_Color.jpg');
const rockNormalTexture = textureLoader.load('./assets/Rock035_1K-JPG/Rock035_1K-JPG_NormalGL.jpg');
const rockRoughnessTexture = textureLoader.load('./assets/Rock035_1K-JPG/Rock035_1K-JPG_Roughness.jpg');

// 3. Definir el material del sol (METÁLICO COMO LA FOTO)
const sunMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture, // textura de color
    normalMap: normalTexture, // textura de normales para relieve
    roughnessMap: roughnessTexture, // textura de rugosidad
    metalnessMap: metalnessTexture, // textura de metalicidad
    metalness: 0.8, // muy metálico pero no al 100%
    roughness: 0.2, // un poco más rugoso para que se vean los reflejos
    emissive: 0x000000, // sin emisión para que se vea el metal real
    emissiveIntensity: 0.0, // sin emisión
    transparent: false,
    opacity: 1.0
});

// 3. Crear el mesh del sol
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

// 4. Agregar el sol a la escena
scene.add(sun);

// ===== CREAR FONDO DE ESTRELLAS =====

// Crear geometría de esfera grande para el fondo
const starfieldGeometry = new THREE.SphereGeometry(50, 32, 32);

// Crear material para el fondo de estrellas
const starfieldMaterial = new THREE.MeshBasicMaterial({
    color: 0x000011, // color azul muy oscuro
    side: THREE.BackSide, // renderizar desde adentro
    transparent: true,
    opacity: 0.8
});

// Crear el mesh del fondo de estrellas
const starfield = new THREE.Mesh(starfieldGeometry, starfieldMaterial);

// Agregar el fondo a la escena
scene.add(starfield);

// Crear estrellas individuales (como esferas)
const sphereStarsCount = 600; // menor cantidad que puntos para rendimiento
const stars = new THREE.Group(); // mantener nombre `stars` usado en la animación
const starSphereGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const starSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

for (let i = 0; i < sphereStarsCount; i++) {
	const star = new THREE.Mesh(starSphereGeometry, starSphereMaterial);
	// distribución aleatoria en un cubo alrededor del origen
	star.position.set(
		(Math.random() - 0.5) * 100,
		(Math.random() - 0.5) * 100,
		(Math.random() - 0.5) * 100
	);
	stars.add(star);
}
scene.add(stars);

// ===== CREAR PLANETAS =====

// Array de planetas con sus propiedades (Venus, Tierra y Júpiter)
const planets = [
    {
        name: 'Venus',
        color: 0xffc649, // color original dorado
        specialColor: 0xff0000, // color especial rojo
        radius: 0.35, // planeta más grande
        distance: 3.5,
        speed: 0.7, // velocidad aumentada
        mesh: null
    },
    {
        name: 'Tierra',
        color: 0x6b93d6, // color original azul
        specialColor: 0x00ff00, // color especial verde
        radius: 0.4, // planeta más grande
        distance: 4.5,
        speed: 0.9, // velocidad aumentada
        mesh: null
    },
    {
        name: 'Júpiter',
        color: 0xd2691e, // color original marrón-naranja
        specialColor: 0x800080, // color especial morado
        radius: 0.6, // planeta gigante
        distance: 5.5, // más cerca del sol
        speed: 0.6, // velocidad más lenta (más lejos)
        mesh: null
    }
];

// Crear los planetas usando un ciclo for
for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    
    // 1. Crear geometría del planeta
    const planetGeometry = new THREE.SphereGeometry(planet.radius, 32, 32);
    
    // 2. Crear material del planeta (textura especial para Venus)
    let planetMaterial;
    
    if (planet.name === 'Venus') {
        // Material con textura de madera para Venus
        planetMaterial = new THREE.MeshStandardMaterial({
            map: woodColorTexture, // textura de madera
            normalMap: woodNormalTexture, // normales de madera
            roughnessMap: woodRoughnessTexture, // rugosidad de madera
            color: planet.color, // color base dorado
            metalness: 0.0, // no metálico
            roughness: 0.9, // muy rugoso como madera
            transparent: false,
            opacity: 1.0
        });
    } else if (planet.name === 'Tierra') {
        // Material con textura de ónix para Tierra
        planetMaterial = new THREE.MeshStandardMaterial({
            map: onyxColorTexture, // textura de ónix
            normalMap: onyxNormalTexture, // normales de ónix
            roughnessMap: onyxRoughnessTexture, // rugosidad de ónix
            color: planet.color, // color base azul
            metalness: 0.3, // un poco metálico como piedra
            roughness: 0.4, // superficie lisa como ónix
            transparent: false,
            opacity: 1.0
        });
    } else if (planet.name === 'Júpiter') {
        // Material con textura de roca para Júpiter
        planetMaterial = new THREE.MeshStandardMaterial({
            map: rockColorTexture, // textura de roca
            normalMap: rockNormalTexture, // normales de roca
            roughnessMap: rockRoughnessTexture, // rugosidad de roca
            color: planet.color, // color base marrón-naranja
            metalness: 0.0, // no metálico como roca
            roughness: 1, // muy rugoso como roca
            transparent: false,
            opacity: 1.0
        });
    } else {
        // Material normal para otros planetas
        planetMaterial = new THREE.MeshStandardMaterial({
            color: planet.color,
            metalness: 0.1,
            roughness: 0.8
        });
    }
    
    // 3. Crear mesh del planeta
    planet.mesh = new THREE.Mesh(planetGeometry, planetMaterial);
    
    // 4. Posicionar el planeta en su órbita inicial
    planet.mesh.position.x = planet.distance;
    planet.mesh.position.y = 0;
    planet.mesh.position.z = 0;
    
    // 5. Agregar el planeta a la escena
    scene.add(planet.mesh);
}

// 5. Crear luces para la esfera
const orangeLight = new THREE.PointLight(0xFFC370, 25.0, 15);
orangeLight.position.set(0, 0, 3); // posición frente al sol

// Luz amarilla casi blanca por arriba (más fuerte)
const yellowLight = new THREE.PointLight(0xffffaa, 25, 12);
yellowLight.position.set(0, 4, 0); // posición arriba del sol

// Luz blanca súper intensa
const brightWhiteLight = new THREE.PointLight(0xFF6600, 55.0, 20);
brightWhiteLight.position.set(2, 2, 2); // posición diagonal

// Luz naranja por debajo y atrás del sol
const backOrangeLight = new THREE.PointLight(0xFFC370, 30.0, 18);
backOrangeLight.position.set(0, -3, -2); // posición debajo y atrás del sol

// 6. Agregar todas las luces a la escena
scene.add(orangeLight);
scene.add(yellowLight);
scene.add(brightWhiteLight);
scene.add(backOrangeLight);

// ===== CREAR LUCES PARA CADA PLANETA =====

// Crear luces para cada planeta
for (let i = 0; i < planets.length; i++) {
    const planet = planets[i];
    
    // Crear luz específica para cada planeta
    let planetLight;
    
    if (planet.name === 'Venus') {
        // Luz dorada para Venus
        planetLight = new THREE.PointLight(0xffaa00, 2.0, 8);
    } else if (planet.name === 'Tierra') {
        // Luz azul para Tierra
        planetLight = new THREE.PointLight(0x4488ff, 2.0, 8);
    } else if (planet.name === 'Júpiter') {
        // Luz naranja para Júpiter
        planetLight = new THREE.PointLight(0xff6600, 2.0, 8);
    }
    
    // Posicionar la luz en el planeta
    planetLight.position.copy(planet.mesh.position);
    
    // Agregar la luz a la escena
    scene.add(planetLight);
    
    // Guardar referencia a la luz en el objeto planeta
    planet.light = planetLight;
}

// ===== ANIMACIÓN =====

function animate() {
    requestAnimationFrame(animate);
    
    // Rotar el sol lentamente
    sun.rotation.y += 0.01;
    
    // Rotar las estrellas junto con el sol
    stars.rotation.y += 0.01;
    
    // Animar los planetas en órbita
    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        
        // Calcular la nueva posición orbital
        const time = Date.now() * 0.001; // tiempo en segundos
        const angle = time * planet.speed;
        
        // Posicionar el planeta en su órbita circular
        planet.mesh.position.x = Math.cos(angle) * planet.distance;
        planet.mesh.position.z = Math.sin(angle) * planet.distance;
        
        // CONDICIONALES PARA CAMBIAR COLOR BASADO EN POSICIÓN X
        if (planet.mesh.position.x < 0) {
            // Si la posición X es menor a 0, usar color especial
            planet.mesh.material.color.setHex(planet.specialColor);
        } else {
            // Si la posición X es mayor o igual a 0, usar color original
            planet.mesh.material.color.setHex(planet.color);
        }
        
        // Mover la luz del planeta junto con el planeta
        if (planet.light) {
            planet.light.position.copy(planet.mesh.position);
        }
        
        // Rotar el planeta sobre su propio eje
        planet.mesh.rotation.y += 0.01;
    }
    
    // Renderizar la escena
    renderer.render(scene, camera);
}

// Iniciar la animación
animate();

// Manejar redimensionamiento de ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
