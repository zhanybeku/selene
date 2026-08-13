import { useEffect, useRef } from "react";
import p5 from "p5";
import "./sketchAttempt.css";

const SketchAttempt = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      let size = 100;

      const sizeForPoint = () => {
        const el = document.elementFromPoint(p.winMouseX, p.winMouseY);
        const marked = el?.closest("[data-cursor-size]");
        if (!marked) return 100;
        const value = Number(marked.getAttribute("data-cursor-size"));
        return Number.isFinite(value) ? value : 100;
      };

      p.draw = () => {
        p.background(20);
        p.fill(255, 200);
        size = p.lerp(size, sizeForPoint(), 0.2);
        p.circle(p.mouseX, p.mouseY, size);
      };
    };

    const instance = new p5(sketch, hostRef.current);
    return () => instance.remove();
  }, []);

  return <div className="sketch-fullscreen" ref={hostRef} />;
};

export default SketchAttempt;
