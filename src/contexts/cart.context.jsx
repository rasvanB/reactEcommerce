import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
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
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== product.id);
  }
  return cartItems.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCartItems = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
};
export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
        cartCount: state.cartCount + 1,
        total: state.total + payload.price,
      };
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, payload),
        cartCount: state.cartCount - 1,
        total: state.total - payload.price,
      };
    case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearCartItems(state.cartItems, payload),
        cartCount: state.cartCount - payload.quantity,
        total: state.total - payload.price * payload.quantity,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type}`);
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, total } = state;
  const addItemToCart = (product) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: product });
  };

  const removeItemFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
  };

  const clearItemFromCart = (product) => {
    dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: product });
  };

  const setIsCartOpen = (cartOpen) => {
    dispatch({ type: "TOGGLE_CART_OPEN", payload: cartOpen });
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
