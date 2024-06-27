// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
// function applyFilter() {
//   for(let row = 0; row < image.length; row++) {
//     for(let col = 0; col < image[row].length; col++) {
//       let rgbString = image[row][col];
//       let rgbNumbers = rgbStringToArray(rgbString);
//       rgbNumbers[RED] = Math.min(255, rgbNumbers[RED] + 50);

//       image[row][col] = 
//       rgbArrayToString(rgbNumbers);
//     }
//   }
// }
// applyAndRender(function() {
//   applyFilter();
// });


// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function
// function reddify(pixels) {
//   for(let i = 0; i < pixels.length; i += 4) {
//     pixels[i] = 2--;
//   }
// }

// TODO 6: Create more filter functions

filterFunction(filterFunction, rgbNumbers); {
  return;
  rgbNumbers.map(filterFunc);
}
function bluify(color) {
  return [color[0], color[1], Math.min(color[2] + 50, 255)];
}
const rgbNumbers =[ 
[255, 0, 0],
[255, 255, 255],
[0, 255, 0]
];
const filteredRgbNumbers = filterFunction(bluify, rgbNumbers);
console.log(filteredRgbNumbers)
// CHALLENGE code goes below here
