// // Shortcut to #pixelCanvas, #inputHeight, #inputWidth, #submit
let gridTable = document.querySelector('#pixelCanvas');
let inputHeight = document.querySelector('#inputHeight').value;
let inputWidth = document.querySelector('#inputWidth').value;
const submit = document.querySelector('#submit');

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {

  // Selects table element
  let tableElement = document.querySelector("table");

  // Empty out the table
  gridTable.innerHTML = "";

  // Create the height of the grid
  for (let h = 0; h < height; h++) {
    let tableRow = document.createElement('tr');
    gridTable.appendChild(tableRow);

    // Create the width of the grid
    for (let w = 0; w < width; w++) {
      let tableColumn = document.createElement('td');
      tableRow.appendChild(tableColumn);
    }
  }

  // Select a color and input the color on the box you click on
  tableElement.addEventListener("click", function() {
    let color = document.querySelector("#colorPicker").value;
    this.style.backgroundColor = color;
  });

  tableElement.addEventListener("dblclick", function () {
    this.style.backgroundColor = 'transparent';
  });
}

// By default, this will create a grid with the default values
makeGrid(inputHeight, inputWidth);

// Function for when you click the submit button
submit.addEventListener("click", function() {
  // When I click on the button, it won't refresh the page
  event.preventDefault();

  inputHeight = document.querySelector("#inputHeight").value;
  inputWidth = document.querySelector("#inputWidth").value;
  makeGrid(inputHeight, inputWidth);
});