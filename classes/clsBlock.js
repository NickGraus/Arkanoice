class Block {
  constructor(xPositionBlock, yPositionBlock, r) {
    this.xPositionBlock;
    this.yPositionBlock;
    this.blockWidth = 60;
    this.blockHeight = 30;
  }

  display() {
    rect(this.xPositionBlock, this.yPositionBlock, this.blockWidth, this.blockHeight);
  }
}
