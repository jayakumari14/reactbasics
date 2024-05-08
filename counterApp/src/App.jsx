import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  );
}

export default App;
