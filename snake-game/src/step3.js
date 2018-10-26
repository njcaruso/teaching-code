// Nick Caruso
// (original code by Daniel Shiffman at https://youtu.be/AaGK-fj-BAM)

/*
   Step 1 - canvas and single block snake
   Step 2 - snake movement
   Step 3 - snake tail
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
  } else if (keyCode === 32) {
    snake.totalTail++;
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';
  this.totalTail = 0;
  this.tail = [];

  this.draw = function() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.totalTail >= 1) {
      this.tail[this.totalTail - 1] = createVector(this.x, this.y);
    }

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
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, boxSize, boxSize);
      // random_rgba();
    }
    rect(this.x, this.y, boxSize, boxSize);
  };
}

// function random_rgba() {
//   var o = Math.round;
//   var r = Math.random;
//   var s = 255;
//   return fill(o(r()*s), o(r()*s), o(r()*s));
// }