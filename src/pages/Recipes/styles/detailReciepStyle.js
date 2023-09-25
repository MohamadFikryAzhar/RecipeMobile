import { ColorMatch } from "../../init/ColorMatch";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    mainInfo: {
        marginTop: 180,
        marginStart: 20,
    },
    imageTop: {
        height: 300
    },
    titleText: {
        fontSize: 30,
        color: ColorMatch.white,
        fontFamily: 'Poppins-Bold'
    },
    usernameText: {
        fontSize: 16,
        color: ColorMatch.gray
    },
    ingredientGroup: {
        marginTop: -30,
        width: 20000,
        height: 320,
        backgroundColor: ColorMatch.white
    },
    ingredientTitle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 18,
        margin: 20,
        fontFamily: 'Poppins-Black'
    },
    ingredientText: {
        color: ColorMatch.gray,
        margin: 20,
        marginTop: -40,
        marginLeft: 40,
        fontFamily: 'Poppins-Bold'
    }
})

export default styles;