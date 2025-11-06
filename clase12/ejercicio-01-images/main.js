console.log('main.js');

const minDistance = 200;
var lastPos ={
    x:0,
    y:0,
}

var imagesList = [
    './assets/p1.jpg',
    './assets/p2.jpg',
    './assets/p3.jpg',
    './assets/p4.jpg',
    './assets/p5.jpg',
    './assets/p6.jpg'
 
];
var index = 0;

// 01. Renderizar 1 imagen.
// 02. Renderizar “n” imágenes.
// 03. Posicionarlas según el mouse.
// 04. Mostrarlas en ciclo.
// 05. Desaparecerlas después de “x” tiempo.
// 06. Hacer su animación de salida.
// 07. Hacer su animación de entrada.
// 08. Renderizarlas cada “x” distancia.
// 09. Renderizarlas adelante y atrás de cada letra.



function createFloatingImage(posX, posY) {
    const img = document.createElement('img');
    img.src = imagesList[index];
    img.style.width = '300px';
    img.style.height = '150px';
    img.style.top = `${posY-75}px`;
    img.style.left = posX - (113.5) + 'px';
    img.style.position = 'absolute';
    img.style.opacity = 0;
    img.style.zIndex = Math.random() * 1000;
    document.body.appendChild(img);
    
    gsap.to(img, {
        opacity: 1,
        y: "-20px",
        duration: 1,
        ease: "power3.out",
    });
    index = index + 1;

    if (index >= imagesList.length) {
        index = 0;
    }

    
    setTimeout(function(){
        gsap.to(img, {
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            onComplete: function(){
                img.remove();
            }
        }

        );
        
    }, 1000)
}




window.addEventListener('mousemove', function (eventData) {
    var dx = eventData.clientX - lastPos.x;
    dx = Math.abs(dx);
    var dy = eventData.clientY - lastPos.y;
    dy = Math.abs(dy);
    if (dx >= minDistance || dy >= minDistance) {
        lastPos.x = eventData.clientX;
        lastPos.y = eventData.clientY;
        createFloatingImage(eventData.clientX, eventData.clientY);
    }


    
});
``