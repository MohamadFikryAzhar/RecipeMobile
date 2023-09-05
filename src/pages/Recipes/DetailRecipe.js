import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction } from "../../redux/actions/RecipeAction";
import styles from "./styles/detailReciepStyle";
import { Line } from "react-native-svg";

export default function DetailRecipe() {
  const route = useRoute();
  const id = route.params.id;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe);
  const {data} = recipe;

  useEffect(() => {
    dispatch(getRecipeAction(id))
  }, [])

  return (
    <ScrollView style={styles.marginMain}>
      <ImageBackground source={{uri: data.image_path}} width={80} />
      <View style={styles.mainInfo}>
        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={styles.usernameText}>by Chef {data.user_name}</Text>
      </View>

      <View style={styles.ingredientGroup}>
        <Text style={styles.ingredientTitle}>Ingredients</Text>
        <Text style={styles.ingredientText}>{data.ingredients}</Text>
      </View>
    </ScrollView>
  )
}