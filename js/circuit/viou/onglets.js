let buttons;
let elements;
let closer;

function enhaut() {
  buttons = document.querySelectorAll(".choose");
  elements = document.querySelectorAll(".receptacle");

  for (const button of buttons) {
    button.style.opacity = .6;
    button.addEventListener("click", (e) => {
      for (const rebutton of buttons) {
        rebutton.style.opacity = .6;
      }
      e.target.style.opacity = 1;
      for (const element of elements) {
        element.style.display = "none";
      }
      document.getElementById(`${button.className.split(" ")[1]}`).style.display = "flex";
    });
  }
  buttons[0].style.opacity = 1;

  closer = document.querySelector(".close");
  closer.addEventListener("click", (e) => {
    document.querySelector(".parent").remove();
  });
}
