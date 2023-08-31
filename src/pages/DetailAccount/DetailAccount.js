import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthAction";
import { useNavigation } from "@react-navigation/native";

export default function DetailAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View>
      <Text>Detail account activity</Text>
      <Button title="Logout" onPress={() => dispatch(logoutAction())}></Button>
      <Button title="My Recipe" onPress={() => navigation.push('UserRecipe')}></Button>
    </View>
  )
}