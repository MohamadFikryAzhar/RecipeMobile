import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthAction";
import { useNavigation } from "@react-navigation/native";

export default function DetailAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function logoutUser() {
    dispatch(logoutAction(navigation.navigate));
  }

  return (
    <View>
      <Text>Detail account activity</Text>
      <Button title="Logout" onPress={logoutUser}></Button>
      <Button title="My Recipe" onPress={() => navigation.push('UserRecipe')}></Button>
    </View>
  )
}