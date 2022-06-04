import { AnyAction } from "redux";
import {
  fetchCategoriesStart,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";

export type CategoriesState = {
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: Number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categoriesArray: action.payload,
    };
  } else if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};
