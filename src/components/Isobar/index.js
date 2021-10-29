import { useRef, useEffect } from "react";
import "../../App.css";

export default function Isobar({ props, ...rest }) {
  //   const canvasRef = useRef(null);

  //   useEffect(() => {
  //     let colorTable = [
  //       [3, 0, 0, 130],
  //       [6, 0, 0, 153],
  //       [9, 0, 0, 181],
  //       [12, 0, 0, 202],
  //       [15, 0, 0, 224],
  //       [18, 0, 32, 241],
  //       [21, 0, 66, 254],
  //       [24, 0, 95, 255],
  //       [27, 0, 128, 255],
  //       [30, 0, 144, 255],
  //       [33, 0, 160, 255],
  //       [36, 0, 175, 255],
  //       [39, 0, 193, 255],
  //       [42, 0, 207, 255],
  //       [45, 0, 226, 255],
  //       [48, 0, 240, 223],
  //       [51, 0, 255, 194],
  //       [54, 65, 255, 128],
  //       [57, 129, 255, 64],
  //       [60, 162, 255, 33],
  //       [63, 194, 255, 0],
  //       [66, 223, 255, 0],
  //       [69, 255, 255, 0],
  //       [72, 255, 239, 0],
  //       [75, 255, 223, 0],
  //       [78, 255, 200, 0],
  //       [81, 255, 175, 0],
  //       [84, 255, 160, 0],
  //       [87, 255, 145, 0],
  //       [90, 255, 121, 0],
  //       [93, 255, 96, 0],
  //       [96, 255, 48, 0],
  //       [100, 255, 0, 0],
  //     ];
  //     const colorObjects = colorTable.reduce((prev, current) => {
  //       let value = current[0];
  //       let obj = {
  //         value: value,
  //         rgb: [current[1], current[2], current[3]],
  //       };
  //       prev.push(obj);
  //       return prev;
  //     }, []);
  //     const canvas = canvasRef.current;
  //     let ctx = canvas.getContext("2d");
  //     let gradient = ctx.createLinearGradient(-10, 0, 210, 0);
  //     const programColors = () => {
  //       return colorObjects.map((color) => {
  //         let [first, second, third] = color.rgb;
  //         return gradient.addColorStop(
  //           `.${color.value}`,
  //           `rgb(${first}, ${second}, ${third})`
  //         );
  //       });
  //     };
  //     programColors();
  //     // Set the fill style and draw a rectangle
  //     ctx.fillStyle = gradient;
  //     ctx.fillRect(20, 20, 200, 100);
  //   }, []);
  return (
    <>
      <div className="container">
        {/* <canvas ref={canvasRef} {...rest} className="isobar" /> */}
        <h4 className="labels first">Low</h4>
        <h4 className="labels second">Pressure</h4>
        <h4 className="labels third">High</h4>
      </div>
      {/* <div className="isobar"></div> */}
    </>
  );
}
