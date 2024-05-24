const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const balls = [{ x: 100, y: 100, dx: 20, dy: 20, radius: 100, color: "red" }];

function drawBall(ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    drawBall(ball);

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

    ball.x += ball.dx;
    ball.y += ball.dy;
  });
  requestAnimationFrame(update);
}

update();
