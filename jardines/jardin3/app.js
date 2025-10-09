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
    ctx.strokeStyle = "#D7B29D";
    ctx.lineWidth = 10;
    ctx.fillStyle = "#D7B29D";

    ctx.ellipse(x, y, 200, 200, 0, 0, Math.PI * 2);
    ctx.stroke();

}

//dibujarCirculo(window.innerWidth/2, window.innerHeight/2);


const circulo ={
    colorLinea: "#EED2CC",
    grosorLinea: 10,
    colorFill: "#EED2CC",
    radio: 300,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
   dibujar:function(x,y){
    ctx.beginPath();
    ctx.strokeStyle = circulo.colorLinea;
    ctx.fillStyle = circulo.colorFill;
    ctx.lineWidth = circulo.grosorLinea;

    ctx.ellipse(x,y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal);
    ctx.fill();
    ctx.stroke();

   }
}

// Dibujar el círculo
circulo.dibujar(window.innerWidth/2, window.innerHeight/2);

const circulo2 ={
    colorLinea: "#815E5B",
    grosorLinea: 10,
    colorFill: "#815E5B",
    radio: 70,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
   dibujar:function(x,y){
    ctx.beginPath();
    ctx.strokeStyle = circulo2.colorLinea;
    ctx.fillStyle = circulo2.colorFill;
    ctx.lineWidth = circulo2.grosorLinea;

    ctx.ellipse(x,y, circulo2.radio, circulo2.radio, circulo2.rotacion, circulo2.anguloInicial, circulo2.anguloFinal);
    ctx.fill();
    ctx.stroke();

   }
}

// Dibujar el círculo
circulo2.dibujar(1000, 500);
circulo2.dibujar(1050, 580);
circulo2.dibujar(1100, 660);
circulo2.dibujar(1150, 740);
circulo2.dibujar(1000,400);

circulo2.dibujar(450, 500);
circulo2.dibujar(400, 580);
circulo2.dibujar(350, 660);
circulo2.dibujar(300, 740);
circulo2.dibujar(470,400);

circulo.dibujar(window.innerWidth/2, window.innerHeight/2);

const circulo3 ={
    colorLinea: "#815E5B",
    grosorLinea: 10,
    colorFill: "#815E5B",
    radio: 30,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
    dibujar:function(x,y){
        ctx.beginPath();
        ctx.strokeStyle = circulo3.colorLinea;
        ctx.fillStyle = circulo3.colorFill;
        ctx.lineWidth = circulo3.grosorLinea;

        ctx.ellipse(x,y, circulo3.radio, circulo3.radio, circulo3.rotacion, circulo3.anguloInicial, circulo3.anguloFinal);
        ctx.fill();
        ctx.stroke();
    }
}

circulo3.dibujar(630, 330);
circulo3.dibujar(830, 330);



const circulo4 ={
    colorLinea: "black",
    grosorLinea: 10,
    colorFill: "black",
    radio: 7,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
    dibujar:function(x,y){
        ctx.beginPath();
        ctx.strokeStyle = circulo4.colorLinea;
        ctx.fillStyle = circulo4.colorFill;
        ctx.lineWidth = circulo4.grosorLinea;

        ctx.ellipse(x,y, circulo4.radio, circulo4.radio, circulo4.rotacion, circulo4.anguloInicial, circulo4.anguloFinal);
        ctx.fill();
        ctx.stroke();
    }
}

circulo4.dibujar(630, 330);
circulo4.dibujar(830, 330);

const circulo5 ={
    colorLinea: "black",
    grosorLinea: 3,
    colorFill: "white",
    radio: 60,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
    dibujar:function(x,y){
        ctx.beginPath();
        ctx.strokeStyle = circulo5.colorLinea;
        ctx.fillStyle = circulo5.colorFill;
        ctx.lineWidth = circulo5.grosorLinea;

        ctx.ellipse(x,y, circulo5.radio, circulo5.radio, circulo5.rotacion, circulo5.anguloInicial, circulo5.anguloFinal);
        ctx.fill();
        ctx.stroke();
    }
}

circulo5.dibujar(630, 330);
circulo5.dibujar(830, 330);
circulo3.dibujar(620, 340);
circulo3.dibujar(820, 340);
circulo4.dibujar(620, 340);
circulo4.dibujar(820, 340);

const mediocirculo = {
    colorLinea: "#C1666B",
    grosorLinea: 5,
    colorFill: "#C1666B",
    radio: 100,
    x: 0,
    y: 0,
    dibujar: function(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = mediocirculo.colorLinea;
        ctx.fillStyle = mediocirculo.colorFill;
        ctx.lineWidth = mediocirculo.grosorLinea;
        
        // Draw half circle (from 0 to Math.PI)
        ctx.arc(x, y, mediocirculo.radio, 0, Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

mediocirculo.dibujar(730, 500);

const mediocirculo2 = {
    colorLinea: "#815E5B",
    grosorLinea: 60,
  
    radio: 300,
    x: 0,
    y: 0,
    dibujar: function(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = mediocirculo2.colorLinea;
        ctx.fillStyle = mediocirculo2.colorFill;
        ctx.lineWidth = mediocirculo2.grosorLinea;
        
        // Draw half circle (from 0 to Math.PI)
        ctx.arc(x, y, mediocirculo2.radio, Math.PI,0);
    
        ctx.stroke();
    }
}
mediocirculo2.dibujar(window.innerWidth/2,400);

const linea = {
    colorLinea: "black",
    grosorLinea: 3,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    dibujar: function(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = linea.colorLinea;
        ctx.lineWidth = linea.grosorLinea;
        
        // Move to starting point
        ctx.moveTo(x1, y1);
        // Draw line to end point
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}











