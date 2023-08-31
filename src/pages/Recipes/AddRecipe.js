import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/addRecipeStyle";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postRecipeAction } from "../../redux/actions/RecipeAction";
import { useNavigation } from "@react-navigation/native";
import { cameraLaunch, galleryLaunch } from "../init/CameraInit";

export default function AddRecipe() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState('');
  const [recipeData, setRecipeData] = useState({
    title: '',
    ingredients: '',
    image_path: '',
    category: ''
  });

  const uploadRecipe = async () => {
    let addRecipeData = new FormData();
    addRecipeData.append("title", recipeData.title);
    addRecipeData.append("ingredients", recipeData.ingredients);
    selectedImage && addRecipeData.append("image_path", {uri: selectedImage.uri, name: selectedImage.fileName, type: selectedImage.type});
    addRecipeData.append("category", recipeData.category);

    dispatch(postRecipeAction(addRecipeData, navigation.navigate));
  }

  const onRecipeInput = (name, value) => {
    setRecipeData({
      ...recipeData,
      [name]:value
    })
  }

  return (
    <ScrollView>
      <View style={styles.formAddRecipeStyle}>
        <Text style={styles.fontTitle}>Add Your Recipe</Text>
        <TextInput inputMode="text" onChangeText={title => onRecipeInput('title', title)} value={recipeData.title} placeholder="Title" style={styles.titleInput} />
        <TextInput inputMode="text" onChangeText={ingredients => onRecipeInput('ingredients', ingredients)} value={recipeData.ingredients} placeholder="Ingredient" style={styles.ingredientInput} />
        <View style={styles.uploadGroup}>
          <TouchableOpacity style={styles.photoInput} onPress={cameraLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoInput} onPress={galleryLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Gallery</Text>
          </TouchableOpacity>
        </View>
        <TextInput inputMode="text" placeholder="Category" onChangeText={category => onRecipeInput('category', category)} value={recipeData.category} style={styles.categoryInput} />

        <Button title="POST" onPress={uploadRecipe}></Button>
      </View>
    </ScrollView>
  )
}