const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", "", "I am H1 Tag"), React.createElement('h2', {}, 'I am an h2 tag')]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", "", "I am H1 Tag"), React.createElement('h2', {}, 'I am an h2 tag')]
  )
]
);
console.log('parent', parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
