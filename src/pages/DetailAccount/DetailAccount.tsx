import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";

export default function DetailAccount() {
  return (
    <View>
      <Text>Detail account activity</Text>
      <Button title="Logout" onPress={() => {
        AsyncStorage.clear();
      }}></Button>
    </View>
  )
}