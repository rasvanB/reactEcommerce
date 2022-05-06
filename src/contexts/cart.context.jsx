import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(item => item.id === product.id);
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== product.id);
  }
  return cartItems.map(item => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const clearCartItems = (cartItems, product) => {
  return cartItems.filter(item => item.id !== product.id);
};

export const CartContext = createContext({
  isOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  clearCartItems: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = product => {
    setCartItems(addCartItem(cartItems, product));
    setCartCount(cartCount + 1);
    setTotal(total + product.price);
  };

  const removeItemFromCart = product => {
    setCartItems(removeCartItem(cartItems, product));
    setCartCount(cartCount - 1);
    setTotal(total - product.price);
  };

  const clearItemFromCart = product => {
    setCartCount(cartCount - product.quantity);
    setCartItems(clearCartItems(cartItems, product));
    setTotal(total - product.price * product.quantity);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    clearItemFromCart,
    cartCount,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
