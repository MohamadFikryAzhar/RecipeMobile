import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeAction } from "../../redux/actions/RecipeAction";
import styles from "./styles/detailReciepStyle";

export default function DetailRecipe() {
  const route = useRoute();
  const {id} = route?.params;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe);
  const {data} = recipe;

  useEffect(() => {
    dispatch(getRecipeAction(id))
  }, [])

  return (
    <ScrollView>
      <ImageBackground source={{uri: data.image_path}} style={styles.imageTop}>
        <View style={styles.mainInfo}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.usernameText}>by Chef {data.user_name}</Text>
        </View>
      </ImageBackground>

      <View style={styles.ingredientGroup}>
        <Text style={styles.ingredientTitle}>Ingredients</Text>
        {data?.ingredients.split(',').map((ingredient, index) => {
          return (
            <View key={index}>
              <Text style={{marginTop: 1, margin: 20}}>-</Text>
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}