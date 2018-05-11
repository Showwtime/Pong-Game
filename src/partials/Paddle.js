import { SVG_NS } from "../settings";
export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down, right, left, right2, left2) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 16;
    this.score = 0;

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
        case right2:
          this.right2();
          break;
        case left2:
          this.left2();
          break;
      }
    });
  } //end of constructor

  up() {
    this.y = Math.max(65, this.y - this.speed);
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height - 65, this.y + this.speed);
  }

  right() {
      this.x = Math.max(500, this.x - this.speed);
  }

  left() {
      this.x = Math.min(455, this.x + this.speed);
  }

  right2() {
    this.x = Math.max(57, this.x - this.speed);
  }

  left2() {
    this.x = Math.min(12, this.x + this.speed);
  }
  // ..

  render(svg) {
    // Paddle
    let paddle = document.createElementNS(SVG_NS, "rect");
    paddle.setAttributeNS(null, "width", this.width);
    paddle.setAttributeNS(null, "height", this.height);
    paddle.setAttributeNS(null, "fill", "#FFB81C");
    paddle.setAttributeNS(null, "x", this.x);
    paddle.setAttributeNS(null, "y", this.y);

    svg.appendChild(paddle);
  }
}
