import React, { useReducer } from "react";

function CounterOne() {
  const initialState = 0;

  // reducer to perform action on initial state and return new state
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  //initilizing the useReducer
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>counter - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default CounterOne;
