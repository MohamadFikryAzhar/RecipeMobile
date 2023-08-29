import { Image, ScrollView, Text, View, TouchableHighlight } from "react-native";
import styles from "./../Recipes/styles/popularRecipeStyle";
import { ReactNode } from "react";

const SectionPopularRecipe = ({data}): ReactNode => (
  <>
    {data?.map((item: any, index: any) => {
      return (
        <ScrollView key={index} style={styles.sectionRecipe}>
          <Image source={{ uri: item.image_path }} style={styles.imageRecipe} />
          <View style={styles.recipeInfo}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={styles.recipeCategory}>{item.category}</Text>
            <Text style={styles.recipeUploader}>{item.user_name}</Text>
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
      );
    })}
  </>
)

export default SectionPopularRecipe;