const container = document.querySelector(".container");
const rows = [];
const grids = [];
const slider = document.querySelector(".slider");
const value = document.querySelector(".size-value");
let num = slider.value;
value.textContent = slider.value;

for (let i = 0; i < num; i++) {
  rows[i] = document.createElement("div");
  rows[i].classList.add(`row`);
  container.appendChild(rows[i]);
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    grids[i] = document.createElement("div");
    grids[i].classList.add("grids");
    rows[i].appendChild(grids[i]);
  }
}

slider.addEventListener("input", (e) => {
  value.textContent = slider.value;
  num = slider.value;
});

const grid = document.querySelectorAll(".grids");
grid.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    item.classList.add("bg-color");
  });
});
