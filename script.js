const SIZE = 2; // Global variable for particle size
const COUNT = 200; // Global variable for particle count

const GRAVITY = 0.05; // Global variable for gravity
const SPEED = 50; // Global variable for speed

const SPAWN_X = 750; // X coordinate of the spawn point
const SPAWN_Y = 185; // Y coordinate of the spawn point
const HORIZONTAL_DISTANCE = 1100; // Horizontal distance for the square path
const VERTICAL_DISTANCE = 190; // Vertical distance for the square path

async function main() {
    const app = new PIXI.Application({ backgroundColor: 0x000000 });
    await app.init({ width: window.screen.width, height: 400 });
    const pixiContainer = document.getElementById('pixi-container');
    pixiContainer.appendChild(app.view);

    // Create the sprite and add it to the stage
    await PIXI.Assets.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png');
    let sprite = PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png');
    app.stage.addChild(sprite);

    // Set initial position of the sprite
    sprite.x = SPAWN_X;
    sprite.y = SPAWN_Y;

    // Create particle effect
    createParticleEffect(app.stage, app);

    // Add a ticker callback to move the sprite
    let time = 0;

    app.ticker.add((ticker) => {
        time += ticker.deltaTime * (SPEED / 50); // Adjust time increment based on speed
        const phase = (time % (4 * VERTICAL_DISTANCE)) / VERTICAL_DISTANCE;

        if (phase < 1) {
            sprite.x = SPAWN_X + HORIZONTAL_DISTANCE / 2;
            sprite.y = SPAWN_Y - VERTICAL_DISTANCE / 2 + phase * VERTICAL_DISTANCE;
        } else if (phase < 2) {
            sprite.x = SPAWN_X + HORIZONTAL_DISTANCE / 2 - (phase - 1) * HORIZONTAL_DISTANCE;
            sprite.y = SPAWN_Y + VERTICAL_DISTANCE / 2;
        } else if (phase < 3) {
            sprite.x = SPAWN_X - HORIZONTAL_DISTANCE / 2;
            sprite.y = SPAWN_Y + VERTICAL_DISTANCE / 2 - (phase - 2) * VERTICAL_DISTANCE;
        } else {
            sprite.x = SPAWN_X - HORIZONTAL_DISTANCE / 2 + (phase - 3) * HORIZONTAL_DISTANCE;
            sprite.y = SPAWN_Y - VERTICAL_DISTANCE / 2;
        }
    });
}

async function createParticleEffect(container, app) {
    const particles = [];
    const cols = Math.sqrt(COUNT);
    const rows = Math.ceil(COUNT / cols);
    const xSpacing = container.width / cols;
    const ySpacing = container.height / rows;

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

        const row = Math.floor(i / cols);
        const col = i % cols;

        particle.x = col * xSpacing + xSpacing / 2; // Evenly distribute particles in x direction
        particle.y = row * ySpacing + ySpacing / 2; // Evenly distribute particles in y direction

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
