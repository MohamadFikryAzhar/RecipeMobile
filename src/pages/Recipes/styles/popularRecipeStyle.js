import { StyleSheet } from "react-native";
import { ColorMatch } from "../../init/ColorMatch";

const styles = StyleSheet.create({
  fontTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: ColorMatch.orange
  },
  sectionRecipe: {
    marginTop: 25,
    marginStart: 40
  },
  imageRecipe: {
    width: 100,
    height: 90,
    borderRadius: 20
  },
  recipeInfo: {
    position: 'absolute',
    marginStart: 110
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  recipeCategory: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  recipeUploader: {
    fontSize: 14,
    fontWeight: '100',
    marginTop: 10
  },
  userReaction: {
    position: 'absolute',
    marginStart: 250,
    flexDirection: 'row',
    marginTop: 10
  }
})

export default styles;