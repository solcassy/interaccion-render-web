const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);


const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;






ctx.ellipse(700, 200, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 220, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 240, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 260, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 280, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 300, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 320, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 340, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 360, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();

ctx.ellipse(700, 380, 100, 100, 0, 0, Math.PI * 2);
ctx.stroke();

// escuchar el mouse q se Mueve
window.addEventListener("mousemove", function(eventData){
    console.log('hola x', eventData.x);
    console.log('hola y', eventData.y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.beginPath();
    ctx.ellipse(eventData.x, eventData.y, 100, 100, 0, 0, Math.PI * 2);
    ctx.stroke();

   ctx.clearRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.ellipse(700, 200, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 220, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 240, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 260, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 280, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 300, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 320, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 340, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 360, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
ctx.beginPath();
ctx.ellipse(700, 380, 100, 100, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(eventData.x, eventData.y, 100, 100, 0, 0, Math.PI * 2);
ctx.stroke();
});


// escuchar el mouse presionadp
// window.addEventListener("mousedown", function(eventData){
//     console.log('mouse down');
//     ctx.strokeStyle = "red";

//     //ctx.clearRect(0, 0, canvas.width, canvas.height);

    


//     ctx.beginPath();
// ctx.ellipse(700, 200, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 220, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 240, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 260, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 280, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 300, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 320, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 340, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 360, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 380, 100, 100, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(eventData.x, eventData.y, 100, 100, 0, 0, Math.PI * 2);
// ctx.stroke();
// });

// window.addEventListener("mouseup", function(eventData){
//     console.log('mouse up');
//     ctx.strokeStyle = "white";

//    // ctx.clearRect(0, 0, canvas.width, canvas.height);



//     ctx.beginPath();
// ctx.ellipse(700, 200, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 220, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 240, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 260, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 280, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 300, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 320, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 340, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 360, 100, 100, 0, 0, Math.PI * 2);ctx.stroke();
// ctx.beginPath();
// ctx.ellipse(700, 380, 100, 100, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(eventData.x, eventData.y, 100, 100, 0, 0, Math.PI * 2);
// ctx.stroke();
// });

const boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("mousedown", function(){
    console.log('mouse down en el boton');

    ctx.fillStyle="red";

    ctx.beginPath();
    ctx.rect(50, 100, 300, 100);
    ctx.fill();
    
});




