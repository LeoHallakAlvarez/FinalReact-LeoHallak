import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, amount) => {
    const productAmount = { ...product, amount };
    if (!isInCart(product.id)) {
      setCart([...cart, productAmount]);
    } else {
      const newProducts = cart.map((prod) => {
        if (prod.id === product.id) {
          const newProduct = {
            ...prod,
            amount: prod.amount + amount,
          };
          return newProduct;
        } else {
          return prod;
        }
      });

      setCart(newProducts);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const getQuantity = () => {
    let cant = 0;
    cart.forEach((e) => (cant += e.amount));
    return cant;
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((e) => (total += e.amount * e.price));
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        getQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;