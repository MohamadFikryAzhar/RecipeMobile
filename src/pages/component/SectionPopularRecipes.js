import { Image, ScrollView, Text, View, TouchableHighlight } from "react-native";
import styles from "../Recipes/styles/popularRecipeStyle";
import { useNavigation } from "@react-navigation/native";
import { ColorMatch } from "../init/ColorMatch";

const SectionPopularRecipe = ({data}) => {  
  const navigation = useNavigation();
  return (
    <>
      {data?.map((item, index) => {
        return (
          <ScrollView key={index} style={styles.sectionRecipe}>
            <TouchableHighlight underlayColor={ColorMatch.orange} onPress={() => navigation.push('DetailRecipe', {id: item.id}) }>
              <Image source={{ uri: item.image_path }} style={styles.imageRecipe} />
            </TouchableHighlight>
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeCategory}>{item.category}</Text>
              <Text style={styles.recipeUploader}>{item.user_name}</Text>
            </View>
            <View style={styles.userReaction}>
              <TouchableHighlight>
                <Image source={require('./../../assets/likebtn.png')} />
              </TouchableHighlight>
              <TouchableHighlight>
                <Image source={require('./../../assets/savebtn.png')} />
              </TouchableHighlight>
            </View>
          </ScrollView>
        );
      })}
    </>
  );
}

export default SectionPopularRecipe;