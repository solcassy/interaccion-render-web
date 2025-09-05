console.log('sesion 05. ejercicio 1 geometrias');
console.log(THREE);

const canvas = document.getElementById('lienzo');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(gsap);


window.addEventListener("mousedown", function(eventData) {
    
    gsap.to(
        mesh.position, 
        {
            y: 3,
            duration: 5,
            ease: "back.out",
        }
    );
    gsap.to(
        "body", 
        {
            backgroundColor: "#A3D5FF",
            duration: 5,
            ease: "power2.out",
        }
    );
  
});


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshNormalMaterial( 
    {flatShading: true,});



const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(

  './assets/matcap1.png',

  function (texture) {
      matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
 
      mesh = new THREE.Mesh( geometry, matcapMaterial );
     
      scene.add(mesh);
      mesh.position.z = -10;
      mesh.position.y = -2;
    
      animate();
  },

  undefined,

  function (error) { console.error("Algo salio mal con la textura,", error); }
);






var matcapMaterial;
var mesh;

var matcapTexture = textureLoader.load('./assets/matcap1.png', function(texture) {
console.log(texture);
    
});



const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor(0xfcac3d);

renderer.render(scene, camera);
function animate() {
    requestAnimationFrame(animate);
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
 
    renderer.render(scene, camera);
 }






