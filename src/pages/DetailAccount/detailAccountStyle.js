import { ColorMatch } from "../init/ColorMatch";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    profilePage: {
        backgroundColor: ColorMatch.orange,
        height: 250,
    },
    photoProfileStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,
        marginTop: 60,
        width: 100,
        height: 100,
    },
    usernameProfile: {
        marginTop: 70,
        textAlign: 'center',
        color: ColorMatch.white
    },
    iconText: {
        marginLeft: -80
    },
    userActionStyle: {
        flexDirection: 'column',
        gap: 1,
        marginTop: -40,
        marginHorizontal: 10,
        backgroundColor: ColorMatch.white,
        height: 400,
        borderRadius: 10,
    },
    buttonDetailAccount: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 100,
        margin: 20
    },
    iconColor: {
        color: ColorMatch.orange
    }
})

export default styles;