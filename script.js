const sketchContainer = document.querySelector(".sketch-container");
const slider = document.querySelector(".slider");
const sizeValue = document.querySelector(".size-value");
let size = slider.value;
sizeValue.textContent = ` ${size} x ${size} `;
const columns = [];
const grids = [];

//displays the change in size value and updates the size value
function getSize(event) {
  size = slider.value;
  sizeValue.textContent = ` ${size} x ${size} `;
}

//creates the grid inside the container of given size
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    columns[i] = document.createElement("div");
    columns[i].classList.add(`column${i}`);
    columns[i].classList.add("columns");
    sketchContainer.appendChild(columns[i]);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grids[j] = document.createElement("div");
      grids[j].classList.add("grids");
      columns[i].append(grids[j]);
    }
  }
}

//removes the existing grid by removing sketch container's nodes if exists
function removeGrid() {
  while (sketchContainer.childNodes.length > 0) {
    sketchContainer.removeChild(sketchContainer.firstElementChild);
  }
}

//Changes the grid size by removing the existing grids and creating new grid of given size
function changeGrid(event) {
  removeGrid();
  createGrid(size);
  let grid = document.querySelectorAll(".grids");
  grid.forEach(colorGrid);
}

function colorGrid(item) {
  item.addEventListener("mouseover", (event) => {
    item.classList.add("change-color");
  });
}

//creates the default grid of default size
createGrid(size);

slider.addEventListener("mouseup", getSize);
slider.addEventListener("mouseup", changeGrid);

let grid = document.querySelectorAll(".grids");
grid.forEach(colorGrid);
