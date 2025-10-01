//obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

// definir 2d y 3d
const ctx = canvas.getContext("2d");

//definir estilos
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;


//definir los puntos q hacen la linea
ctx.moveTo(500, 500);
ctx.lineTo(1000, 500);
ctx.stroke();






//renderizar la lines

ctx.beginPath();    
ctx.fillStyle = "blue";

ctx.rect(200, 200, 100, 100);
ctx.fill();



ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "purple";



ctx.ellipse(100, 200, 30, 30, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

 
ctx.beginPath();

ctx.fillStyle = "yellow";
ctx.rect( canvas.width / 2 -50 , canvas.height / 2 - 50 , 100, 100);
ctx.fill();