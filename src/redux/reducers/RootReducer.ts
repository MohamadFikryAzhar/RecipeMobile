import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { loginReducer, registerReducer} from "./AuthReducer";
import {deleteRecipeReducer, getAllRecipeReducer, getRecipeReducer, getUserRecipeReducer, postRecipeReducer, updateRecipeReducer} from './RecipeReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  recipes: getAllRecipeReducer,
  user_recipe: getUserRecipeReducer,
  recipe: getRecipeReducer,
  post_recipe: postRecipeReducer,
  put_recipe: updateRecipeReducer,
  delete_recipe: deleteRecipeReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;