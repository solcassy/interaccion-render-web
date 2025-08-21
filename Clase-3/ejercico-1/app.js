console.log("sesion 03. ejercicio 1");

const canvas = document.getElementById("lienzo");
console.log(canvas);


const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;

ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2);
ctx.stroke();

function dibujarCirculo(x,y){
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 10;

    ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2);
    ctx.stroke();

}

dibujarCirculo(200, 100);
dibujarCirculo(300, 100);
dibujarCirculo(400, 100);
dibujarCirculo(500, 100);
dibujarCirculo(600, 100);
dibujarCirculo(700, 100);
dibujarCirculo(800, 100);
dibujarCirculo(900, 100);
dibujarCirculo(1000, 100);

window.addEventListener("mousemove", function(eventData) {

    dibujarCirculo(eventData.x, eventData.y);
});
