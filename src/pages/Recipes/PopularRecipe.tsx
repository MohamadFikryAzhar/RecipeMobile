import { ScrollView, Text, View } from "react-native";
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { getAllRecipeAction } from "../../redux/actions/RecipeAction";
import { RootState } from "../../redux/reducers/RootReducer";
import { useDispatch, useSelector } from "react-redux";

export default function PopularRecipe(): JSX.Element {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipeAction({page: 1, limit: 5}))
  }, []);

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>Popular Recipe</Text>
      {
        recipes.map((item: any, index: any) => {
          <ScrollView key={index}>
            <SectionPopularRecipe image={item.image_path} title={`${item.title}`} category={`${item.category}`} name={`${item.user_name}`} />
          </ScrollView>
        })
      }
    </ScrollView>
  )
}