console.log('Ejercicio 05. Render Imagen 3D.');

console.log(THREE);

//Definir canvas  
const canvas = document.getElementById("lienzo");

//console.log(ctx);

//Definir variables del tamaño de ventana
var width = window.innerWidth;
var height = window.innerHeight;

//Actualizar resolucion
canvas.width = width;
canvas.height = height; 


//Código para configurar escena 
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const mesh = new THREE.Mesh(
   new THREE.SphereGeometry(),
   new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
);
scene.add(mesh);

mesh.position.z= -5;



renderer.render(scene, camera);