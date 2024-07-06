import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import { InputCounter } from "./components/InputCounter";

function App() {
  return (
    <div>
      <h3>React and Redux Demo!</h3> <hr />
      <Counter />
      <InputCounter />
    </div>
  );
}

export default App;
