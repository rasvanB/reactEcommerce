import { CATEGORIES_ACTION_TYPES } from "./categories-reducer";
import { createAction } from "../store.utils";

export const setCategoriesArray = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_ARRAY, categories);
