import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipeAction, searchRecipeAction } from "../../redux/actions/RecipeAction";

export default function PopularRecipe() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const recipes = useSelector(state => state.recipes);
  const {data} = recipes;

  useEffect(() => {
    dispatch(getAllRecipeAction(currentPage))
  }, [currentPage])

  useEffect(() => {
    search.length >= 3 && dispatch(searchRecipeAction(search))
    search == '' && dispatch(getAllRecipeAction(currentPage))
  }, [search])

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>Popular Recipe</Text>
      <View style={styles.searchGroup}>
        <TextInput value={search} onChangeText={e => setSearch(recipes)} style={styles.searchBar} inputMode='search' placeholder='Search Recipe' />
      </View>
      <SectionPopularRecipe data={data} />
    </ScrollView>
  )
}