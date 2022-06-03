import { createSelector } from "reselect";
import { CategoriesState } from "./categories-reducer";
import { CategoryMap } from "./categories-reducer";

const selectCategoriesReducer = (state: any): CategoriesState =>
  state.categories;
export const selectLoadingState = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray): CategoryMap =>
    categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
