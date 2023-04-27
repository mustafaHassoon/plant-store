import { createContext, useContext, useReducer } from "react";
import service from "../services";

const initialCart = {
  items: [],
};

const CartContext = createContext(initialCart);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
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
  //console.log(cart);
  switch (action.type) {
    case "SET_ITEMS":
      console.log(cart);
      const items = action.payload.items.map((item) => {
        const product = service.getProductById(item.id);
        const { sizes, ...productWithoutSizes } = product; // Exclude sizes from product
        return {
          ...productWithoutSizes, // Use all other details from product
          options: item.options, // Replace sizes with options from payload
          quantity: item.quantity,
          price: item.price,
        };
      });

      return {
        items: items,
      };
    case "ADD_ITEM":
      const existingItem = cart.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.options.size === action.payload.options.size
      );

      if (existingItem) {
        existingItem.quantity = safeAdd(existingItem.quantity, 1);
        return {
          items: [...cart.items],
        };
      } else {
        let newObject = {
          id: action.payload.id,
          quantity: 1,
          price: action.payload.price,
          options: {
            size: action.payload.options.size,
            pot: "No Pot",
          },
        };
        return {
          ...cart,
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
      return {
        items: [],
      };
    case "INCREMENT_QUANTITY":
      //console.log(cart.items);
      const itemToIncrement = cart.items.find(
        (item) => item.id === action.payload
      );
      itemToIncrement.quantity = safeAdd(itemToIncrement.quantity, 1);
      return {
        items: [...cart.items],
      };
    case "DECREMENT_QUANTITY":
      const itemToDecrement = cart.items.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrement.quantity > 1) {
        itemToDecrement.quantity = safeAdd(itemToDecrement.quantity, -1);
        return {
          items: [...cart.items],
        };
      }
    default:
      return cart;
  }
}
