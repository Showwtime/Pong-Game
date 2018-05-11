import { SVG_NS } from "../settings";
export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();

} // end of constructor



reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    // experiment with these values to change ball movement
    this.vy = 0;
    // try FOR loop instead of "while" for fun
    while(this.vy === 0){
        this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));    
  } //end of reset

  wallCollision(){
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if(hitLeft || hitRight){
        this.vx *= -1
    }
    if(hitTop || hitBottom){
        this.vy *= -1
    }
  } //end of wall collision method


  render(svg, paddle1, paddle2) {
  
    this.x += this.vx; 
    this.y += this.vy;




    //Ball
    let ball = document.createElementNS(SVG_NS, "circle");
    ball.setAttributeNS(null, "r", this.radius);
    ball.setAttributeNS(null, "cx", this.x);
    ball.setAttributeNS(null, "cy", this.y);
    ball.setAttributeNS(null, "fill", "white");
    svg.appendChild(ball);

    this.wallCollision();
  } //end of render
  } //end of class Ball