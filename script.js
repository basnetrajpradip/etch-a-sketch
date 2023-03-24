const container = document.querySelector(".container");
const row = [];
const grid = [];
const num = 4;
/* const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4"); */
/* 
for (let i = 0; i < 16; i++) {
  grid[i] = document.createElement("div");
  grid[i].classList.add("grids");
  if (i < 4) {
    row1.appendChild(grid[i]);
  } else if (i < 8 && i >= 4) {
    row2.appendChild(grid[i]);
  } else if (i < 12 && i >= 8) {
    row3.appendChild(grid[i]);
  } else {
    row4.appendChild(grid[i]);
  }
}
 */
for (let i = 0; i < num; i++) {
  row[i] = document.createElement("div");
  row[i].classList.add(`row${i}`);
  container.appendChild(row[i]);
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    grid[i] = document.createElement("div");
    grid[i].classList.add("grid");
    row[i].appendChild(grid[i]);
  }
}
