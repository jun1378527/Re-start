const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const balls = [
  {
    x: canvas.width / 2,
    y: canvas.height - 30,
    dx: 30,
    dy: -50,
    radius: 100,
    color: "red",
  },
];

let waves = [];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function mouseClickHandler(e) {
  let x = e.clientX - canvas.offsetLeft;
  let y = e.clientY - canvas.offsetTop;
  let initialRadius = 1;
  let maxRadius = Math.random() * 450 + 10;
  let color = getRandomColor();
  waves.push({
    x,
    y,
    radius: initialRadius,
    maxRadius: maxRadius,
    color: color,
  });
}

document.addEventListener("click", mouseClickHandler, false);

function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

function drawWave(wave) {
  ctx.beginPath();
  ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
  ctx.strokeStyle = wave.color;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    drawBall(ball);
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (
      ball.x + ball.dx > canvas.width - ball.radius ||
      ball.x + ball.dx < ball.radius
    ) {
      ball.dx = -ball.dx;
    }
    if (
      ball.y + ball.dy > canvas.height - ball.radius ||
      ball.y + ball.dy < ball.radius
    ) {
      ball.dy = -ball.dy;
    }
  });

  waves.forEach((wave) => {
    drawWave(wave);
    wave.radius += 2;
    balls.forEach((ball) => {
      let dx = ball.x - wave.x;
      let dy = ball.y - wave.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (
        distance < wave.radius + ball.radius &&
        distance > wave.radius - ball.radius
      ) {
        ball.dx = -ball.dx;
        ball.dy = -ball.dy;
      }
    });
  });

  waves = waves.filter((wave) => wave.radius < wave.maxRadius);
  requestAnimationFrame(update);
}

update();
