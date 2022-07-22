const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 450;

const image1 = new Image();
image1.src = "image1.jpg";

image1.addEventListener("load", drawImageOnCanvas);

function drawImageOnCanvas() {
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < scannedImage.data.length; i += 4) {
    const total =
      scannedImage.data[i] +
      scannedImage.data[i + 1] +
      scannedImage.data[i + 2];
    const averageColorValue = total / 3;
    scannedImage.data[i] = averageColorValue;
    scannedImage.data[i + 1] = averageColorValue;
    scannedImage.data[i + 2] = averageColorValue;
  }

  ctx.putImageData(scannedImage, 0, 0);
}
