import { combineReducers } from "redux";
import { editUserReducer, getUserReducer, loginReducer, registerReducer} from "./AuthReducer";
import {deleteRecipeReducer, getAllRecipeReducer, getRecipeReducer, getUserRecipeReducer, postRecipeReducer, updateRecipeReducer} from './RecipeReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    edit_user: editUserReducer,
    get_user: getUserReducer,
    recipes: getAllRecipeReducer,
    user_recipe: getUserRecipeReducer,
    recipe: getRecipeReducer,
    post_recipe: postRecipeReducer,
    put_recipe: updateRecipeReducer,
    delete_recipe: deleteRecipeReducer
});

export default rootReducer;