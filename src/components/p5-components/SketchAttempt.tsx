import { useEffect, useRef } from "react";
import p5 from "p5";

const SketchAttempt = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(20);
        p.circle(p.mouseX, p.mouseY, 40);
      };
    };

    const instance = new p5(sketch, hostRef.current);
    return () => instance.remove(); // important
  }, []);

  return <div ref={hostRef} />;
};

export default SketchAttempt;