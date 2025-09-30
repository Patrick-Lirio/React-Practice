import React, { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(0);
  //   const [incrementBy, setincrementBy] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count <= 0) {
      return (count = 0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div>
        <h1>Count value is: {count}</h1>
        <button type="button" onClick={increment}>
          Increment
        </button>
        
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default counter;
