import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      const itemToIncrement = state.item;
      itemToIncrement.quantity += 1;
      return {
        items: [...state.items],
      };
    case "DECREMENT_QUANTITY":
      const itemToDecrement = state.item;
      if (itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        return {
          items: [...state.items],
        };
      }
  }
}

function Increment({ itemId, dispatch }) {
  function handleIncrement() {
    dispatch({ type: "INCREMENT_QUANTITY", payload: itemId });
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT_QUANTITY", payload: itemId });
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Increment;
