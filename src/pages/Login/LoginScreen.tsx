import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./loginStyle";
import { RootStackParams } from "../init/RootStackParams";
import {StackNavigationProp} from '@react-navigation/stack';
import { Link, useNavigation } from "@react-navigation/native";
import { ReactNode, useState } from "react";
import { ColorMatch } from "../init/ColorMatch";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/AuthAction";
import { RootState } from "../../redux/store";

type authScreenProp = StackNavigationProp<RootStackParams, 'Login'>

export default function LoginScreen(): ReactNode {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser() {
    dispatch(loginAction({email, password}, navigation))
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