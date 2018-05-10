import { SVG_NS } from "../settings";

export default class Board {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color
  }
  render() {
    //...

    let rect = document.createElementNS(SVG_NS, "rect");
rect.setAttributeNS(null, "width", this.width);
rect.setAttributeNS(null, "height", this.height);
rect.setAttributeNS(null, "color", this.color );

    let line = document.createElementNS(SVG_NS, "line");
line.setAttributeNS(null, "x1", (this.width));
line.setAttributeNS(null, "y1", 0);
line.setAttributeNS(null, "x2", (this.width /2));
line.setAttributeNS(null, "y2", this.height);
line.setAttributeNS(null, "stroke", "white");
line.setAttributeNS(null, "stroke-width", "3");
line.setAttributeNS(null, "stroke-dasharray", "15, 5");


    
  }
}