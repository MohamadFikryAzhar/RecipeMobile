import { StackActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { ColorMatch } from "../init/ColorMatch";

const SplashScreen = () => {
  const navigation = useNavigation();
  const login = useSelector(state => state.login);

  useEffect(() => {
    try {
      async function alreadyLoginOrNot() {
        setTimeout(() => {
          login.data
          ? navigation.dispatch(StackActions.replace('HomeRoute', {screen: 'Main'}))
          : navigation.dispatch(StackActions.replace('Login'))
        }, 750)
      }
      alreadyLoginOrNot();
    } catch (error) {
      console.error(error);
    }

    return () => clearTimeout();
  }, [navigation])
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: ColorMatch.orange}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 3}}>Just Cook and Eat</Text>
      <Image source={require('./../../assets/pijarfoodbootsplash.png')} />
    </View>
  )
}

export default SplashScreen;