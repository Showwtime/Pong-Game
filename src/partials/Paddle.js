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
    paddleright,
    paddleleft,
    paddle
  ) 
  {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.paddle = paddle;
    this.keyState = {};

      document.addEventListener('keydown', event => {
        this.keyState[event.key || event.which] = true;
      }, true);
  
      document.addEventListener('keyup', event => {
        this.keyState[event.key || event.which] = false;
      }, true);

      document.addEventListener('keyleft', event => {
        this.keyState[event.key || event.which] = true;
      }, true);
  
      document.addEventListener('keyright', event => {
        this.keyState[event.key || event.which] = false;
      }, true);


              
  }// end of constructor ===========================================

    up() {
        this.y = Math.max(0, this.y - this.speed);
    }

    down() {
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed );
    }

    paddle1left() {
        this.x = Math.max(this.width, this.x - this.speed);
    }

    paddle1right() {
        this.x = Math.min(112, this.x + this.speed);
    }

    paddle2left() {
        this.x = Math.max(400, this.x - this.speed);
    }

    paddle2right() {
        this.x = Math.min(500 - this.width, this.x + this.speed);
    }
 
  //end of constructor ==============================================

  // Ball collision with paddles ====================================
  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
  // paddle 1 movement ==============================================
  if (this.keyState["a"] && this.paddle === 'paddle1') {
      this.up();
  }
  if (this.keyState["z"] && this.paddle === "paddle1") {
      this.down();
  }
  if (this.keyState["Shift"] && this.paddle === "paddle1") {
      this.paddle1left();
  }
  if (this.keyState["x"] && this.paddle === "paddle1") {
      this.paddle1right();
  }
  // paddle 2 movement ==============================================
  if (this.keyState["ArrowUp"] && this.paddle === "paddle2") {
      this.up();
  }
  if (this.keyState["ArrowDown"] && this.paddle === "paddle2") {
      this.down();
  }
  if (this.keyState["ArrowLeft"] && this.paddle === "paddle2") {
      this.paddle2left();
  }
  if (this.keyState["ArrowRight"] && this.paddle === "paddle2") {
      this.paddle2right();
  }
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
