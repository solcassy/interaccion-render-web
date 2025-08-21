const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);


const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;

ctx.ellipse(700, 400, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.moveTo(450, 400);
ctx.lineTo(950, 400);

ctx.moveTo(700, 200);
ctx.lineTo(700, 600);

ctx.moveTo(502, 220);
ctx.lineTo(871, 547);

ctx.moveTo(887, 210);
ctx.lineTo(517, 553);


ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "white";
ctx.lineWidth = 10;






ctx.ellipse(700, 400, 100, 100, 0, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();

ctx.strokeStyle = "black";
ctx.lineWidth = 30;
ctx.ellipse(700, 400, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

