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
const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshNormalMaterial( 
    {flatShading: true,});
//const mesh = new THREE.Mesh(geometry, material);
//scene.add(mesh);
//mesh.position.z = -5;



const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
  // Textura URL
  './assets/hola1.JPG',
  // on Load callback
  function (texture) {
      matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
      // Mesh.
      mesh = new THREE.Mesh( geometry, matcapMaterial );
      // 3. Poner objeto en la escena.
      scene.add(mesh);
      mesh.position.z = -3;
      // 4. Activar animación.
      animate();
  },
  // on Progress (no funciona por ahora)
  undefined,
  // on Error callback
  function (error) { console.error("Algo salio mal con la textura,", error); }
);






//const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;

var matcapTexture = textureLoader.load('./assets/matcap1.png', function(texture) {
console.log(texture);
    
});


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
 //animate();





