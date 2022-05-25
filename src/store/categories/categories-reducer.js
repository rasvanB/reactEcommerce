import { createContext } from "react";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};
