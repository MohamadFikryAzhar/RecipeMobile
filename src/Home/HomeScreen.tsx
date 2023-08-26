import { Text, View } from "react-native";
import styles from "./rootPage";
import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { HomeStackParams } from "../init/HomeStackParams";
import BottomTab from "../component/BottomTab";


type homeScreenProp = StackNavigationProp<HomeStackParams, 'Main'>

export default function HomeScreen(): JSX.Element {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View>
      <Text style={styles.fontRootPage}>Mama Recipe</Text>
      <BottomTab/>      
    </View>
  )
}