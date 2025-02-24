const heading = React.createElement(
  "h1",
  { id: "heading", key: "key1" },
  "hello world from react 123"
);

const heading2 = React.createElement(
  "h2",
  { id: "heading2", key: "key2" },
  "hello world h2 from react"
);

const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const child2 = React.createElement("div", { id: "child2" }, [
  heading,
  heading2,
]);
const parent = React.createElement("div", { id: "parent" }, [child, child2]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
