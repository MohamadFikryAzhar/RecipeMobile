import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  allRecipe: RecipeReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>