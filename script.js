/* ============= JavaScript Update loop ============= */

import Ball from "./ball.js"

var lastTime;

const ball = new Ball(document.getElementById("ball"));

function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta);

  }

  lastTime = time;
  window.requestAnimationFrame(update);
};

window.requestAnimationFrame(update);