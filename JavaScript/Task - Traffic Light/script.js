let btn3 = document.querySelector("#mannualBtn");
let btn2 = document.querySelector("#stopBtn");
let btn1 = document.querySelector("#startBtn");

let current = "green";
let intervalId = null;

let green = document.querySelector("#Green");
let yellow = document.querySelector("#Yellow");
let red = document.querySelector("#Red");

let resetLights = () => {
  red.style.opacity = "0.3";
  yellow.style.opacity = "0.3";
  green.style.opacity = "0.3";
};

let changeLights = () => {
  resetLights();

  if (current === "green") {
    green.style.opacity = "1";
    current = "yellow";
  } else if (current === "yellow") {
    yellow.style.opacity = "1";
    current = "red";
  } else {
    red.style.opacity = "1";
    current = "green";
  }
};

btn3.addEventListener("click", () => {
  changeLights();
});

btn1.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(changeLights, 1000);
  }
});

btn2.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
