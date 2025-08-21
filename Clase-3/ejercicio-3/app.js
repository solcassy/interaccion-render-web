console.log("sesion 03. ejercicio 3");
console.log(gsap);


window.addEventListener("mousedown", function(eventData) {
    gsap.to(
        ".rectangulo", 
        {
            x: 500,
            duration: 5,
            ease: "bounce.in",
        }
    );
});