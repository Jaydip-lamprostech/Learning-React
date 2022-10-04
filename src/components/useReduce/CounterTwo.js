import React, { useReducer } from "react";

function CounterTwo() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 20,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };

      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };

      case "increment2":
        return { ...state, secondCounter: state.secondCounter + action.value };

      case "decrement2":
        return { ...state, secondCounter: state.secondCounter - action.value };
      case "reset":
        return initialState;

      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>counter - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div></div>
      <div>counter2 - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterTwo;
