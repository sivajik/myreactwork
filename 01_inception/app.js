import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id: "heading" }, "hello world ✨");
//console.log(heading);

// React Element
const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const data = 1000;

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <h1 className="heading">Hello World Functional Componenet</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
