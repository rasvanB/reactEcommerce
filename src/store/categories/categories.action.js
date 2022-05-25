import { CATEGORIES_ACTION_TYPES } from "./categories-reducer";
import { createAction } from "../store.utils";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
