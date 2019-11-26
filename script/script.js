let screenHeight = 400; // Sets screenHeight
let screenWidth = 600; // Sets screenWidth;

let blocks = [];
let ball = [];
let bar;





function setup() {
  createCanvas(screenWidth, screenHeight); // Creates canvas screen

  // Ball object
  for (let i = 0; i < 1; i++) {
    ball[i] = new Ball();
  }

  // Block object
  for (let i = 0; i < 4; i++) {
    let xPositionBlock = 50 + 70 * i;
    blocks[i] = new Block(xPositionBlock, 200);
  }

  //Bar object
  for (let i = 0; i < 1; i++) {
    bar = new Bar(screenWidth, screenHeight);
  }
}





function draw() {
  background(0);

  bar.show(); // Function that draws playing bar
  bar.move(); // Function that makes bar-movement possible


  // Draws ball objects
  for (let i = 0; i < ball.length; i++) {
    ball[i].move();
    ball[i].show();

    //Determines the direction on the x axis
    if ((ball[i].xPositionEllipse + (ball[i].radiusEllipse)) > screenWidth) {
      ball[i].xSpeed = -3;
    } else if ((ball[i].xPositionEllipse - (ball[i].radiusEllipse)) < 0) {
      ball[i].xSpeed = 3;
    }

    //Determines the direction of the y axis
    if ((ball[i].yPositionEllipse + (ball[i].radiusEllipse)) > screenHeight) {
      ball[i].ySpeed = -3;
    } else if ((ball[i].yPositionEllipse - (ball[i].radiusEllipse)) < 0) {
      ball[i].ySpeed = 3;
    }


    //Determines if the ball hits the bar
    if ((ball[i].xPositionEllipse > bar.barPosition) && (ball[i].xPositionEllipse < (bar.barPosition + bar.barWidth))) {
      if ((ball[i].yPositionEllipse + (ball[i].sizeEllipse / 2)) > (screenHeight - bar.barDeadzone)) {
        ball[i].ySpeed = -3;
      } else if ((ball[i].yPositionEllipse - (ball[i].sizeEllipse / 2)) < 0) {
        ball[i].ySpeed = 3;
      }
    }



    // if (((ball[i].yPositionEllipse - ball[i].radiusEllipse) > blocks[i].xPositionBlock) && ((ball[i].yPositionEllipse + ball[i].radiusEllipse) < (blocks[i].xPositionBlock + blocks[i].blockWidth))) {
    //   if ((ball[i].yPositionEllipse - ball[i].radiusEllipse) > blocks[i].xPositionBlock) {
    //     ball[i].xSpeed = 0;
    //   } else if (ball[i].xPositionEllipse < (blocks[i].xPositionBlock + blocks[i].blockWidth)) {
    //     ball[i].xSpeed = 0;
    //   } else if (ball[i].xPositionEllipse == (blocks[i].xPositionBlock + blocks[i].blockWidth)) {
    //     ball[i].xSpeed = 0;
    //   }
    // }

    // Let's the ball detect every block
    for (let j = 0; j < blocks.length; j++) {
      // Determines if the ball hits the top or bottom of a block
      if (((ball[i].xPositionEllipse + ball[i].radiusEllipse) > blocks[j].xPositionBlock) && ((ball[i].xPositionEllipse - ball[i].radiusEllipse) < (blocks[j].xPositionBlock + blocks[j].blockWidth))) {
        if ((ball[i].yPositionEllipse - ball[i].radiusEllipse) === (blocks[j].yPositionBlock + blocks[j].blockHeight)) {
          ball[i].ySpeed = 3;
          blocks[j].blockWidth = 0;
          blocks[j].blockHeight = 0;
          blocks[j].xPositionBlock = 0;
          blocks[j].yPositionBlock = 0;
        }
         else if ((ball[i].yPositionEllipse + ball[i].radiusEllipse) === blocks[j].yPositionBlock) {
          ball[i].ySpeed = -3;
          blocks[j].blockWidth = 0;
          blocks[j].blockHeight = 0;
          blocks[j].xPositionBlock = 0;
          blocks[j].yPositionBlock = 0;
        }
      }
    }


  }

  // Draws block objects
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].show();
  }




  // //Borders the bar inside the canvas
  // if ((barPosition + bar.barWidth) > screenWidth) {
  //   barPosition = screenWidth - bar.barWidth;
  // } else if (barPosition < 0) {
  //   barPosition = 0;
  // }
}
