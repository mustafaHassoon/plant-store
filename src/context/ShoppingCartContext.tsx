import React, { createContext, useReducer } from "react";

interface CartContextType {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  emptyCart: () => void;
  total: number;
}

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  emptyCart: () => {},
  total: 0,
});
export default CartContext;

const initialState = {
  items: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.item.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.item.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.item, quantity: 1 }],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    case "EMPTY_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children, item }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", id });
  };

  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        emptyCart,
        total: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
