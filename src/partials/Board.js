import { SVG_NS } from "../settings";

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
  
    // Board
    let rect = document.createElementNS(SVG_NS, "rect");
rect.setAttributeNS(null, "width", this.width);
rect.setAttributeNS(null, "height", this.height);
rect.setAttributeNS(null, "fill", "#353535");

    // Center Line
    let line = document.createElementNS(SVG_NS, "line");
line.setAttributeNS(null, "x1", (this.width / 2));
line.setAttributeNS(null, "y1", 0);
line.setAttributeNS(null, "x2", (this.width / 2));
line.setAttributeNS(null, "y2", this.height);
line.setAttributeNS(null, "stroke", "white");
line.setAttributeNS(null, "stroke-width", "3");
line.setAttributeNS(null, "stroke-dasharray", "15, 5");

    // Left Creese
    let leftCreese = document.createElementNS(SVG_NS, "rect");
leftCreese.setAttributeNS(null, "x", -1);
leftCreese.setAttributeNS(null, "y", 64)
leftCreese.setAttributeNS(null, "width", 60);
leftCreese.setAttributeNS(null, "height", 128);
leftCreese.setAttributeNS(null, "fill", "#353535");
leftCreese.setAttributeNS(null, "stroke", "white");
leftCreese.setAttributeNS(null, "stroke-width", "2")
leftCreese.setAttributeNS(null, "stroke-dasharray", "15, 5");

    // Right Creese
let rightCreese = document.createElementNS(SVG_NS, "rect");
rightCreese.setAttributeNS(null, "x", 453);
rightCreese.setAttributeNS(null, "y", 64);
rightCreese.setAttributeNS(null, "width", 60);
rightCreese.setAttributeNS(null, "height", 128);
// rightCreese.setAttributeNS(null, "r", 60);
rightCreese.setAttributeNS(null, "fill", "#353535");
rightCreese.setAttributeNS(null, "stroke", "white");
rightCreese.setAttributeNS(null, "stroke-width", "2");
rightCreese.setAttributeNS(null, "stroke-dasharray", "15, 5");


svg.appendChild(rect);
svg.appendChild(line);
svg.appendChild(leftCreese);
svg.appendChild(rightCreese);

  }
}
