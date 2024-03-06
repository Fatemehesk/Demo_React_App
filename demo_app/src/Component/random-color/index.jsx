/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const COLOR = ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"];

const RandomColor = ({ children }) => {
  const [colorType, setColorType] = useState(undefined);
  const [color, setColor] = useState("");
const [theme,setTheme]=useLocalStorage('theme','dark');

//  console.log(theme,setTheme,"them");
  const handleRandomColor = (type) => {
    if (type === "HEX") {
      let items = "";
      for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * COLOR.length);
        items = items + `${COLOR[randomNum]}`;
      }
      setColor(items);
    } else if (type === "RGB") {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      setColor(`${red},${green},${blue}`);
    }
  };

  useEffect(() => {
    if (colorType !== undefined) {
      handleRandomColor(colorType);
    }
  }, [colorType]);

  return (
    <div
      style={{
        backgroundColor: colorType === "HEX" ? `#${color}` : `RGB(${color})`,padding:"1rem",
        width: "80vw",
      }}
    >
      <button
        onClick={() => {
          setColorType("HEX");
        }}
      >
        Create Hex color
      </button>
      <button
      style={{
       margin:"1rem"
      }}
        onClick={() => {
          setColorType("RGB");
        }}
      >
        Create RGB color
      </button>
      <button onClick={() => handleRandomColor(colorType)}>
        Generate random Color
      </button>
      {colorType !== undefined && (
        <h2> {colorType === "HEX" ? `#${color}` : `RGB(${color})`}</h2>
      )}

      {children}
    </div>
  );
};

export default RandomColor;
