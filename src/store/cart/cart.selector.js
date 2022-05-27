import { createSelector } from "reselect";

export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartCount = (state) => state.cart.cartCount;
const cartItemsReducer = (state) => state.cart.cartItems;
export const selectCartItemsArray = createSelector(
  [cartItemsReducer],
  (cartItemsArray) => cartItemsArray
);
