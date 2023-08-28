import { ScrollView, Text, View } from "react-native";
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RecipeAction } from "../../redux/actions/rootAction";
import { RootState } from "../../redux/reducers/rootReducer";

export default function PopularRecipe(): JSX.Element {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const recipes = useSelector((state: RootState) => state.allRecipe);
  const {data} = recipes;

  const loadRecipe = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/recipe/main?page=${page}&limit=${limit}`)
      .then(res => {
        dispatch(RecipeAction.setAllRecipe(res.data.data));
      })
  }

  useEffect(() => {
    loadRecipe()
  }, []);

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>Popular Recipe</Text>
      {
        data?.map((item: any, index: any) => {
          <View key={index}>
            <SectionPopularRecipe image={item.image_path} title={item.title} category={item.category} name={item.user_name} />
          </View>
        })
      }
    </ScrollView>
  )
}