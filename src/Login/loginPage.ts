import { StyleSheet } from "react-native";
import { ColorMatch } from "../Type/ColorMatch";

const styles = StyleSheet.create({
  bgLogin: {
    backgroundColor: ColorMatch.white 
  },
  formLogin: {
    marginTop: 30,
    gap: 32,
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
  linkToRegister: {
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