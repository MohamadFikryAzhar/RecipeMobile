export const ALL_RECIPE = 'ALL_RECIPE';

export type RecipeType = {
  data: [],
  loading: boolean,
  error: boolean,
  errorMessage: string,
  nextPage: number
}

export const initRecipeType: RecipeType = {
  data: [],
  loading: false,
  error: false,
  errorMessage: "",
  nextPage: 1
}

export type Action = {
  type: string,
  payload?: any
}