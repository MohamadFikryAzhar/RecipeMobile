import { ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles/popularRecipeStyle";
import { useEffect, useState } from "react";
import { getUserRecipeAction } from "../../redux/actions/RecipeAction";
import SectionUserRecipe from "../component/SectionUserRecipes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserRecipe() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const user_recipe = useSelector(state => state.user_recipe);
  const {data} = user_recipe;

  useEffect(() => {
    dispatch(getUserRecipeAction(AsyncStorage.getItem("name"), currentPage))
  }, [AsyncStorage.getItem("name"), currentPage])

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>My Recipe</Text>
      <SectionUserRecipe data={data} />
    </ScrollView>
  )
}
