import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-4xl text-white text-center">Password Generator</h1>
    </>
  );
}

export default App;
