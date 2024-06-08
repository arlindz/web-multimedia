const SIZE = 2; // Global variable for particle size
const COUNT = 200; // Global variable for particle count

const GRAVITY = 0.05; // Global variable for gravity
const SPEED = 50; // Global variable for speed

async function main() {
    const app = new PIXI.Application();
    await app.init({ width: 640, height: 360 });
    document.body.appendChild(app.canvas);

    // Create the sprite and add it to the stage
    await PIXI.Assets.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png');
    let sprite = PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png');
    app.stage.addChild(sprite);

    // Set initial position of the sprite
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;

    // Create particle effect
    createParticleEffect(app.stage, app);

    // Add a ticker callback to move the sprite
    let time = 0;
    app.ticker.add((ticker) => {
        time += ticker.deltaTime;
        const x = Math.sin(time / (1000 / SPEED)) * (100 * SPEED / 500); // Adjust the coefficient to control the width of the path based on speed
        const y = Math.sin(time / (500 / SPEED)) * (50 * SPEED / 500); // Adjust the coefficient to control the height of the path based on speed
        sprite.x = app.screen.width / 2 + x;
        sprite.y = app.screen.height / 2 + y;
    });
}

async function createParticleEffect(container, app) {
    const particles = [];

    // Create particles
    for (let i = 0; i < COUNT; i++) {
        let particle = new PIXI.Graphics();
        let radius = SIZE; // Set particle size
        let color = randomColor(); // Random color

        particle.beginFill(color);
        particle.drawCircle(0, 0, radius);
        particle.endFill();

        particle.velocityX = Math.random() * 2 - 1; // Random velocity in x direction
        particle.velocityY = Math.random() * 2 - 1; // Random velocity in y direction

        particle.x = Math.random() * container.width; // Random x position within the canvas width
        particle.y = Math.random() * container.height; // Random y position within the canvas height

        particles.push(particle);
        container.addChild(particle);
    }

    // Animate particles
    app.ticker.add(() => {
        for (let i = 0; i < COUNT; i++) {
            let particle = particles[i];
            particle.x += particle.velocityX;
            particle.y += particle.velocityY;

            // Apply friction to slow down particles over time
            particle.velocityX *= 0.99;
            particle.velocityY *= 0.99;

            // Wrap particles around the canvas edges
            if (particle.x > container.width) {
                particle.x = 0;
            } else if (particle.x < 0) {
                particle.x = container.width;
            }
            if (particle.y > container.height) {
                particle.y = 0;
            } else if (particle.y < 0) {
                particle.y = container.height;
            }

            // Randomly adjust velocities to keep particles moving
            if (Math.random() < 0.01) {
                particle.velocityX = Math.random() * 2 - 1; // Random velocity in x direction
                particle.velocityY = Math.random() * 2 - 1; // Random velocity in y direction
            }
        }
    });
}

function randomColor() {
    // Generate random RGB values between 0 and 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Convert RGB values to hexadecimal
    return (r << 16) | (g << 8) | b;
}

main();
