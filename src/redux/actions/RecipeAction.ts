import { ALL_RECIPE } from "../types/RecipeType";

const setAllRecipe = (payload: any) => ({
  type: ALL_RECIPE,
  payload
})

export default {
  setAllRecipe
}