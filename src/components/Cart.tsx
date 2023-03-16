import { ACTIONS } from "../App";
import Increment from "./Increment";
import { useReducer, useState } from "react";
import * as React from "react";
import CartItem from "./CartItem";
import Drawer from "@mui/material/Drawer";
import { colors, IconButton } from "@material-ui/core";
import { borderRadius } from "@mui/system";
import service from "../services";
import CloseIcon from "@mui/icons-material/Close";

const initialState = {
  items: [],
  total: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ITEMS":
      const items = action.payload.map((item) => {
        const product = service.getProductById(item.id);
        return {
          ...product,
          quantity: item.quantity,
        };
      });

      return {
        items: items,
        total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
      };
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        console.log(state.items);
        return {
          items: [...state.items],
          total: state.total + existingItem.price,
        };
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const item = state.items.find((item) => item.id === action.payload);
      console.log(state.items);
      return {
        items: filteredItems,
        total: state.total - item.price * item.quantity,
      };

    case "EMPTY_CART":
      return {
        items: [],
        total: 0,
      };
    case "INCREMENT_QUANTITY":
      console.log(state.items);
      const itemToIncrement = state.items.find(
        (item) => item.id === action.payload
      );
      itemToIncrement.quantity += 1;
      return {
        items: [...state.items],
        total: state.total + itemToIncrement.price,
      };
    case "DECREMENT_QUANTITY":
      const itemToDecrement = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
        return {
          items: [...state.items],
          total: state.total - itemToDecrement,
        };
      }
    default:
      return state;
  }
}

export default function Cart({ items, onClose }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(items);

  React.useEffect(() => {
    if (items) dispatch({ type: "SET_ITEMS", payload: items });
  }, [items]);

  function handleAddItem(item) {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function handleRemoveItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function handleEmptyCart() {
    dispatch({ type: "EMPTY_CART" });
  }

  function handleIncrement(id) {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  }

  function handleDecrement(id) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  }
  return (
    <Drawer
      open={true}
      anchor="right"
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 500,
          background: colors.amber,
        },
      }}
    >
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <div>
        <h1>Shopping Cart</h1>

        {state.items.map((item) => (
          <CartItem {...item}></CartItem>
        ))}

        <h2>Total: ${state.total}</h2>
        <button onClick={handleEmptyCart}>Empty Cart</button>
      </div>
    </Drawer>
  );
}
