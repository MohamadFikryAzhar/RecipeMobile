import { ScrollView, Text, TextInput, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles/popularRecipeStyle";
import SectionPopularRecipe from "../component/SectionPopularRecipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipeAction, searchRecipeAction, sortingRecipeAction } from "../../redux/actions/RecipeAction";
import { sortByOptions, sortOptions } from "../../redux/config/InitState";
import { Dropdown } from "react-native-element-dropdown";

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
      <TextInput 
        autoCapitalize="none" 
        autoCorrect={false} 
        clearButtonMode="always" 
        value={search} 
        onChangeText={searchValue => setSearch(searchValue)}
        style={styles.searchBar} 
        placeholder='Search Recipe' />
      <View style={styles.sortGroup}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sortByOptions}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          searchPlaceholder="Search..."
          value={selectedSortBy}
          onChange={item => {
            setSelectedSortBy(item.value);
          }}
          renderLeftIcon={() => (
            <Ionicons
              style={styles.icon}
              name="funnel"
              size={20}
            />
          )}
        />
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sortOptions}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          searchPlaceholder="Search..."
          value={selectedSort}
          onChange={item => {
            setSelectedSort(item.value);
          }}
          renderLeftIcon={() => (
            <Ionicons
              style={styles.icon}
              name="funnel"
              size={20}
            />
          )}
        />
      </View>
      <SectionPopularRecipe data={data} />
    </ScrollView>
  )
}