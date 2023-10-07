// useProductDetails.ts

import { useState } from "react";
import { useCartDispatch, useCart } from "../context/CartContext";

const useProductDetails = (product) => {
  const dispatch = useCartDispatch();
  const cart = useCart();

  const [selectedSize, setSelectedSize] = useState(() => {
    if (product && product.sizes) {
      const firstAvailableSize = Object.keys(product.sizes).find(
        (size) => product.sizes[size].available
      );
      return firstAvailableSize || "";
    }
    return "";
  });

  const [selectedPot, setSelectedPot] = useState("No Pot");

  const isInCart = () => {
    return cart.items.some((item) => item.id === product.id);
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product.id,
    });
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handlePotChange = (event) => {
    setSelectedPot(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        price: product.sizes[selectedSize].price,
        options: { size: selectedSize, pot: selectedPot },
      },
    });
  };

  return {
    selectedSize,
    selectedPot,
    isInCart,
    handleRemoveFromCart,
    handleSizeChange,
    handlePotChange,
    handleAddToCart,
  };
};

export default useProductDetails;
