import {StackNavigationProp} from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../init/RootStackParams";
import { Text, View } from 'react-native';

type homeScreenProp = StackNavigationProp<RootStackParams, 'Main'>

export default function HomeScreen(): JSX.Element {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View>
      <Text>Home screeen</Text>
    </View>
  )
}