import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      {/* <h1 className="text-center text-4xl tracking-tighter mt-5">
        BackGround Color Changer
      </h1> */}
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex fles-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#1d4ed8")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#1d4ed8" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#facc15")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#facc15" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#f97316")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#f97316" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#f87171")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#f87171" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("#3730a3")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#3730a3" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("#7c3aed")}
            className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#7c3aed" }}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
