import { Image, ScrollView, Text, View } from "react-native";
import styles from "./../Recipes/styles/popularRecipeStyle";
import { TouchableHighlight } from "react-native";

type popularRecipeType = {
  image: any,
  title: string,
  category: string,
  name: string
};

const SectionPopularRecipe = (props: popularRecipeType): JSX.Element => {
  return (
    <ScrollView style={styles.sectionRecipe}>
      <Image source={require(`${props.image}`)} style={styles.imageRecipe}/>
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{props.title}</Text>
        <Text style={styles.recipeCategory}>{props.category}</Text>
        <Text style={styles.recipeUploader}>{props.name}</Text>
      </View>
      <View style={styles.userReaction}>
        <TouchableHighlight>
          <Image source={require('./../../assets/likebtn.jpg')} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image source={require('./../../assets/savebtn.jpg')} />
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

export default SectionPopularRecipe;