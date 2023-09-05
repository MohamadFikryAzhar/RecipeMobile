import { Button, Image, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/AuthAction";
import { useNavigation } from "@react-navigation/native";
import styles from './detailAccountStyle';

export default function DetailAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = useSelector(state => state.login);

  function logoutUser() {
    dispatch(logoutAction(navigation.navigate));
  }

  return (
    <ScrollView>
      <View style={styles.profilePage}>
        <Image source={{uri: "https://randomwordgenerator.com/img/picture-generator/51e6d0444c53b10ff3d8992cc12c30771037dbf852547849752c7fd79f4e_640.jpg"}} />
      <Text style={styles.usernameProfile}>{login.data.name}</Text>
      </View>

      <View style={styles.userActionStyle}>
        <Button title="Logout" onPress={logoutUser}></Button>
        <Button title="Edit Profile" onPress={() => console.log("Edit Profile")}></Button>
        <Button title="My Recipe" onPress={() => navigation.push('UserRecipe')}></Button>
        <Button title="Saved Recipe" onPress={() => console.log("Saved Recipe")}></Button>
        <Button title="Liked Recipe" onPress={() => console.log("Liked Recipe")}></Button>
      </View>
    </ScrollView>
  )
}