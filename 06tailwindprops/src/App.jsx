import "./App.css";
import Card from "./components/card";
let myObj = {
  username: "hitesh",
  age: 21,
};

let newArr = [1, 2, 3, 4, 5];

function App() {
  return (
    <>
      <h1>tailwind</h1>
      <Card
        username="chaiorcode"
        someObj={myObj}
        someArr={newArr}
        btnText="click me"
      />
      <Card username="hitesh" />
    </>
  );
}

export default App;
