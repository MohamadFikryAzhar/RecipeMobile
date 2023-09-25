import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from './detailAccountStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logoutAction } from "../../redux/actions/AuthAction";

export default function DetailAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const get_user = useSelector(state => state.get_user);
  const {data} = get_user;

  function logoutUser() {
    dispatch(logoutAction(navigation.navigate))
  }

  const photoUri = (data && data[0] && data[0].photo) ? data[0].photo : '';
  const userName = (data && data[0] && data[0].name) ? data[0].name : '';

  return (
    <ScrollView>
      <View style={styles.profilePage}>
      <ImageBackground source={{ uri: photoUri }} style={styles.photoProfileStyle}>
          <Text style={styles.usernameProfile}>{userName}</Text>        
      </ImageBackground>
      </View>

      <View style={styles.userActionStyle}>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={() => navigation.push('EditProfile')}>
          <Ionicons name="person-outline" style={styles.iconColor} size={30}/>        
          <Text style={styles.iconText}>Edit Profile</Text>
          <Ionicons name="chevron-forward-outline" style={{marginLeft: 50}} size={30}/>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={() => navigation.push('UserRecipe')}>
          <Ionicons name="fast-food-outline" style={styles.iconColor} size={30}/>        
          <Text style={styles.iconText}>My Recipe</Text>
          <Ionicons name="chevron-forward-outline" style={{marginLeft: 50}} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={() => console.log("Saved Recipe")}>
          <Ionicons name="bookmark-outline" style={styles.iconColor} size={30}/>        
          <Text style={styles.iconText}>Saved Recipe</Text>
          <Ionicons name="chevron-forward-outline" style={{marginLeft: 50}} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={() => console.log("Liked Recipe")}>
          <Ionicons name="thumbs-up-outline" style={styles.iconColor} size={30}/>        
          <Text style={styles.iconText}>Liked Recipe</Text>
          <Ionicons name="chevron-forward-outline" style={{marginLeft: 50}} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={logoutUser}>
          <Ionicons name="person-remove-outline" style={styles.iconColor} size={30}/>        
          <Text style={styles.iconText}>Log Out</Text>
          <Ionicons name="chevron-forward-outline" style={{marginLeft: 50}} size={30}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}