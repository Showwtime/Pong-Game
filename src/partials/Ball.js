import { SVG_NS } from "../settings";
export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
    } // end of constructor


render(svg, player1, player2) {

    //Ball
    let ball = document.createElementNS(SVG_NS, "circle");
    ball.setAttributeNS(null, "r", this.radius);
    ball.setAttributeNS(null, "cx", this.boardWidth /2 );
    ball.setAttributeNS(null, "cy", this.boardHeight /2);
    ball.setAttributeNS(null, "fill", "white");
    svg.appendChild(ball);
}
}




// {/* <circle class="ball" cx="256" cy="128" r="8" fill="white"/> */}
// paddle.setAttributeNS(null, "width", this.width);