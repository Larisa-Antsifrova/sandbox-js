import { image } from "./image.js";
const myImage = new Image();
myImage.src = image;
myImage.addEventListener("load", drawImageOnCanvas);

function drawImageOnCanvas() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = 325;
  canvas.height = 384;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0.2, "pink");
  gradient.addColorStop(0.3, "red");
  gradient.addColorStop(0.4, "orange");
  gradient.addColorStop(0.5, "yellow");
  gradient.addColorStop(0.6, "green");
  gradient.addColorStop(0.7, "turquoise");
  gradient.addColorStop(0.8, "violet");

  const letters = ["G", "I", "R", "L"];

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let particlesArray = [];
  const numberOfParticles = 3000;

  let mappedImage = [];

  for (let y = 0; y < canvas.height; y++) {
    let row = [];

    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const color = `rgb(${red},${green},${blue})`;

      const cell = [brightness, color];

      row.push(cell);
    }

    mappedImage.push(row);
  }

  function calculateRelativeBrightness(red, green, blue) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114,
      ) / 100
    );
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.5;
      this.size = Math.random() * 0.5 + 1;
      this.positionY = Math.floor(this.y);
      this.positionX = Math.floor(this.x);
      this.angle = 0;
      this.letter = letters[Math.floor(Math.random() * letters.length)];
      this.random = Math.random();
    }

    update() {
      this.positionY = Math.floor(this.y);
      this.positionX = Math.floor(this.x);

      if (
        mappedImage[this.positionY] &&
        mappedImage[this.positionY]?.[this.positionX]
      ) {
        this.speed = mappedImage[this.positionY]?.[this.positionX]?.[0];
      }

      let movement = 2.5 - this.speed + this.velocity;
      this.angle += this.speed / 20;
      this.size = this.speed * 1.5;

      this.y += movement + Math.sin(this.angle) * 2;
      this.x += movement + Math.cos(this.angle) * 2;

      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }

      if (this.x >= canvas.width) {
        this.x = 0;
        this.y = Math.random() * canvas.height;
      }
    }

    draw() {
      ctx.beginPath();
      if (
        mappedImage[this.positionY] &&
        mappedImage[this.positionY]?.[this.positionX]
      ) {
        ctx.fillStyle = mappedImage[this.positionY]?.[this.positionX]?.[1];
        ctx.strokeStyle = mappedImage[this.positionY]?.[this.positionX]?.[1];
      }

      // ctx.fillStyle = gradient;
      // ctx.strokeRect(this.x, this.y, this.size * 1.5, this.size * 1.5);
      if (this.random < 0.1) {
        ctx.fillText(this.letter, this.x, this.y);
      } else {
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      }

      ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();

  function animate() {
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      // ctx.globalAlpha = particlesArray[i].speed * 0.5;
      ctx.globalAlpha = 1;
      particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
  }

  animate();
}
