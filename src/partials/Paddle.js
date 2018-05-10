import { SVG_NS } from "../settings";
export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down){
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
              }
            });
          } //end of constructor

up(){
    this.y = Math.max(5, this.y - this.speed);
}

down(){
    this.y = Math.min(this.boardHeight - this.height - 5, this.y + this.speed);
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