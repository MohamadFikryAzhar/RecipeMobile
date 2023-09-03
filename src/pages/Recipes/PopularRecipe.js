import { ScrollView, Text, TextInput, View } from "react-native";
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipeAction, searchRecipeAction, sortingRecipeAction } from "../../redux/actions/RecipeAction";
import { Picker } from "@react-native-picker/picker";
import { sortByOptions, sortOptions } from "../../redux/config/InitState";

export default function PopularRecipe() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedSortBy, setSelectedSortBy] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const recipes = useSelector(state => state.recipes);
  const {data} = recipes;

  useEffect(() => {
    dispatch(getAllRecipeAction(currentPage, limit))
  }, [currentPage, limit])

  useEffect(() => {
    dispatch(sortingRecipeAction(selectedSortBy, selectedSort))
  }, [selectedSortBy, selectedSort]);

  useEffect(() => {
    search.length >= 3 && dispatch(searchRecipeAction(search))
    search == '' && dispatch(getAllRecipeAction(currentPage, limit))
  }, [currentPage, limit, search])

  return (
    <ScrollView>
      <Text style={styles.fontTitle}>Popular Recipe</Text>
      <View style={styles.searchGroup}>
        <TextInput 
          autoCapitalize="none" 
          autoCorrect={false} 
          clearButtonMode="always" 
          value={search} 
          onChangeText={searchValue => setSearch(searchValue)}
          style={styles.searchBar} 
          placeholder='Search Recipe' />
        <Picker
          style={styles.sortByStyle}
          selectedValue={selectedSortBy}
          onValueChange={sortByValue => {
            setSelectedSortBy(sortByValue)
          }}
        >
          {sortByOptions?.map(option => {
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          })}
        </Picker>          
        <Picker
          style={styles.sortStyle}
          selectedValue={selectedSort}
          onValueChange={sortValue => {
            setSelectedSort(sortValue)
          }}
        >
          {sortOptions?.map(option => {
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          })}
        </Picker>
      </View>
      <SectionPopularRecipe data={data} />
    </ScrollView>
  )
}