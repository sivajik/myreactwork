import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "hello world ✨");
//console.log(heading);

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

// React Componenet
// 1. Class base components -> old way of writing code
// 2. Functional components -> new way of writing code

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Hello World Functional Componenet</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
