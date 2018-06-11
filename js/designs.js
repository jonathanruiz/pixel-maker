// // Shortcut to #pixelCanvas
// let gridTable = $("#pixelCanvas");
// let inputHeight = $("#inputHeight").val();
// let inputWidth = $("#inputWidth").val();

// // When size is submitted by the user, call makeGrid()
// function makeGrid(height, width) {
//   //Empty out the table
//   gridTable.empty();

//   // Create the height of the grid
//   for (let h = 0; h < height; h++) {
//     gridTable.append("<tr></tr>");
//   }

//   // Create the width of the grid
//   for (let w = 0; w < width; w++) {
//     $("tr").append("<td></td>");
//   }

//   // Select a color and input the color on the box you click on
//   $("td").mousedown(function(event) {
//     let color = $("#colorPicker").val();
//     $(this).css("background-color", color);
//   });

//   // Double click to remove the color.
//   $("td").dblclick(function() {
//     $(this).css("background-color", "transparent");
//   });
// }

// // By default, this will create a grid with the default values
// makeGrid(inputHeight, inputWidth);

// // Function for when you click the submit button
// $("#submit").click(function(event) {
//   // When I click on the button, it won't refresh the page
//   event.preventDefault();

//   // Look for the values of the numbers and input them into the makeGrid() function
//     inputHeight = $("#inputHeight").val();
//     inputWidth = $("#inputWidth").val();
//     makeGrid(inputHeight, inputWidth);
// });

let gridTable = document.querySelector('#pixelCanvas');
let inputHeight = document.querySelector('#inputHeight').value;
let inputWidth = document.querySelector('#inputWidth').value;

function makeGrid(height, width) {

  // Create the height of the grid
  for (let h = 0; h < height; h++) {
    let tableRow = document.createElement('tr');
    gridTable.appendChild(tableRow);

    for (let w = 0; w < width; w++) {
      let tableColumn = document.createElement('td');
      tableRow.appendChild(tableColumn);
    }
  }
}

inputHeight = document.querySelector("#inputHeight").value;
inputWidth = document.querySelector("#inputWidth").value;
makeGrid(inputHeight, inputWidth);