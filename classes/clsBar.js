class Bar {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.barSpeed = 0;
    this.barWidth = 100;
    this.barDeadzone = 100;
    this.barPosition = (this.screenWidth / 4) + (this.barWidth / 2);
  }

  //Controls the movement and direction of the bar


  show() {
    rect(this.barPosition, (this.screenHeight - this.barDeadzone), this.barWidth, 15, 100);
  }

  move() {
    this.keyPressed();
    //this.keyReleased();
    if(this.barPosition < 0){
      this.barPosition = this.barPosition;
    }
    this.barPosition = this.barPosition + this.barSpeed;


  }

  keyPressed() {
    if (keyCode === LEFT_ARROW) {
      this.barSpeed = -5;
    } else if (keyCode === RIGHT_ARROW) {
      this.barSpeed = 5;
    } else if (keyCode === 32) {
      this.barSpeed = 0;
    }
  }

  //Stops the movement of the bar after releasing the key
  keyReleased() {
    this.barSpeed = 0;
  }
}
