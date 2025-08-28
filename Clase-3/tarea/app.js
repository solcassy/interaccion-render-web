console.log("sesion 03. ejercicio 3");
console.log(gsap);


window.addEventListener("mousedown", function(eventData) {
    
    gsap.to(
        ".circulo", 
        {
            y: -300,
            duration: 5,
            ease: "back.out",
        }
    );
    gsap.to(
        "body", 
        {
            backgroundColor: "#A3D5FF",
            duration: 5,
            ease: "power2.out",
        }
    );
  
});