// Nick Caruso
// (original code by Daniel Shiffman at https://youtu.be/AaGK-fj-BAM)

/*
   Step 1 - canvas and single block snake
*/

var snake;
var boxSize = 20; // box size

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  snake = new Snake();
}

function draw() {
  background(51);

  snake.draw();
}

function Snake() {
  this.draw = function() {
    fill(255); // snake is white
    rect(1, 5, boxSize, boxSize);
  };
}