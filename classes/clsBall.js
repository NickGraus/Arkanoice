class Ball {
  constructor() {
    this.xPositionEllipse = 300;
    this.yPositionEllipse = 200;
    this.sizeEllipse = 25;
    //this.radiusEllipse = this.sizeEllipse / 2;
    this.xSpeed = 3;
    this.ySpeed = 3;
  }

  show() {
    ellipseMode(CENTER);
    ellipse(this.xPositionEllipse, this.yPositionEllipse, this.sizeEllipse, this.sizeEllipse);
  }

  move() {
    this.xPositionEllipse = this.xPositionEllipse + this.xSpeed; //Sets x axis speed
    this.yPositionEllipse = this.yPositionEllipse + this.ySpeed; //Sets y axis speed
  }
}
