// Select color input



// Select size input

$("#submit").click(function(event) {
  // When I click on the button, it won't refresh the page
  event.preventDefault();

  // Look for the values of the numbers and input them into the makeGrid() function
  let inputHeight = $("#inputHeight").val();
  let inputWidth = $("#inputWidth").val();
  makeGrid(inputHeight, inputWidth);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // Shortcut to #pixelCanvas
  let gridTable = $("#pixelCanvas");
  gridTable.empty();

  // Create the height of the grid
  for (let h = 0; h < height; h++) {
    gridTable.append("<tr></tr>");
  }

  // Create the width of the grid
  for (let w = 0; w < width; w++) {
    $("tr").append("<td></td>");
  }
}
