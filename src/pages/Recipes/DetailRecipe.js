import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction } from "../../redux/actions/RecipeAction";

export default function DetailRecipe() {
  const route = useRoute();
  const {id} = route.params;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe);
  const {data} = recipe;

  useEffect(() => {
    dispatch(getRecipeAction(id))
  }, [])

  return (
    <View>
      <Text>Detail recipe activity</Text>
      <Image source={{ uri: data.image_path }}/>
      <Text>{data.title}</Text>
      <Text>{data.ingredients}</Text>
      <Text>{data.category}</Text>
      <Text>{data.user_name}</Text>
    </View>
  )
}