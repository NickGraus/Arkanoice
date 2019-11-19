var xPositionEllipse = 300;
var yPositionEllipse = 200;
var sizeEllipse = 25;
var xSpeed = 3;
var ySpeed = 3;
var barSpeed = 0;
var barPosition = 250;
var barWidth = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ellipse(xPositionEllipse, yPositionEllipse, sizeEllipse, sizeEllipse);
  rect(barPosition, 350 , 100, 15, barWidth);

  xPositionEllipse = xPositionEllipse + xSpeed;
  yPositionEllipse = yPositionEllipse + ySpeed;
  barPosition = barPosition + barSpeed;

  if ((xPositionEllipse + (sizeEllipse / 2)) > 600) {
    xSpeed = -3;
  } else if ((xPositionEllipse - (sizeEllipse / 2)) < 0) {
    xSpeed = 3;
  }

  if ((yPositionEllipse + (sizeEllipse / 2)) > 350) {
    ySpeed = -3;
  } else if ((yPositionEllipse - (sizeEllipse / 2)) < 0) {
    ySpeed = 3;
  }

  if((barPosition + barWidth) > 600) {
    barPosition = 500;
  } else if(barPosition < 0) {
    barPosition = 0;
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    barSpeed = -5;
  } else if (keyCode === RIGHT_ARROW) {
    barSpeed = 5;
  }
}

function keyReleased() {
barSpeed = 0;
}
