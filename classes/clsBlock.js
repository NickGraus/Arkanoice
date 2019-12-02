class Block {
  constructor(xPositionBlock, yPositionBlock) {
    this.xPositionBlock = xPositionBlock;
    this.yPositionBlock = yPositionBlock;
    this.blockWidth = 60;
    this.blockHeight = 30;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }

  show() {
    stroke(205, 98, 208);
    fill(0);
    rect(this.xPositionBlock, this.yPositionBlock, this.blockWidth, this.blockHeight);
  }
}
