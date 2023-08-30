import { ScrollView, Text } from "react-native";
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipeAction } from "../../redux/actions/RecipeAction";

export default function PopularRecipe() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const recipes = useSelector(state => state.recipes);
  const {data} = recipes;

  useEffect(() => {
    dispatch(getAllRecipeAction(currentPage))
  }, [currentPage])

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>Popular Recipe</Text>
      <SectionPopularRecipe data={data} />
    </ScrollView>
  )
}