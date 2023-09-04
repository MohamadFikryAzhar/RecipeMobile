import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles/popularRecipeStyle";
import { useEffect, useState } from "react";
import { getUserRecipeAction } from "../../redux/actions/RecipeAction";
import SectionUserRecipe from "../component/SectionUserRecipes";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UserRecipe() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const login = useSelector(state => state.login);
  const user_recipe = useSelector(state => state.user_recipe);
  const {data} = user_recipe;

  useEffect(() => {
    dispatch(getUserRecipeAction(login.data.name, currentPage))
  }, [login.data.name, currentPage])

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>My Recipe</Text>
      <SectionUserRecipe data={data} />
      <View style={styles.paginationGroup}>
        <TouchableOpacity 
          onPress={() => setCurrentPage(currentPage - 1)}
          style={currentPage <= 1 && styles.lessNone}
        >
          <Ionicons size={30} name="arrow-back-circle"/>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setCurrentPage(currentPage + 1)}
        >
          <Ionicons size={30} name="arrow-forward-circle"/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
