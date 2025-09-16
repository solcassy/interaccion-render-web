// Registrar plugin
if (window.gsap && window.MotionPathPlugin) {
    gsap.registerPlugin(MotionPathPlugin);
  
    const $boom = document.getElementById('boomerang');
  
    // Centrado relativo del elemento (el path define su posición real)
    gsap.set($boom, { xPercent: -50, yPercent: -50 });
  
    // Coloca el boomerang exactamente en el inicio del path
    gsap.set($boom, {
      motionPath: {
        path: '#curvePath',
        align: '#curvePath',
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 0
      }
    });
  
    // Animación: va y vuelve siguiendo la curva
    const tween = gsap.to($boom, {
      duration: 1.6,
      ease: 'power2.inOut',
      repeat: 1,
      yoyo: true,
      motionPath: {
        path: '#curvePath',
        align: '#curvePath',
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      rotation: '+=360',
      paused: true
    });
  
    $boom.addEventListener('click', () => tween.restart());
  } else {
    console.warn('GSAP o MotionPathPlugin no cargaron');
  }