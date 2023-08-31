import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./registerStyle";
import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ColorMatch } from "../init/ColorMatch";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/AuthAction";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });

  function registerUser() {
    dispatch(registerAction(registerData, navigation.navigate))
  }

  function onRegisterChange(name, value) {
    setRegisterData({
      ...registerData,
      [name]:value
    })
  }

  return (
    <View style={styles.bgRegister}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>

      <View style={styles.formRegister}>
        <TextInput 
          onChangeText={name => onRegisterChange('name', name)} 
          value={registerData.name}
          inputMode="text"
          placeholder="Name"
          style={styles.inputSize}
        />
        
        <TextInput 
          onChangeText={email => onRegisterChange('email', email)} 
          value={registerData.email}
          inputMode="email"
          placeholder="Email"
          style={styles.inputSize}
        />

        <TextInput 
          onChangeText={password => onRegisterChange('password', password)} 
          value={registerData.password}
          placeholder="Password"
          inputMode="text"
          style={styles.inputSize}
          secureTextEntry={true}
        />
        <Link to={'/Main'} style={styles.fpStyle}>Forgot Password?</Link>
        <Button color={ColorMatch.orange} title="Register" onPress={registerUser}></Button>
      </View>

      <Text style={styles.linkToLogin}>Have an account? <Link to={"/Login"}>Sign In</Link></Text>
    </View>
  )
}