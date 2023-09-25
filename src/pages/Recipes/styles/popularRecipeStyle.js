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
  searchBar: {
    marginStart: 20,
    marginTop: 10,
    width: 320,
    height: 50,
    borderColor: ColorMatch.orange,
    borderRadius: 10,
    borderWidth: 1
  },
  sortGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },  
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: 100,
    marginStart: 20,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  paginationGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lessNone: {
    display: 'none'
  },  
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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