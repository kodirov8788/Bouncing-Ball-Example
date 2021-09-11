const box = document.querySelector(".box");
const ball = document.querySelector(".ball");

box.style.height = window.innerHeight + "px";
box.style.width = window.innerWidth + "px";


let xPos = 20;
let yPos = 20;
let xSpeed = 5;
let ySpeed = 5;
function update() {
  ball.style.left = xPos + "px";
  ball.style.top = yPos + "px";
}

setInterval(() => {
  if (xPos + ball.clientWidth >= window.innerWidth || xPos <= 0) {
    xSpeed = -xSpeed;
    ball.style.backgroundColor = COLOR();
  }
  if (yPos + ball.clientHeight >= window.innerHeight || yPos <= 0) {
    ySpeed = -ySpeed;
    ball.style.backgroundColor = COLOR();
  }

  xPos += xSpeed;
  yPos += ySpeed;
  update();
}, 1000 / 120);
function COLOR() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();

  return color;
}
console.log(COLOR());

window.addEventListener("resize", () => {
  xPos = 10;
  yPos = 10;

  box.style.height = window.innerHeight + "px";
  box.style.width = window.innerWidth + "px";
});

