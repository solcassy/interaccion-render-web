console.log("sesion 03. ejercicio 1");

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store all line positions
const linePositions = [100, 200, 300, 370, 430, 490, 535, 580, 620, 650, 680, 690, 700, 710, 720, 725, 730, 735, 742, 745];

// Function to draw all lines
function drawAllLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw thin lines
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    
    linePositions.forEach(x => {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 800);
    });
    
    ctx.stroke();
}

// Animate all lines moving to the right
function animateAllLines() {
    // Animate thin lines
    linePositions.forEach((pos, index) => {
        gsap.to(linePositions, {
            [index]: pos + 200, // Move 200 pixels to the right
            duration: 3,
            delay: index * 0.05, // Faster stagger
            ease: "power2.out",
            onUpdate: drawAllLines
        });
    });
}

// Draw initial lines
drawAllLines();

// Start animation
animateAllLines();


