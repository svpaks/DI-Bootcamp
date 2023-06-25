// Exercise 5 : Event Listeners

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  box.style.backgroundColor = "blue";
});

box.addEventListener("mouseover", function () {
  box.style.transform = "scale(1.2)";
});

box.addEventListener("mouseout", function () {
  box.style.transform = "scale(1)";
});

box.addEventListener("dblclick", function () {
  box.style.borderRadius = "50%";
});
