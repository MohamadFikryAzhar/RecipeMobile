import { Image, ScrollView, Text, View, TouchableHighlight } from "react-native";
import styles from "../Recipes/styles/userRecipeStyle";
import { deleteRecipeAction } from "../../redux/actions/RecipeAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SectionUserRecipe = ({data}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = useSelector(state => state.login);

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${login.data.accesstoken}`
    }
  }

  function deleteRecipe(id) {
    dispatch(deleteRecipeAction(id, headers))
      .then(() => {
        navigation.goBack()
      })
      .catch(err => {
        console.error(err);
      })
  }
  return (
    <>
      {data?.map((item, index) => {
        return (
          <ScrollView key={index} style={styles.sectionRecipe}>
            <Image source={{ uri: item.image_path }} style={styles.imageRecipe} />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeCategory}>{item.category}</Text>
            </View>
            <View style={styles.editRecipe}>
              <TouchableHighlight style={styles.editBtn} onPress={() => navigation.push('EditRecipe')}>
                <Text style={styles.belowActionBtn}>Edit Recipe</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.deleteBtn} onPress={() => deleteRecipe(item.id)}>
                <Text style={styles.belowActionBtn}>Delete Recipe</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        );
      })}
    </>
  );
}

export default SectionUserRecipe;