import { useState } from "react";
import "./App.css";
import Counter from "./components/counter-component/counter";
import ToggleButton from "./components/toggle-button-component/ToggleButton";

function App() {
  return (
    <>
      <Counter />
      <br />
      <ToggleButton />
    </>
  );
}

export default App;
