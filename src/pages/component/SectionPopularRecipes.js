import { Image, ScrollView, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from "../Recipes/styles/popularRecipeStyle";
import { useNavigation } from "@react-navigation/native";
import { ColorMatch } from "../init/ColorMatch";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";

const SectionPopularRecipe = ({data}) => {  
  const navigation = useNavigation();
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);

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
              <TouchableOpacity onPress={() => setIsLike(true)}>
                <Ionicons name="thumbs-up-outline" style={isLike ? {color: 'yellow'} : {color: 'black'}} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsSave(true)}>
                <Ionicons name="bookmark-outline" style={isSave ? {color: 'yellow'} : {color: 'black'}} size={25} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      })}
    </>
  );
}

export default SectionPopularRecipe;