import { USER_ACTION_TYPES } from "./user-reducer";
import { createAction } from "../store.utils";
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
