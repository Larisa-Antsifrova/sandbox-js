const player = document.getElementById("player");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

playBtn.addEventListener("click", () => {
  player.play();
  console.log("player.currentSrc", player.currentSrc);
  console.log("player.duration", player.duration);
  console.log("player.src", player.src);
});

pause.addEventListener("click", () => {
  player.pause();
});

player.addEventListener("play", e => {
  console.log("player.currentSrc", player.currentSrc);
  console.log("player.duration", player.duration);
  console.log("player.src", player.src);
});
