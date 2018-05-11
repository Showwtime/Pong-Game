import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 8;
	this.radius = 8;
	this.pause = false;
//====================================================================
	
	this.board = new Board(
		this.width, 
		this.height
	);

    this.paddle1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z,
      KEYS.x,
      KEYS.shift
    );

    this.paddle2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.boardGap - this.paddleWidth,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down,
      KEYS.right,
      KEYS.left
	);

	this.score1 = new Score(this.width / 2 - 50, 30, 30);
	this.score2 = new Score(this.width / 2 + 25, 30, 30);

    this.ball = new Ball(
		this.radius, 
		this.width, 
		this.height
	);

    document.addEventListener("keydown", event => {
      if(event.key == KEYS.spaceBar) {
          this.pause = !this.pause;
      }
    });
  } // end of constructor

  render() {

	if(this.pause){
		return;
	}
    // Fix to clear element
    this.gameElement.innerHTML = "";
	// Renders basic SVG view
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);

    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.paddle1.render(svg);
    this.paddle2.render(svg);
	this.ball.render(svg, this.paddle1, this.paddle2);
	this.score1.render(svg, this.paddle1.score);
	this.score2.render(svg, this.paddle2.score);	
  }
}
