// generate random color
const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let IntervalId;
const startChangeColor = function () {
  if (!IntervalId) {
    IntervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stopChangeColor = function () {
  clearInterval(IntervalId);
  IntervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangeColor);

document.querySelector("#stop").addEventListener("click", stopChangeColor);
