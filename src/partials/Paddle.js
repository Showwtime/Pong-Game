import { SVG_NS } from "../settings";
export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down){
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 20;
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
    this.y = this.y - this.speed;
}

down(){
    this.y = this.y + this.speed;
}

// ..

render(svg) {

// Paddle
let paddle = document.createElementNS(SVG_NS, "rect");
paddle.setAttributeNS(null, "width", this.width);
paddle.setAttributeNS(null, "height", this.height);
paddle.setAttributeNS(null, "fill", "#FFC433");
paddle.setAttributeNS(null, "x", this.x);
paddle.setAttributeNS(null, "y", this.y);


svg.appendChild(paddle);

    }
}


{/* <rect class="left-paddle" x="8" y="100" width="8" height="56" fill="#FFC433" /> */}