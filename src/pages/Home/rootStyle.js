import { StyleSheet } from "react-native";
import { ColorMatch } from "../init/ColorMatch";

const styles = StyleSheet.create({
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
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  textCategory: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: -32
  },
  linkMoreCategory: {
    fontSize: 13,
    marginTop: 20,
    color: ColorMatch.blue
  },
  categoryStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  homeIcon: {
    width: 27,
    height: 27,
  },
})

export default styles;