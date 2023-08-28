import { ALL_RECIPE, Action, initRecipeType } from "../types/RecipeType"

export default (state: any = initRecipeType, action: Action) => {
  switch(action.type) {
    case ALL_RECIPE:
      return Object.assign({}, state, {
        allRecipe: action.payload
      })
    default:
      return state;
  }
}