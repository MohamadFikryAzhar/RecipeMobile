import { ColorMatch } from "../init/ColorMatch";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    profilePage: {
        backgroundColor: ColorMatch.orange,
        height: 250
    },
    usernameProfile: {
        marginTop: 170,
        textAlign: 'center'
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