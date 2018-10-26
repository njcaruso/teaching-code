// Nick Caruso
// (original code by Daniel Shiffman at https://youtu.be/AaGK-fj-BAM)

/*
   Step 1 - canvas and single block snake
   Step 2 - snake movement
   Step 3 - snake tail
   Step 4 - snake reset on self eaten
   Step 5 - add food
*/

var snake;
var boxSize = 20; // box size
var food;

function preload() {
  sound = loadSound('https://raw.githubusercontent.com/njcaruso/teaching-code/master/snake-game/sounds/pop.mp3');
  loseSound = loadSound('https://raw.githubusercontent.com/njcaruso/teaching-code/master/snake-game/sounds/lose.mp3');
}

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  snake = new Snake();
  randomizeFoodLocation();
}

function draw() {
  background(51);

  snake.draw();

  // draw food
  fill(255, 0, 100);
  rect(food.x, food.y, boxSize, boxSize);

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

function randomizeFoodLocation() {
  var cols = floor(width/boxSize);
  var rows = floor(height/boxSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(boxSize);
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';
  this.totalTail = 0;
  this.tail = [];

  this.checkIfSelfEaten = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var bitOfTail = this.tail[i];
      var d = dist(this.x, this.y, bitOfTail.x, bitOfTail.y);
      if (d < 1) {
        loseSound.play();
        this.totalTail = 0;
        this.tail = [];
      }
    }
  };

  this.draw = function() {
    this.checkIfSelfEaten();

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