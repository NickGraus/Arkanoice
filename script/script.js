let screenHeight = 400;
let screenWidth = 600;
let barWidth = 100;
let barPosition = (screenWidth / 2) + (barWidth / 2);

let blocks = [];
let ballo = [];

// let ball = {
//   xPositionEllipse: 300,
//   yPositionEllipse: 200,
//   sizeEllipse: 25,
//   radiusEllipse: this.sizeEllipse / 2,
//   xSpeed: 3,
//   ySpeed: 3
// };

let bar = {
  barSpeed: 0,
  barWidth: 100,
  barDeadzone: 100,
  barPosition: (screenWidth / 2) + (this.barWidth / 2)
}

function setup() {
  createCanvas(screenWidth, screenHeight);
  for (let i = 0; i < 4; i++) {
    ballo[i] = new Ball();
  }


  for (let i = 0; i < 4; i++) {
    let xPositionBlock = 50 + 70 * i;
    blocks[i] = new Block(xPositionBlock, 50)
  }
}



function draw() {
  background(0);
  for (let i = 0; i < ballo.length; i++) {

    ballo[i].move();
    ballo[i].show();

    //Determines the direction on the x axis
    if ((ballo[i].xPositionEllipse + (ballo[i].sizeEllipse / 2)) > screenWidth) {
      ballo[i].xSpeed = -3;
    } else if ((ballo[i].xPositionEllipse - (ballo[i].sizeEllipse / 2)) < 0) {
      ballo[i].xSpeed = 3;
    }

    //Determines the direction of the y axis
    if ((ballo[i].yPositionEllipse + (ballo[i].sizeEllipse / 2)) > screenHeight) {
      ballo[i].ySpeed = -3;
    } else if ((ballo[i].yPositionEllipse - (ballo[i].sizeEllipse / 2)) < 0) {
      ballo[i].ySpeed = 3;
    }
  }
  // ball.xPositionEllipse = ball.xPositionEllipse + ball.xSpeed; //Sets x axis speed
  // ball.yPositionEllipse = ball.yPositionEllipse + ball.ySpeed; //Sets y axis speed
  // barPosition = barPosition + bar.barSpeed; //Sets movement speed of the bar
  for (let i = 0; i < blocks.length; i++) {


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


    blocks[i].show();
  }


  rect(barPosition, (screenHeight - bar.barDeadzone), 100, 15, bar.barWidth);



  // //Determinse if the ball hits the bar
  // if ((ball.xPositionEllipse > barPosition) && (ball.xPositionEllipse < (barPosition + bar.barWidth))) {
  //   if ((ball.yPositionEllipse + (ball.sizeEllipse / 2)) > (screenHeight - bar.barDeadzone)) {
  //     ball.ySpeed = -3;
  //   } else if ((ball.yPositionEllipse - (ball.sizeEllipse / 2)) < 0) {
  //     ball.ySpeed = 3;
  //   }
  // }

  // //Borders the bar inside the canvas
  // if ((barPosition + bar.barWidth) > screenWidth) {
  //   barPosition = screenWidth - bar.barWidth;
  // } else if (barPosition < 0) {
  //   barPosition = 0;
  // }





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
