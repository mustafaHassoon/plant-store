import { createContext, useContext, useReducer, useEffect } from "react";
import service from "../services";
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

const initialCart = {
  items: [],
};

const CartContext = createContext(initialCart);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    const localData = localStorage.getItem("cart");
    if (localData) {
      const parsedData = JSON.parse(localData);
      if (Array.isArray(parsedData.items)) {
        if (JSON.stringify(parsedData.items) !== JSON.stringify(cart.items)) {
          dispatch({
            type: "SET_ITEMS",
            payload: { items: parsedData.items },
          });
        }
      } else {
        console.error("Items should be an array");
      }
    }
  }, []);

  useEffect(() => {
    if (cart.items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart.items]);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

if (process.env.NODE_ENV === "development") {
  CartProvider.whyDidYouRender = true;
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function safeAdd(a, b) {
  const factor = 100;
  const aValue = Math.round(a * factor);
  const bValue = Math.round(b * factor);
  const result = aValue + bValue;
  return result / factor;
}

function cartReducer(cart, action) {
  switch (action.type) {
    case "SET_ITEMS":
      const newItems = action.payload.items.map((item) => {
        const product = service.getProductById(item.id);
        const { sizes, ...productWithoutSizes } = product;
        return {
          ...productWithoutSizes,
          options: item.options,
          quantity: item.quantity,
          price: item.price,
        };
      });

      if (JSON.stringify(newItems) !== JSON.stringify(cart.items)) {
        return {
          items: newItems,
        };
      }
      return cart;

    case "ADD_ITEM":
      const existingItem = cart.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.options.size === action.payload.options.size
      );

      if (existingItem) {
        const updatedItems = cart.items.map((item) =>
          item.id === existingItem.id &&
          item.options.size === existingItem.options.size
            ? { ...item, quantity: safeAdd(item.quantity, 1) }
            : item
        );
        return { items: updatedItems };
      } else {
        const newObject = {
          id: action.payload.id,
          quantity: 1,
          price: action.payload.price,
          options: {
            size: action.payload.options.size,
            pot: "No Pot",
          },
        };
        return {
          items: [...cart.items, newObject],
        };
      }

    case "REMOVE_ITEM":
      const filteredItems = cart.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        items: filteredItems,
      };

    case "EMPTY_CART":
      localStorage.removeItem("cart");
      return {
        items: [],
      };

    case "INCREMENT_QUANTITY":
      const incrementedItems = cart.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: safeAdd(item.quantity, 1) }
          : item
      );
      return { items: incrementedItems };

    case "DECREMENT_QUANTITY":
      const decrementedItems = cart.items.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: safeAdd(item.quantity, -1) }
          : item
      );
      return { items: decrementedItems };

    default:
      return cart;
  }
}
