class Ball {
  constructor() {
    this.xPositionEllipse = 240;
    this.yPositionEllipse = 200;
    this.sizeEllipse = 24;
    this.radiusEllipse = this.sizeEllipse / 2;
    this.xSpeed = 3;
    this.ySpeed = 3;
  }

  show() {
    ellipse(this.xPositionEllipse, this.yPositionEllipse, this.sizeEllipse, this.sizeEllipse);
  }

  move() {
    this.xPositionEllipse = this.xPositionEllipse + this.xSpeed; //Sets x axis speed
    this.yPositionEllipse = this.yPositionEllipse + this.ySpeed; //Sets y axis speed
  }
}
