console.log("sesion 03. ejercicio 3");
console.log(gsap);

const rectangulo = document.querySelector('.rectangulo');

// Track mouse position
let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", function(eventData) {
    mouseX = eventData.clientX;
    mouseY = eventData.clientY;
    
    // Get rectangle position
    const rect = rectangulo.getBoundingClientRect();
    const rectCenterX = rect.left + rect.width / 2;
    const rectCenterY = rect.top + rect.height / 2;
    
    // Calculate distance between mouse and rectangle center
    const distance = Math.sqrt(
        Math.pow(mouseX - rectCenterX, 2) + Math.pow(mouseY - rectCenterY, 2)
    );
    
    // If mouse is close to rectangle (within 150px), make it escape
    if (distance < 150) {
        // Calculate escape direction (opposite to mouse)
        const escapeX = rectCenterX - mouseX;
        const escapeY = rectCenterY - mouseY;
        
        // Normalize the direction vector
        const length = Math.sqrt(escapeX * escapeX + escapeY * escapeY);
        const normalizedX = escapeX / length;
        const normalizedY = escapeY / length;
        
        // Calculate new position (move away from mouse)
        const escapeDistance = 200;
        const newX = rectCenterX + normalizedX * escapeDistance;
        const newY = rectCenterY + normalizedY * escapeDistance;
        
        // Animate to new position
        gsap.to(rectangulo, {
            x: newX - rectCenterX,
            y: newY - rectCenterY,
            duration: 0.5,
            ease: "power2.out"
        });
    }
});