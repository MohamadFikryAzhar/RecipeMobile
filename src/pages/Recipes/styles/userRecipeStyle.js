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
    fontWeight: 'bold',
  },
  recipeCategory: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  editRecipe: {
    position: 'absolute',
    marginStart: 110,
    marginTop: 53,
    flexDirection: 'row',
    gap: 6
  },
  editBtn: {
    backgroundColor: ColorMatch.peru,
    borderRadius: 10,
    width: 60,
    height: 38
  },
  deleteBtn: {
    backgroundColor: ColorMatch.brown,
    borderRadius: 10,
    width: 60
  },
  belowActionBtn: {
    color: ColorMatch.white,
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 15
  }
})

export default styles;