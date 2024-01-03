import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
function App() {
  const [contrast, setContrast] = useState({
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [blur, setBlur] = useState({
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  });
  const [brightness, setBrightness] = useState({
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [saturation, setSaturation] = useState({
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  });
  const [grayscale, setGrayscale] = useState({
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  });
  const [sepia, setSepia] = useState({
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  });
  const [hueRotate, setHueRotate] = useState({
    name: "HueRotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  });
  const [background,setBackground]=useState("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg")
  return (
    <div>
      <Announcement />
      <Navbar setBackground={setBackground} />
      <div className="wrapper">
        <div className="image-wrapper">
        <div className="image">
      <img
        src={background}
        alt=""
        style={{
          filter: `${brightness.property}(${brightness.value}${brightness.unit})
          ${contrast.property}(${contrast.value}${contrast.unit})
           ${saturation.property}(${saturation.value}${saturation.unit})
            ${grayscale.property}(${grayscale.value}${grayscale.unit})
             ${sepia.property}(${sepia.value}${sepia.unit})
              ${blur.property}(${blur.value}${blur.unit})
               ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})`,
        }}
      />
      </div>
      </div>
      <div className="options">
      <div className="mode">
        <span>Brightness </span>
        <input
          type="range"
          max={brightness.range.max}
          min={brightness.range.min}
          onChange={(e) =>
            setBrightness({ ...brightness, value: `${e.target.value}` })
          }
        />
        <span>Contrast </span>
        <input
          type="range"
          max={contrast.range.max}
          min={contrast.range.min}
          value={contrast.value}
          onChange={(e) => setContrast({ ...contrast, value: `${e.target.value}` })}
        />
      </div>
      <div className="mode">
        <span>Saturation </span>
        <input
          type="range"
          max={saturation.range.max}
          min={saturation.range.min}
          value={saturation.value}
          onChange={(e) =>
            setSaturation({ ...saturation, value: `${e.target.value}` })
          }
        />
        <span>Grayscale </span>
        <input
          type="range"
          max={grayscale.range.max}
          min={grayscale.range.min}
          value={grayscale.value}
          onChange={(e) => setGrayscale({ ...grayscale, value: `${e.target.value}` })}
        />
      </div>
      <div className="mode">
        <span>Sepia </span>
        <input
          type="range"
          max={sepia.range.max}
          min={sepia.range.min}
          value={sepia.value}
          onChange={(e) =>
            setSepia({ ...sepia, value: `${e.target.value}` })
          }
        />
        <span>Hue Rotate </span>
        <input
          type="range"
          max={hueRotate.range.max}
          min={hueRotate.range.min}
          value={hueRotate.value}
          onChange={(e) => setHueRotate({ ...hueRotate, value: `${e.target.value}` })}
        />
      </div>
      <div className="blur">
        <span>Blur </span>
        <input
          type="range"
          max={blur.range.max}
          min={blur.range.min}
          value={blur.value}
          onChange={(e) =>
            setBlur({ ...blur, value: `${e.target.value}` })
          }
        />
      
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
