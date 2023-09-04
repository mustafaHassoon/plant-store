import { createContext, useContext, useReducer, useEffect } from "react";
import service from "../services";

const initialCart = {
  items: [],
};

const CartContext = createContext(initialCart);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    console.log(
      "Before getting from localStorage:",
      localStorage.getItem("cart")
    );
    const localData = localStorage.getItem("cartItems");
    console.log("After getting from localStorage:", localData);

    if (localData) {
      dispatch({
        type: "SET_ITEMS",
        payload: { items: JSON.parse(localData) },
      });
    }
  }, []);

  useEffect(() => {
    console.log("Before setting to localStorage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("After setting to localStorage:", localStorage.getItem("cart"));
  }, [cart.items]);

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
  switch (action.type) {
    case "SET_ITEMS":
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
        // If the item already exists, update its quantity
        const updatedItems = cart.items.map((item) =>
          item.id === existingItem.id &&
          item.options.size === existingItem.options.size
            ? { ...item, quantity: safeAdd(item.quantity, 1) }
            : item
        );
        return { items: updatedItems };
      } else {
        // If the item doesn't exist, add it to the cart
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
      return {
        items: [],
      };
    case "INCREMENT_QUANTITY":
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
