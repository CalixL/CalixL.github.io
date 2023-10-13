/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    "LEFT": 65,
    "UP": 87,
    "RIGHT": 68,
    "DOWN": 83

  };

  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  };
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); 
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
repositionGameItem()
wallCollision()
redrawGameItem()

  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      walker.speedX = -5
      console.log("left pressed")
    } if (event.which === KEY.RIGHT) {
      walker.speedX = 5
      console.log("right pressed")
    } if (event.which === KEY.UP) {
      walker.speedY = -5
      console.log("up pressed")
    }if(event.which === KEY.DOWN) {
      walker.speedY = 5
      console.log("down pressed")
    }
  }

  function handleKeyUp(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      walker.speedX = 0
      console.log("left pressed")
    } if (event.which === KEY.RIGHT) {
      walker.speedX = 0
      console.log("right pressed")
    } if (event.which === KEY.UP) {
      walker.speedY = 0
      console.log("up pressed")
    }if(event.which === KEY.DOWN) {
      walker.speedY = 0
      console.log("down pressed")
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
walker.positionX += walker.speedX
walker.positionY += walker.speedY
  }
function redrawGameItem() {
  $("#walker").css("left", walker.positionX)
  $("#walker").css("top", walker.positionY)
}
function wallCollision() {
  if(walker.positionX > 390) {
    walker.positionX = 390
  }   if(walker.positionY > 390) {
    walker.positionY = 390
  }  if(walker.positionX < 0) {
    walker.positionX = 0
  } if(walker.positionY < 0) {
    walker.positionY = 0
  }
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
