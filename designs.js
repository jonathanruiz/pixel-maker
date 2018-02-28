// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // Shortcut to #pixelCanvas
  const gridTable = $("#pixelCanvas");
  gridTable.empty();

  // Create the height of the grid
  for (let h = 0; h < height; h++) {
    gridTable.append("<tr></tr>");
  }

  // Create the width of the grid
  for (let w = 0; w < width; w++) {
    $('tr').append("<td></td>");
  }

}

makeGrid(10,10);