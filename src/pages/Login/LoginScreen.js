import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./loginStyle";
import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ColorMatch } from "../init/ColorMatch";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/AuthAction";

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser() {
    let loginData = {
      email: email,
      password: password
    };

    dispatch(loginAction(loginData))
      .then(() => {
        navigation.replace('HomeRoute', {screen: 'Main'});  
      }).catch(() => {
        navigation.replace('Login')
      });
  } 

  return (
    <View style={styles.bgLogin}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>
      <View style={styles.formLogin}>
        <TextInput 
          onChangeText={email => setEmail(email)} 
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.inputSize}
          />

        {login.isError ?? <Text>{login.errorMessage}</Text>}
        <TextInput 
          onChangeText={password => setPassword(password)} 
          value={password}
          inputMode="text"
          placeholder="Password"
          style={styles.inputSize}
          secureTextEntry={true}
        />
        <Text style={styles.fpStyle}>Forgot Password?</Text>
        <Button title="Login" color={ColorMatch.orange} onPress={loginUser}></Button>
      </View>

      <Text style={styles.linkToRegister}>Don't have an account? <Link to={"/Register"}>Sign Up</Link></Text>
    </View>
  )
}