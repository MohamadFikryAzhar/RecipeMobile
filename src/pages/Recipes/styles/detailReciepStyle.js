import { ColorMatch } from "../../init/ColorMatch";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    marginMain: {
        marginHorizontal: 20
    },
    mainInfo: {
        marginTop: 180
    },
    titleText: {
        fontSize: 30,
        color: ColorMatch.white
    },
    usernameText: {
        fontSize: 16,
        color: ColorMatch.gray
    },
    ingredientGroup: {
        marginTop: 30,
        width: 20000,
        height: 320,
        backgroundColor: ColorMatch.white
    },
    ingredientTitle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20
    },
    ingredientText: {
        color: ColorMatch.black,
        margin: 20
    }
})

export default styles;