import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from './detailAccountStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = useSelector(state => state.login);

  return (
    <ScrollView>
      <View style={styles.profilePage}>
        <Image source={{uri: login.data.photo ? login.data.photo : 'https://i.stack.imgur.com/l60Hf.png'}} />
        <Text style={styles.usernameProfile}>{login.data.name ? login.data.name : ''}</Text>
      </View>

      <View style={styles.userActionStyle}>
        <TouchableOpacity style={styles.buttonDetailAccount} onPress={() => console.log("Edit Profile")}>
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
      </View>
    </ScrollView>
  )
}