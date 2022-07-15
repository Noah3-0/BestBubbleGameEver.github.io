const counterDisplay = document.querySelector("h3");
const nice = document.querySelector("h2");
let counter = 0;
let playOnce = true;
let playToo = true;
let speed = 300;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 125 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  const ring = () => {
    const audio = new Audio();
    audio.src = "./pop.mp3";
    audio.play();
  };

  bubble.addEventListener("click", () => {
    ring();
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  const midwin = () => {
    const audio = new Audio();
    audio.src = "./bell.mp3";
    audio.play();
  };

  if (counter >= 25 && playOnce) {
    midwin();
    playOnce = false;
  }

  const win = () => {
    const audio = new Audio();
    audio.src = "./midwin.mp3";
    audio.play();
  };

  if (counter >= 50 && playToo) {
    nice.style.opacity = "1";
    win();
    playToo = false;
  }

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, speed);
