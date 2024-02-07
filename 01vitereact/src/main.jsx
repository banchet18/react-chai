import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { createElement } from "react";
// // const reactElement = {
// //   type: "a",
// //   props: {
// //     href: "https://google.com",
// //     target: "_blank",
// //   },
// //   children: "Click me to visit google",
// // };

// const anotherElement = (
//   <a href="https://google.com" target="blank">
//     Visit google
//   </a>
// );

// // babel do this
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "blank",
//   },
//   "Click me to visit google"
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// ----------------------------------------------------

// const reactElement = {
//   type: "a",
//   props: {
//     href: "hello",
//     target: "blank",
//   },
//   children: "hello my name",
// };
const reactElement = React.createElement(
  "a",
  {
    href: "hello",
    target: "blank",
  },
  "hello my name"
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
