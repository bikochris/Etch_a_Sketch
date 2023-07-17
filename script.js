const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetGrid);

function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    container.appendChild(gridSquare);
  }
}

function resetGrid() {
  let gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");

  if (gridSize === null) {
    return; // User clicked "Cancel"
  }

  gridSize = parseInt(gridSize);

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    return;
  }

  container.innerHTML = "";
  createGrid(gridSize);
}

createGrid(16);
