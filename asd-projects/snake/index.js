/* global $, sessionStorage*/

////////////////////////////////////////////////////////////////////////////////
///////////////////////// VARIABLE DECLARATIONS ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// HTML jQuery Objects


// // interval variable required for stopping the update function when the game ends
// var updateInterval;

// // variable to keep track of the key (keycode) last pressed by the user
// var activeKey;

// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////// GAME SETUP //////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// // TODO: turn on keyboard inputs
// $("body").on("keydown", handleKeyDown);

// // start the game
// init();

// function init() {
//   // TODO 4b-2: initialize the apple
//   // TODO 4c-2: initialize the snake
//   // TODO 5a: Initialize the interval
//   updateInterval = setInterval(update, 100);
// }

// ////////////////////////////////////////////////////////////////////////////////
// ///////////////////////// PROGRAM FUNCTIONS ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// /*
//  * On each update tick update each bubble's position and check for
//  * collisions with the walls.
//  */
// function update() {moveSnake();

//   if (hasHitWall() || hasCollidedWithSnake()) {
//     endGame();
//   }

//   if (hasCollidedWithApple()) {
//     handleAppleCollision();
//   }
//   // TODO 5b: Fill in the update function's code block
// }

// function checkForNewDirection(event) {
//   /* 
//   TODO 6b: Update snake.head.direction based on the value of activeKey.
  
//   BONUS: Only allow direction changes to take place if the new direction is
//   perpendicular to the current direction
//   */

//   if (activeKey === KEY.LEFT) {
//     snake.head.direction = "left";
//   } if(activeKey === KEY.RIGHT) {
//     snake.head.direction = "right";
//   }if(activeKey === KEY.UP) {
//     snake.head.direction = "up";
//   }if(activeKey === KEY.DOWN) {
//     snake.head.direction = "down";
//   }



//   // FILL IN THE REST

  console.log(snake.head.direction);     // uncomment me!
// }

// function moveSnake() {
//   /* 
//   TODO 11: Move each part of the snake's body such that it's body follows the head.
  
//   HINT: To complete this TODO we must figure out the next direction, row, and 
//   column for each snakeSquare in the snake's body. The parts of the snake are 
//   stored in the Array snake.body and each part knows knows its current 
//   column/row properties. 
  
//   */

//   //Before moving the head, check for a new direction from the keyboard input
//   checkForNewDirection();

//   /* 
//   TODO 7: determine the next row and column for the snake's head
  
//   HINT: The snake's head will need to move forward 1 square based on the value
//   of snake.head.direction which may be one of "left", "right", "up", or "down"
//   */ if (snake.head.direction === "left") {
//   snake.head.column = snake.head.column - 1;
// }
// repositionSquare(snake.head);
// if (snake.head.direction === "right") {
//   snake.head.column = snake.head.column - 1;
// }
// repositionSquare(snake.head);
// if (snake.head.direction === "up") {
//   snake.head.column = snake.head.column - 1;
// }
// repositionSquare(snake.head);
// if (snake.head.direction === "down") {
//   snake.head.column = snake.head.column - 1;
// }
// repositionSquare(snake.head);
// }

// function hasHitWall() {
//   /* 
//   TODO 8: Should return true if the snake's head has collided with the four walls of the
//   board, false otherwise.
  
//   HINT: What will the row and column of the snake's head be if this were the case?
//   */

//   return false;
// }

// function hasCollidedWithApple() {
//   /* 
//   TODO 9: Should return true if the snake's head has collided with the apple, 
//   false otherwise
  
//   HINT: Both the apple and the snake's head are aware of their own row and column
//   */

//   return false;
// }

// function handleAppleCollision() {
//   // increase the score and update the score DOM element
//   score++;
//   scoreElement.text("Score: " + score);

//   // Remove existing Apple and create a new one
//   apple.element.remove();
//   makeApple();

//   /* 
//   TODO 10: determine the location of the next snakeSquare based on the .row,
//   .column and .direction properties of the snake.tail snakeSquare
  
//   HINT: snake.tail.direction will be either "left", "right", "up", or "down".
//   If the tail is moving "left", place the next snakeSquare to its right. 
//   If the tail is moving "down", place the next snakeSquare above it.
//   etc...
//   */
//   var row = 0;
//   var column = 0;

//   // code to determine the row and column of the snakeSquare to add to the snake

//   makeSnakeSquare(row, column);
// }

// function hasCollidedWithSnake() {
//   /* 
//   TODO 12: Should return true if the snake's head has collided with any part of the
//   snake's body.
  
