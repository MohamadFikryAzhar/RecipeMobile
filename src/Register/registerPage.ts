import { StyleSheet } from "react-native";
import { ColorMatch } from "../Type/ColorMatch";

const styles = StyleSheet.create({
  bgRegister: {
    backgroundColor: ColorMatch.white 
  },
  formRegister: {
    marginTop: 30,
    gap: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputSize: {
    width: 300
  },
  fpStyle: {
    marginStart: 180,
    marginTop: -30
  },
  linkToLogin: {
    marginTop: 20,
    marginStart: 20
  },
  fontTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: ColorMatch.orange,
    marginTop: -100
  },
  fontSubTitle: {
    fontSize: 13,
    textAlign: 'center',
    color: ColorMatch.white
  }
})

export default styles;