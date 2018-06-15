// // Shortcut to #pixelCanvas and #submit
let gridTable = document.querySelector("#pixelCanvas");
const submit = document.querySelector("#submit");

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
  // Empty out the table
  gridTable.innerHTML = "";

  // Create the height of the grid
  for (let h = 0; h < height; h++) {
    let tableRow = document.createElement("tr");
    gridTable.appendChild(tableRow);

    // Create the width of the grid
    for (let w = 0; w < width; w++) {
      let tableColumn = document.createElement("td");
      tableRow.appendChild(tableColumn);
    }
  }
}

// Add a color on click
gridTable.addEventListener("click", function() {
  let color = document.querySelector("#colorPicker").value;
  let pixel = event.target;

  // If the element clicked is a 'td', change the color.
  if (pixel.tagName == "TD") {
    pixel.style.backgroundColor = color;
  }
});

// Remove the color on double click
gridTable.addEventListener("dblclick", function() {
  let pixel = event.target;

  // If the element clicked is a 'td', remove the color.
  if (pixel.tagName == "TD") {
    pixel.style.backgroundColor = "transparent";
  }
});

// By default, this will create a grid with the default values
makeGrid(inputHeight, inputWidth);

// Function for when you click the submit button
submit.addEventListener("click", function() {
  // When I click on the button, it won't refresh the page
  event.preventDefault();

  let inputHeight = document.querySelector("#inputHeight").value;
  let inputWidth = document.querySelector("#inputWidth").value;
  makeGrid(inputHeight, inputWidth);
});
