import "./App.css";
import Card from "./components/Card";
function App() {
  // let users = {
  //   name: "deena",
  //   age: 20,
  // };

  // let arr = [1, 2, 3, 4, 5];
  let userImg =
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let userImagge =
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <h1 className="text-red-500 bg-green-300 p-5 text-4xl rounded mb-5">
        welcome to vite and tailwind{" "}
      </h1>
      <Card username="dania" userImg={userImg} />
      <Card username="james" btn="visit profile" userImg={userImagge} />
    </>
  );
}

export default App;
