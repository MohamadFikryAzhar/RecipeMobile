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
    marginStart: 30
  },
  searchGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  searchBar: {
    width: 320,
    height: 50,
    borderColor: ColorMatch.orange,
    borderRadius: 10,
    borderWidth: 1
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
    marginStart: 190,
    flexDirection: 'row',
    marginTop: 45,
    gap: 10
  },
  editRecipe: {
    position: 'absolute',
    marginStart: 250,
    flexDirection: 'column',
    marginTop: 10
  },
  editBtn: {
    backgroundColor: ColorMatch.peru,
    borderRadius: 10,
    width: 100
  },
  deleteBtn: {
    backgroundColor: ColorMatch.brown,
    borderRadius: 10
  },
  belowActionBtn: {
    color: ColorMatch.white
  }
})

export default styles;