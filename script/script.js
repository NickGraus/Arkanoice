var screenHeight = 800;
var screenWidth = 1200;
var xPositionEllipse = 300;
var yPositionEllipse = 200;
var sizeEllipse = 25;
var xSpeed = 3;
var ySpeed = 3;
var barSpeed = 0;
var barWidth = 100;
var barDeadzone = 100;
var barPosition = (screenWidth / 2) + (barWidth / 2);

function setup() {
  createCanvas(screenWidth, screenHeight);
}

function draw() {
  background(0);
  rect(barPosition, (screenHeight - barDeadzone), 100, 15, barWidth);
  ellipse(xPositionEllipse, yPositionEllipse, sizeEllipse, sizeEllipse);

  for (var y = 50; y < 250; y = y + 40){
    for (var x = 50; x < (screenWidth - 50); x = x + 70) {
      rect(x, y, 60, 30);
    }
  }


  xPositionEllipse = xPositionEllipse + xSpeed; //Sets x axis speed
  yPositionEllipse = yPositionEllipse + ySpeed; //Sets y axis speed
  barPosition = barPosition + barSpeed; //Sets movement speed of the bar

  //Determines the direction on the x axis
  if ((xPositionEllipse + (sizeEllipse / 2)) > screenWidth) {
    xSpeed = -3;
  } else if ((xPositionEllipse - (sizeEllipse / 2)) < 0) {
    xSpeed = 3;
  }

  //Determines the direction of the y axis
  if ((yPositionEllipse + (sizeEllipse / 2)) > screenHeight) {
    ySpeed = -3;
  } else if ((yPositionEllipse - (sizeEllipse / 2)) < 0) {
    ySpeed = 3;
  }

  //Determinse if the ball hits the bar
  if ((xPositionEllipse > barPosition) && (xPositionEllipse < (barPosition + barWidth))) {
    if ((yPositionEllipse + (sizeEllipse / 2)) > (screenHeight - barDeadzone)) {
      ySpeed = -3;
    } else if ((yPositionEllipse - (sizeEllipse / 2)) < 0) {
      ySpeed = 3;
    }
  }

  //Borders the bar inside the canvas
  if ((barPosition + barWidth) > screenWidth) {
    barPosition = screenWidth - barWidth;
  } else if (barPosition < 0) {
    barPosition = 0;
  }

}

//Controls the movement and direction of the bar
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    barSpeed = -5;
  } else if (keyCode === RIGHT_ARROW) {
    barSpeed = 5;
  }
}

//Stops the movement of the bar after releasing the key
function keyReleased() {
  barSpeed = 0;
}
