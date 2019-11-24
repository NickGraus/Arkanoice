class Block {
  constructor(xPositionBlock, yPositionBlock) {
    this.xPositionBlock = xPositionBlock;
    this.yPositionBlock = yPositionBlock;
    this.blockWidth = 60;
    this.blockHeight = 30;
  }

  show() {
    rect(this.xPositionBlock, this.yPositionBlock, this.blockWidth, this.blockHeight);
  }
}
