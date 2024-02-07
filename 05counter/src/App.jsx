// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(15);

//   //let counter = 5;

//   const addValue = () => {
//     //counter = counter + 1;
//     if (counter < 20) {
//       setCounter(counter + 1);
//     }
//   };

//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <>
//       <h1>Chai aur code</h1>
//       <h2>counter value: {counter}</h2>
//       <button onClick={addValue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>remove value</button>
//     </>
//   );
// }

// export default App;

// ------------------------------------------------------------

import "./App.css";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>counter value : {counter}</p>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
};
export default App;
