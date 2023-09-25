import { StyleSheet } from "react-native";
import { ColorMatch } from "../init/ColorMatch";

const styles = StyleSheet.create({
  HomeLayoutStyle: {
    marginHorizontal: 5
  },
  fontRootPage: {
    fontSize: 100
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
  textHome: {
    fontSize: 20,
    margin: 14
  },
  subTextHome: {
    fontSize: 14,
    marginTop: -10,
    marginStart: 10,
    marginBottom: 10
  },  
  popularStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: -80
  }, 
  carouselText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: -160,
    marginTop: 115,
    color: ColorMatch.white
  },  
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  categoryStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: -10
  },  
  categoryText: {
    fontSize: 15,
    fontWeight: 'bold',
    left: -40,
    marginTop: 65,
  },  
  textCategory: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 12,
  },
  newRecipeStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: -40
  },
  bgNewRecipe: {
    backgroundColor: 'transparent',
    left: -120,
    marginTop: 75,
  },
  newRecipeTitle: {
    color: ColorMatch.white,
    fontSize: 20
  },
  newRecipeIngredients: {
    color: ColorMatch.white,
  },
  linkMoreCategory: {
    fontSize: 13,
    marginTop: 20,
    color: ColorMatch.blue
  },
  homeIcon: {
    width: 27,
    height: 27,
  },
})

export default styles;