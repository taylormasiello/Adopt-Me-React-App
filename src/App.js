import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Turbo",
      animal: "Dog",
      breed: "Chiwawa",
    }),
    React.createElement(Pet, {
      name: "Roxy",
      animal: "Dog",
      breed: "Pittie-Lab",
    }),
    React.createElement(Pet, { name: "Halo", animal: "Cat", breed: "Mixed" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
