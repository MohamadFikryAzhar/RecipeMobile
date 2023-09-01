import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/addRecipeStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecipeAction, updateRecipeAction } from "../../redux/actions/RecipeAction";
import { useNavigation, useRoute } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { storageOptions } from "../../redux/config/InitState";

export default function EditRecipe() {
  const route = useRoute();
  const {id} = route.params;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipe)
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState('');
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    image_path: '',
    category: ''
  })

  function cameraLaunch() {
    launchCamera({storageOptions}, res => {
      if (res.didCancel) {
        console.info("User canceled")
      } else if (res.error) {
        console.error(res.errorMessage);
      } else {
        setRecipeData({
          ...recipeData,
          image_path: res.assets[0]
        })
      }
    })
  }

  function imageLibraryLaunch() {
    launchImageLibrary({storageOptions}, res => {
      if (res.didCancel) {
        console.info("User canceled")
      } else if (res.error) {
        console.error(res.errorMessage);
      } else {
        setRecipeData({
          ...recipeData,
          image_path: res.assets[0]
        })
      }
    })
  }

  useEffect(() => {
    dispatch(getRecipeAction(id, headers));
  }, [id])

  useEffect(() => {
    recipe &&
      setRecipeData({
        title: recipe.title,
        ingredients: recipe.ingredients,
        image_path: recipe.image_path,
        category: recipe.category
      })
  }, [recipe])

  const editRecipe = () => {
    let editRecipeData = new FormData();
    editRecipeData.append("title", recipeData.title);
    editRecipeData.append("ingredients", recipeData.ingredients);
    editRecipeData.append("category", recipeData.category);
    selectedImage && editRecipeData.append("image_path", {uri: selectedImage.uri, name: selectedImage.fileName, type: selectedImage.type});

    dispatch(updateRecipeAction(editRecipeData, id, navigation.navigate));
  }

  function onEditRecipeChange(name, value) {
    setRecipeData({
      ...recipeData,
      [name]:value
    })
  }

  return (
    <ScrollView>
      <View style={styles.formAddRecipeStyle}>
        <Text style={styles.fontTitle}>Add Your Recipe</Text>
        <TextInput inputMode="text" onChangeText={title => onEditRecipeChange('title', title)} value={recipeData.title} placeholder="Title" style={styles.titleInput} />
        <TextInput inputMode="text" onChangeText={ingredients => onEditRecipeChange('ingredients', ingredients)} value={recipeData.ingredients} placeholder="Ingredient" style={styles.ingredientInput} />
        <View style={styles.uploadGroup}>
          <TouchableOpacity style={styles.photoInput} onPress={cameraLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoInput} onPress={imageLibraryLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Gallery</Text>
          </TouchableOpacity>
        </View>
        <TextInput inputMode="text" placeholder="Category" onChangeText={category => onEditRecipeChange('category', category)} value={recipeData.category} style={styles.categoryInput} />

        <Button title="POST" onPress={editRecipe}></Button>
      </View>
    </ScrollView>
  )
}