var screenHeight = 400;
var screenWidth = 600;
var barWidth = 100;
var barPosition = (screenWidth / 2) + (barWidth / 2);
var blocks = [];

var ball = {
  xPositionEllipse: 300,
  yPositionEllipse: 200,
  sizeEllipse: 25,
  radiusEllipse: this.sizeEllipse / 2,
  xSpeed: 3,
  ySpeed: 3
};

var bar = {
  barSpeed: 0,
  barWidth: 100,
  barDeadzone: 100,
  barPosition: (screenWidth / 2) + (this.barWidth / 2)
}

function setup() {
  createCanvas(screenWidth, screenHeight);

  for (var i = 0; i < 4; i++) {
    blocks[i] = new Block(50, 50)
  }
}



function draw() {
  background(0);
  ball.xPositionEllipse = ball.xPositionEllipse + ball.xSpeed; //Sets x axis speed
  ball.yPositionEllipse = ball.yPositionEllipse + ball.ySpeed; //Sets y axis speed
  barPosition = barPosition + bar.barSpeed; //Sets movement speed of the bar
  for (var i = 0; i < blocks.length; i++) {


    // if (((ball.yPositionEllipse - ball.radiusEllipse) > blocks[i].xPositionBlock) && ((ball.yPositionEllipse + ball.radiusEllipse) < (blocks[i].xPositionBlock + blocks[i].blockWidth))) {
    //   if (ball.xPositionEllipse == blocks[i].xPositionBlock) {
    //     ball.xSpeed = -3;
    //   } else if (ball.xPositionEllipse < (blocks[i].xPositionBlock + blocks[i].blockWidth)) {
    //     ball.xSpeed = 3;
    //   } else if (ball.xPositionEllipse == (blocks[i].xPositionBlock + blocks[i].blockWidth)) {
    //     ball.xSpeed = 3;
    //   }
    // }
    //
    // if (((ball.xPositionEllipse + ball.radiusEllipse) > blocks[i].xPositionBlock) && ((ball.xPositionEllipse - ball.radiusEllipse) < (blocks[i].xPositionBlock + blocks[i].blockWidth))) {
    //   if (ball.yPositionEllipse == blocks[i].xPositionBlock) {
    //     ball.ySpeed = -3;
    //   } else if (ball.yPositionEllipse == (blocks[i].xPositionBlock + blocks[i].blockHeight)) {
    //     ball.ySpeed = 3;
    //   }
    // }


    blocks[i].display();
  }


  rect(barPosition, (screenHeight - bar.barDeadzone), 100, 15, bar.barWidth);
  ellipseMode(CENTER);
  ellipse(ball.xPositionEllipse, ball.yPositionEllipse, ball.sizeEllipse, ball.sizeEllipse);

  //Places blocks
  // for (var y = 50; y < 90; y = y + 40) {
  //   for (var x = 70; x < (screenWidth - 50 - blocks[i].blockWidth); x = x + 70) {
  //     blocks[i].display();
  //   }
  // }

  //Determines the direction on the x axis
  if ((ball.xPositionEllipse + (ball.sizeEllipse / 2)) > screenWidth) {
    ball.xSpeed = -3;
  } else if ((ball.xPositionEllipse - (ball.sizeEllipse / 2)) < 0) {
    ball.xSpeed = 3;
  }

  //Determines the direction of the y axis
  if ((ball.yPositionEllipse + (ball.sizeEllipse / 2)) > screenHeight) {
    ball.ySpeed = -3;
  } else if ((ball.yPositionEllipse - (ball.sizeEllipse / 2)) < 0) {
    ball.ySpeed = 3;
  }

  //Determinse if the ball hits the bar
  if ((ball.xPositionEllipse > barPosition) && (ball.xPositionEllipse < (barPosition + bar.barWidth))) {
    if ((ball.yPositionEllipse + (ball.sizeEllipse / 2)) > (screenHeight - bar.barDeadzone)) {
      ball.ySpeed = -3;
    } else if ((ball.yPositionEllipse - (ball.sizeEllipse / 2)) < 0) {
      ball.ySpeed = 3;
    }
  }

  //Borders the bar inside the canvas
  if ((barPosition + bar.barWidth) > screenWidth) {
    barPosition = screenWidth - bar.barWidth;
  } else if (barPosition < 0) {
    barPosition = 0;
  }





  // if((ball.xPositionEllipse > blocks[i].xPositionBlock) && (ball.xPositionEllipse < (blocks[i].xPositionBlock + blocks[i].blockWidth))) {
  //   removeBlock();
  // }
  //
  // if((ball.yPositionEllipse > blocks[i].xPositionBlock) && (ball.yPositionEllipse < (blocks[i].xPositionBlock + blocks[i].blockHeight))) {
  //   removeBlock();
  // }

}

//Controls the movement and direction of the bar
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    bar.barSpeed = -5;
  } else if (keyCode === RIGHT_ARROW) {
    bar.barSpeed = 5;
  }
}

//Stops the movement of the bar after releasing the key
function keyReleased() {
  bar.barSpeed = 0;
}
