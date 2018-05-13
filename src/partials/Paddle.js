import { SVG_NS } from "../settings";
export default class Paddle {
  constructor(
    boardHeight,
    width,
    height,
    x,
    y,
    up,
    down,
    right,
    left,
    xleft,
    xright
  ) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 16;
    this.score = 0;
    this.xleft = xleft;
    this.xright = xright;
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        case right:
          this.right();
          break;
        case left:
          this.left();
          break;
      }
    });
  } //end of constructor ==============================================

  // Paddle movement ================================================
  up() {
    this.y = Math.max(5, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height - 5, this.y + this.speed);
  }

  right() {
    // this.xright = Math.max( +500, this.x - this.speed);
    if (!this.x >= 0) {
      this.x += this.speed;
    }
  }
  
  left() {
    // this.xleft = Math.min(5, this.x + this.speed);
    if (!this.x <= 0) {
      this.x -= this.speed;
    }
  }
  // Ball collision with paddles =======================================
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    // Paddle
    let paddle = document.createElementNS(SVG_NS, "rect");
    paddle.setAttributeNS(null, "width", this.width);
    paddle.setAttributeNS(null, "height", this.height);
    paddle.setAttributeNS(null, "fill", "#FFB81C");
    paddle.setAttributeNS(null, "stroke", "#6413BF");
    paddle.setAttributeNS(null, "stroke-width", "4");
    paddle.setAttributeNS(null, "x", this.x);
    paddle.setAttributeNS(null, "y", this.y);

    svg.appendChild(paddle);
  }
}
