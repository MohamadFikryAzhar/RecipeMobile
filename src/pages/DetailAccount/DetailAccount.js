import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthAction";

export default function DetailAccount() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Detail account activity</Text>
      <Button title="Logout" onPress={() => dispatch(logoutAction())}></Button>
    </View>
  )
}