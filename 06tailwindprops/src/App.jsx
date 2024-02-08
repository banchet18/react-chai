import "./App.css";
import Card from "./components/card";
let myObj = {
  username: "hitesh",
  age: 21,
};

function App() {
  return (
    <>
      <h1>tailwind</h1>
      <Card channel="chaiorcode" someObj={myObj} />
      <Card />
    </>
  );
}

export default App;
