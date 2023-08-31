import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction } from "../../redux/actions/RecipeAction";

export default function DetailRecipe() {
  const route = useRoute();
  const {id} = route.params;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe);
  const login = useSelector(state => state.login);

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${login.data.accesstoken}`
    }
  }

  useEffect(() => {
    dispatch(getRecipeAction(id, headers))
  }, [])

  return (
    <View>
      <Text>Detail recipe activity</Text>
      <Text>{recipe.title}</Text>
    </View>
  )
}