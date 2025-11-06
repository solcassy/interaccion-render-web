import * as THREE from 'three'
import gsap from 'gsap'

/**
 * Base
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 8, 8),
    new THREE.MeshBasicMaterial({ color: '#ff6600', wireframe: true })
)
object1.position.x = -0.7
scene.add(object1)

const object2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true })
)
object2.position.x = 0.7

scene.add(object2)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Raycaster + Mouse
 */
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let currentIntersect = null

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1
})


window.addEventListener('click', () => {
    if(currentIntersect) {
        object1.material.color = new THREE.Color("#ffff00");
        object2.material.color = new THREE.Color("#00fff0");
        gsap.to(
            object1.rotation, 
            {
                y: object1.rotation.y + Math.PI * 2, 
                duration: 2, 
                ease: "power3.out" 
            }
        );

        gsap.to(
            object2.rotation, 
            {
                y: object2.rotation.y + Math.PI * 2, 
                duration: 2, 
                ease: "power3.out" 
            }
        );

        console.log("Click sobre el mesh.");
    }else {
            object1.material.color = new THREE.Color("#ff6600");
            object2.material.color = new THREE.Color("#ffffff");
        }
    }
 );
 

const objectsToTest = [object1]
const objectsToTest2 = [object2]

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Movimiento vertical suave
    object1.position.y = Math.sin(elapsedTime * 2) * 0.1
    object2.position.y = Math.sin(elapsedTime * 2) * 0.1
    // Raycaster
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(objectsToTest)

    if (intersects.length) {
        if (!currentIntersect) {
            console.log('mouse enter')
            // 🔹 Aumenta la escala suavemente con GSAP
            gsap.to(object1.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 })
            gsap.to(object2.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 })
        }
        currentIntersect = intersects[0]
    } else {
        if (currentIntersect) {
            console.log('mouse leave')
            // 🔹 Vuelve a la escala original suavemente
            gsap.to(object1.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
            gsap.to(object2.scale, { x: 1, y: 1, z: 1, duration: 0.3 })
        }
        currentIntersect = null
    }

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()