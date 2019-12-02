let screenHeight = 400; // Sets screenHeight
let screenWidth = 600; // Sets screenWidth;
let score = 0;
let mySound;
let bgImage;
let lives = 0;
let yPositionBlock = 50;

let blockColumns = [];
let blocks = [];
let ball = [];
let bar;


function preload() {
  mySound = loadSound('sounds/hitmark.wav');
  bgImage = loadImage('images/bg.jpg');
}

function setup() {

  createCanvas(screenWidth, screenHeight); // Creates canvas screen


  // Ball object
  for (let i = 0; i < 1; i++) {
    ball[i] = new Ball();
  }

  // Block object
  for (let i = 0; i < 7; i++) {
    let xPositionBlock = 50 + 70 * i;
    blocks[i] = new Block(xPositionBlock, yPositionBlock);
  }
  blockColumns = [blocks, blocks, blocks];



  //Bar object
  for (let i = 0; i < 1; i++) {
    bar = new Bar(screenWidth, screenHeight);
  }
}


function draw() {
  background(bgImage);
  fill(255);
  text(score, screenWidth - 20, 20);
  textSize(24);
  textAlign(RIGHT, TOP);


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
      ball[i].xPositionEllipse = bar.barPosition;
      ball[i].yPositionEllipse = 200;
      lives = lives + 1;

    } else if ((ball[i].yPositionEllipse - (ball[i].radiusEllipse)) < 0) {
      ball[i].ySpeed = 3;
    }

    if (lives > 2) {
      ball[i].xSpeed = 0;
      ball[i].ySpeed = 0;
      ball[i].yPositionEllipse = 0;
      ball[i].yPositionEllipse = 0;
      ball[i].sizeEllipse = 0;
      textSize(72);
      textAlign(CENTER, CENTER);
      text("GAME OVER", screenWidth / 2, screenHeight / 2);
      textSize(24);


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
    blockColumns.forEach(blockColumn => {
      blockColumn.forEach(block => {
        // Determines if the ball hits the top or bottom of a block
        if (((ball[i].xPositionEllipse + ball[i].radiusEllipse) > block.xPositionBlock) &&
          ((ball[i].xPositionEllipse - ball[i].radiusEllipse) < (block.xPositionBlock + block.blockWidth))) {
          if ((ball[i].yPositionEllipse - ball[i].radiusEllipse) === (block.yPositionBlock + block.blockHeight)) {
            ball[i].ySpeed = 3;
            block.blockWidth = 0;
            block.blockHeight = 0;
            block.xPositionBlock = 0;
            block.yPositionBlock = 0;
            score = score + 100;
            mySound.play();
          } else if ((ball[i].yPositionEllipse + ball[i].radiusEllipse) === block.yPositionBlock) {
            ball[i].ySpeed = -3;
            block.blockWidth = 0;
            block.blockHeight = 0;
            block.xPositionBlock = 0;
            block.yPositionBlock = 0;
            score = score + 100;
            mySound.play();
          }
        } else if (((ball[i].yPositionEllipse - ball[i].radiusEllipse) < (block.yPositionBlock + block.blockHeight)) &&
          ((ball[i].yPositionEllipse + ball[i].radiusEllipse) > block.yPositionBlock)) {
          if ((ball[i].xPositionEllipse - ball[i].radiusEllipse) === (block.xPositionBlock + block.blockWidth)) {
            ball[i].xSpeed = 3;
          } else if ((ball[i].xPositionEllipse + ball[i].radiusEllipse) === block.xPositionBlock) {
            ball[i].xSpeed = -3;
          }
        }
      });


    });
    let rowCounter = 0;
    // Draws block objects
    //for (let i = 0; i < blocks.length; i++) {
    blockColumns.forEach(blockColumn => {

      let yPositionBlock = 50 + 40 * rowCounter;
      blockColumn.forEach(block => {
        block.yPositionBlock = yPositionBlock;
        block.show();

        console.log(block.yPositionBlock);
      });
      rowCounter++;
    });


    //}




    // //Borders the bar inside the canvas
    // if ((barPosition + bar.barWidth) > screenWidth) {
    //   barPosition = screenWidth - bar.barWidth;
    // } else if (barPosition < 0) {
    //   barPosition = 0;
    // }
  }
}



  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      background(0);
      mySound.play();
    } else if (keyCode === RIGHT_ARROW) {

      background(255);
    } else if (keyCode === 32) {
      this.barSpeed = 0;
    }
  }
