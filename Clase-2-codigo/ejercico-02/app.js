console.log('Ejercicio 02. Render imagen 2d.')

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');





canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// cargar imagen
var img = new Image();
var path = './img/example.png';
img.src = path;

img.onload = function(){
    console.log('imagen cargada');

    ctx.drawImage(img, 50, 50, 300, 300);
    
}







