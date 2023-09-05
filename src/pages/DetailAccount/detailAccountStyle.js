import { ColorMatch } from "../init/ColorMatch";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    profilePage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    usernameProfile: {
        marginTop: 200
    },  
    userActionStyle: {
        marginTop: 100,
        gap: 10,
        backgroundColor: ColorMatch.white
    }
})

export default styles;