//   HINT: Each part of the snake's body is stored in the snake.body Array. The
//   head and each part of the snake's body also knows its own row and column.
  
//   */

//   return false;
// }

// function endGame() {
//   // stop update function from running
//   clearInterval(updateInterval);

//   // clear board of all elements
//   board.empty();

//   // update the highScoreElement to display the highScore
//   highScoreElement.text("High Score: " + calculateHighScore());
//   scoreElement.text("Score: 0");
//   score = 0;

//   // restart the game after 500 ms
//   setTimeout(init, 500);
// }

// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// /* Create an HTML element for the apple using jQuery. Then find a random
//  * position on the board that is not occupied and position the apple there.
//  */
// function makeApple() {
//   // TODO 4b-1: Fill in the makeApple() code block
// }

// /* Create an HTML element for a snakeSquare using jQuery. Then, given a row and
//  * column on the board, position it on the screen. Finally, add the new
//  * snakeSquare to the snake.body Array and set a new tail.
//  */
// function makeSnakeSquare(row, column) {
//   // TODO 4c-1: Fill in this function's code block
// }

// /* 
//   event.which returns the keycode of the key that is pressed when the
//   keydown event occurs
  
//   The KEY Object creates a map for the Arrow Keys to their keycode:

//     KEY.LEFT = 37
//     KEY.UP = 38
//     KEY.RIGHT = 39
//     KEY.DOWN = 40
// */
// function handleKeyDown(event) {
//   // TODO 6a: make the handleKeyDown function register which key is pressed
//   $("body").on("keydown", handleKeyDown);
//   activeKey = event.which;
// console.log(activeKey);
// }

// /* Given a gameSquare (which may be a snakeSquare or the apple), position
//  * the gameSquare on the screen.
//  */
// function repositionSquare(square) {
//   var squareElement = square.element;
//   var row = square.row;
//   var column = square.column;

//   var buffer = 20;

//   // position the square on the screen according to the row and column
//   squareElement.css("left", column * SQUARE_SIZE + buffer);
//   squareElement.css("top", row * SQUARE_SIZE + buffer);
// }

// /* Returns a (row,column) Object that is not occupied by another game component
//  */
// function getRandomAvailablePosition() {
//   var spaceIsAvailable;
//   var randomPosition = {};

//   /* Generate random positions until one is found that doesn't overlap with the snake */
//   while (!spaceIsAvailable) {
//     randomPosition.column = Math.floor(Math.random() * COLUMNS);
//     randomPosition.row = Math.floor(Math.random() * ROWS);
//     spaceIsAvailable = true;

//     /*
//     TODO 13: After generating the random position determine if that position is
//     not occupied by a snakeSquare in the snake's body. If it is then set 
//     spaceIsAvailable to false so that a new position is generated.
//     */
//   }

//   return randomPosition;
// }

// function calculateHighScore() {
//   // retrieve the high score from session storage if it exists, or set it to 0
//   var highScore = sessionStorage.getItem("highScore") || 0;

//   if (score > highScore) {
//     sessionStorage.setItem("highScore", score);
//     highScore = score;
//     alert("New High Score!");
//   }

//   return highScore;
// }
let blockSize = 25;
let total_row = 17;

let total_col = 17;
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;
let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext ("2d");

  placeFood();
  document.addEventListener ("keyup", changeDirection);

  setInterval(update, 1000 / 10);
}
function update() {
  if(gameOver) {
    return;
  }
  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "yellow";
  context.fillRect (foodX, foodY, blockSize, blockSize);

  if(snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }
  for(let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if(snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }
  context.fillStyle = "white";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for(let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  if(snakeX < 0 
    || snakeX > total_col * blockSize
    || snakeY < 0 
    || snakeY > total_row * blockSize) {
      gameOver = true;
      alert("Game Over");
    }
for(let i = 0; i < snakeBody.length; i++) {
  if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
    gameOver = true;
    alert("Game Over");
  }
}
  function changeDirection(e) {
    if(e.code == "ArrowUp" && speedY != 1) {
      speedX = 0;
      speedY = -1;
    }
    else if(e.code == "ArrowDown" && speedY != -1) {
      speedX = 0;
      speedY = 1;
    }
    else if(e.code == "ArrowLeft" && speedX != 1) {
      speedX = -1;
      speedY = 0;
    }
else if(e.code == "ArrowRight" && speedX != -1) {
  speedX = 1;
  speedY = 0;
}
  }
  function placeFood() {
    foodX = Math.floor(Math.random() * total_col) * blockSize;
    foodY = Math.floor(Math.random() * total_row) * blockSize;  }}