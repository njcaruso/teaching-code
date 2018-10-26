// Nick Caruso
// (original code by Daniel Shiffman at https://youtu.be/AaGK-fj-BAM)

/*
   Step 1 - canvas and single block snake
   Step 2 - snake movement
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

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.direction = 'left';
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction = 'right';
  } else if (keyCode === UP_ARROW) {
    snake.direction = 'up';
  } else if (keyCode === DOWN_ARROW) {
    snake.direction = 'down';
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';

  this.draw = function() {
    if (this.direction === 'right') {
      this.x = this.x + boxSize;
    } else if (this.direction === 'left') {
      this.x = this.x - boxSize;
    } else if (this.direction === 'down') {
      this.y = this.y + boxSize;
    } else if (this.direction === 'up') {
      this.y = this.y - boxSize;
    }
    this.x = constrain(this.x, 0, width - boxSize);
    this.y = constrain(this.y, 0, height - boxSize);

    fill(255); // snake is white
    rect(this.x, this.y, boxSize, boxSize);
  };
}