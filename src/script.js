// Simple typing effect (no external libs)
const roles = ["AWS Devops Engineer", "Cloud Enthusiast", "Devops"];
const el = document.getElementById("typed");

let i = 0, j = 0, deleting = false, delay = 120, hold = 1100;

function tick() {
  const word = roles[i % roles.length];

  if (!deleting) {
    el.textContent = word.slice(0, ++j);
    if (j === word.length) {
      deleting = true;
      return setTimeout(tick, hold);
    }
  } else {
    el.textContent = word.slice(0, --j);
    if (j === 0) {
      deleting = false; i++;
    }
  }
  setTimeout(tick, deleting ? 60 : delay);
}
tick();
