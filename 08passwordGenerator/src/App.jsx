// import { useState, useCallback, useEffect, useRef } from "react";

import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setpassword] = useState("");

//   //useRef hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%Z^&*(){}[]~`+-";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setpassword(pass);
//   }, [length, numberAllowed, charAllowed, setpassword]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 100);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
//         <h1 className="text-white text-center my-3">Password generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
//             onClick={copyPasswordToClipboard}
//           >
//             copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label>Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                 setCharAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="characterInput">Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDabcd";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setpassword]);

  const passwordRef = useRef(null);

  const copToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className=" text-white">
      <div>
        <input
          type="text"
          className=" text-black"
          placeholder="password"
          value={password}
          ref={passwordRef}
        />
        <button className=" bg-red-500" onClick={copToClipboard}>
          copy
        </button>
      </div>
      <div>
        <div>
          <input
            type="range"
            min={0}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>number({length})</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>character</label>
        </div>
      </div>
    </div>
  );
};
export default App;
