function App() {
  let counter = 5;

  const addValue = () => {
    console.log("clicked", Math.random());
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button>Remove Value</button>
    </>
  );
}

export default App;
