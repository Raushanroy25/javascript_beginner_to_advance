const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
  });
});
