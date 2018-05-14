import { SVG_NS } from "../settings";
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();
    this.ping = new Audio("public/sounds/tin-ping.wav");
    this.chime = new Audio("public/sounds/water-drip.wav");
    // this.gameover = new Audio("public/sounds/gameover.wav");
  } // end of constructor  =========================================

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    // experiment with these values to change ball movement
    this.vy = 0;
    // try FOR loop instead of "while", for fun
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  } //end of reset ===============================================

    goal(paddle){
        paddle.score++;
        this.reset();
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if (hitLeft || hitRight) {
      this.vx = -this.vx;
    }
    if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  } //end of wall collision method ======================================

  paddleCollision(paddle1, paddle2) {

    
       // if moving toward the right end ================================
    if (this.vx > 0) {
        let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
        let [leftX, rightX, topY, bottomY] = paddle;
        // right edge of the ball is >= left edge of the paddle
        if(
        (this.x + this.radius >= leftX) && 
        (this.x + this.radius <= rightX) &&
        (this.y >= topY && this.y <= bottomY)
        ){
            this.vx = -this.vx;
            this.ping.play();
        }
    }
     else {

           // if moving toward the right end ============================
        let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
        let [leftX, rightX, topY, bottomY] = paddle;
        // right edge of the ball is <= left edge of the paddle
        if(
        (this.x - this.radius <= rightX) && 
        (this.x - this.radius >= leftX) &&
        (this.y >= topY && this.y <= bottomY)
        ){
            this.vx = -this.vx;
            this.ping.play();
        }
    }
  
 } // end of paddle collision method ===================================

  render(svg, paddle1, paddle2) {
    this.x += this.vx;
    this.y += this.vy;

    //Ball =============================================================
    let ball = document.createElementNS(SVG_NS, "circle");
    ball.setAttributeNS(null, "r", this.radius);
    ball.setAttributeNS(null, "cx", this.x);
    ball.setAttributeNS(null, "cy", this.y);
    ball.setAttributeNS(null, "fill", "white");
    svg.appendChild(ball);

    this.wallCollision();
    this.paddleCollision(paddle1, paddle2);

    //Detect Goal ======================================================
    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;

    if(rightGoal){
        this.goal(paddle1);
        this.direction = -1;
        this.chime.play();
    
    } else if(leftGoal){
        this.goal(paddle2);
        this.direction = 1;
        this.chime.play();
    }

  } //end of render method
} //end of class Ball
