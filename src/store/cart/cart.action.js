import { createAction } from "../store.utils";
import { CART_ACTION_TYPES } from "./cart.reducer";

export const addItemToCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, cartItem);

export const removeItemFromCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, cartItem);

export const clearItemFromCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, cartItem);

export const setIsCartOpen = (cartOpenState) =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, cartOpenState);
