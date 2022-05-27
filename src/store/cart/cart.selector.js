import { createSelector } from "reselect";

export const selectIsCartOpen = (state) => state.cart.isCartOpen;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartCount = (state) => state.cart.cartCount;
const selectCartReducer = (state) => state.cart;
export const selectCartItemsArray = createSelector(
  [selectCartReducer],
  (cartState) => cartState.cartItems
);
