const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);


const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;





ctx.ellipse(700, 200, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 220, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 240, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 260, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 280, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 300, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 320, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 340, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 360, 100, 100, 0, 0, Math.PI * 2);
ctx.ellipse(700, 380, 100, 100, 0, 0, Math.PI * 2);


ctx.stroke();

 
