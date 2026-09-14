import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export const Cart = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
      <br />

      <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
      <br />
    </div>
  );
};
