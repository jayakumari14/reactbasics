import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter(counter + 1);
  };
  const removeValue = () => {
    setcounter(counter - 1);
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
