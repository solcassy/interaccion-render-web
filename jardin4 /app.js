console.log("sesion 03. ejercicio 1");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a red line
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.moveTo(100, 0);
ctx.lineTo(100, 800);

ctx.moveTo(200, 0);
ctx.lineTo(200, 800);

ctx.moveTo(300, 0);
ctx.lineTo(300, 800);

ctx.moveTo(370, 0);
ctx.lineTo(370, 800);

ctx.moveTo(430, 0);
ctx.lineTo(430, 800);

ctx.moveTo(490, 0);
ctx.lineTo(490, 800);

ctx.moveTo(535, 0);
ctx.lineTo(535, 800);
ctx.moveTo(580, 0);
ctx.lineTo(580, 800);

ctx.moveTo(620, 0);
ctx.lineTo(620, 800);

ctx.moveTo(650, 0);
ctx.lineTo(650, 800);

ctx.moveTo(680, 0);
ctx.lineTo(680, 800);

ctx.moveTo(690, 0);
ctx.lineTo(690, 800);

ctx.moveTo(700, 0);
ctx.lineTo(700, 800);

ctx.moveTo(710, 0);
ctx.lineTo(710, 800);

ctx.moveTo(720, 0);
ctx.lineTo(720, 800);

ctx.moveTo(725, 0);
ctx.lineTo(725, 800);

ctx.moveTo(730, 0);
ctx.lineTo(730, 800);

ctx.moveTo(735, 0);
ctx.lineTo(735, 800);

ctx.moveTo(742, 0);
ctx.lineTo(742, 800);

ctx.moveTo(745, 0);
ctx.lineTo(745, 800);


ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 50;
ctx.moveTo(775, 0);
ctx.lineTo(775, 800);
ctx.stroke();


