import { SVG_NS } from "../settings";

export default class Score {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }
    
render(svg, score){
let text = document.createElementNS(SVG_NS, 'text');
text.setAttributeNS(null, "x", this.x - 30);
text.setAttributeNS(null, "y", 160);
text.setAttributeNS(null, "font-family", "'SilkScreen Web', monotype");
text.setAttributeNS(null, "font-size", 120);
text.setAttributeNS(null, "fill", "#FFB81C");
text.textContent = score;
svg.appendChild(text);

} // end of render method
} //end of Score class