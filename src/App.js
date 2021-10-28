import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const Isobar = (props) => {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      let ctx = canvas.getContext("2d");
      let gradient = ctx.createLinearGradient(20, 0, 220, 0);
      // Add three color stops
      gradient.addColorStop(0, "green");
      gradient.addColorStop(0.5, "cyan");
      gradient.addColorStop(1, "green");

      // Set the fill style and draw a rectangle
      ctx.fillStyle = gradient;
      ctx.fillRect(20, 20, 200, 100);
    }, []);
    return <canvas ref={canvasRef} {...props} />;
  };
  return (
    <div className="isobar">
      <Isobar />
    </div>
  );
}

export default App;
