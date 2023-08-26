import { Button, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./styles/addRecipeStyle";

export default function AddRecipe() {
  return (
    <ScrollView>
      <View style={styles.formAddRecipeStyle}>
        <Text style={styles.fontTitle}>Add Your Recipe</Text>
        <TextInput inputMode="text" placeholder="Title" style={styles.titleInput} />
        <TextInput inputMode="text" placeholder="Ingredient" style={styles.ingredientInput} />
        <TextInput inputMode="none" placeholder="Photo" style={styles.photoInput} />
        <TextInput inputMode="none" placeholder="Category" style={styles.categoryInput} />

        <Button title="POST"></Button>
      </View>
    </ScrollView>
  )
}