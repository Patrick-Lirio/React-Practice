import { useState } from "react";
import "./App.css";
import Counter from "./components/counter-component/counter";
import { ToggleButton } from "./components/toggle-button-component/ToggleButton";
import ControlledInputForm from "./components/controlled-input-form/ControlledInputForm";

function App() {
  return (
    <>
      <Counter />
      <br />
      <ToggleButton />
      <br />
      <ControlledInputForm />
    </>
  );
}

export default App;
