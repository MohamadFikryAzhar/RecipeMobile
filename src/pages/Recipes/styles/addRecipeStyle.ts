import { StyleSheet } from "react-native";
import { ColorMatch } from "../../init/ColorMatch";

const styles = StyleSheet.create({
  formAddRecipeStyle: {
    justifyContent: 'center',
    alignItems: 'center',    
    gap: 12
  },
  fontTitle: {
    fontSize: 30,
    color: ColorMatch.orange,
    marginTop: 10,
    marginBottom: 12
  },
  titleInput: {
    width: 320,
    height: 60,
    backgroundColor: ColorMatch.white,
    borderColor: ColorMatch.white,
    borderRadius: 10,
    borderWidth: 1
  },
  ingredientInput: {
    width: 320,
    height: 200,
    backgroundColor: ColorMatch.white,
    borderColor: ColorMatch.white,
    borderRadius: 10,
    borderWidth: 1
  },
  photoInput: {
    width: 320,
    height: 60,
    backgroundColor: ColorMatch.white,
    borderColor: ColorMatch.white,
    borderRadius: 10,
    borderWidth: 1
  },
  categoryInput: {
    width: 320,
    height: 60,
    backgroundColor: ColorMatch.white,
    borderColor: ColorMatch.white,
    borderRadius: 10,
    borderWidth: 1
  }
})

export default styles;