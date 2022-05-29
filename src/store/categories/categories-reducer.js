const INITIAL_STATE = {
  categoriesArray: [],
};

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_ARRAY: "SET_CATEGORIES_ARRAY",
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_ARRAY:
      return {
        ...state,
        categoriesArray: payload,
      };

    default:
      return state;
  }
};
