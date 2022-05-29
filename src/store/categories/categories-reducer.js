const INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "FETCH_CATEGORIES_FAILED",
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesArray: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
