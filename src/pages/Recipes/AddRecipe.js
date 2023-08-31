import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/addRecipeStyle";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { postRecipeAction } from "../../redux/actions/RecipeAction";
import { useNavigation } from "@react-navigation/native";

export default function AddRecipe() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login)
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image_path, setImagePath] = useState('');
  const [category, setCategory] = useState('');

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${login.data.accesstoken}`
    }
  }

  const uploadRecipe = async () => {
    let addRecipeData = new FormData();
    addRecipeData.append("title", title);
    addRecipeData.append("ingredients", ingredients);
    addRecipeData.append("image_path", {uri: image_path.uri, name: image_path.fileName, type: image_path.type});
    addRecipeData.append("category", category);

    dispatch(postRecipeAction(addRecipeData, headers))
      .then(() => {
        navigation.navigate('Main')
      })
      .catch((err) => {
        console.error(err);
        navigation.navigate('AddRecipe')
      })
  }

  const cameraLaunch = () => {
    let options: {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    launchCamera(options, res => {
      if (res.didCancel) {
        console.info("User canceled")
      } else if (res.error) {
        console.error(res.errorMessage);
      } else {
        setImagePath(res.assets[0])
      }
    })
  }

  const galleryLaunch = () => {
    let options: {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.info("User canceled")
      } else if (res.error) {
        console.error(res.errorMessage);
      } else {
        setImagePath(res.assets[0])
      }
    })
  }

  return (
    <ScrollView>
      <View style={styles.formAddRecipeStyle}>
        <Text style={styles.fontTitle}>Add Your Recipe</Text>
        <TextInput inputMode="text" onChangeText={title => setTitle(title)} value={title} placeholder="Title" style={styles.titleInput} />
        <TextInput inputMode="text" onChangeText={ingredients => setIngredients(ingredients)} value={ingredients} placeholder="Ingredient" style={styles.ingredientInput} />
        <View style={styles.uploadGroup}>
          <TouchableOpacity style={styles.photoInput} onPress={cameraLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoInput} onPress={galleryLaunch}>
            <Text style={styles.uploadPhotoText}>Upload Food Gallery</Text>
          </TouchableOpacity>
        </View>
        <TextInput inputMode="text" placeholder="Category" onChangeText={category => setCategory(category)} value={category} style={styles.categoryInput} />

        <Button title="POST" onPress={uploadRecipe}></Button>
      </View>
    </ScrollView>
  )
}