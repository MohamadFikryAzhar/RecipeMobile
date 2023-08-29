import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./registerStyle";
import { RootStackParams } from "../init/RootStackParams";
import {StackNavigationProp} from '@react-navigation/stack';
import { Link, useNavigation } from "@react-navigation/native";
import { ReactNode, useState } from "react";
import { ColorMatch } from "../init/ColorMatch";
import { useDispatch } from "react-redux";
import { registerAction } from "../../redux/actions/AuthAction";

type authScreenProp = StackNavigationProp<RootStackParams, 'Register'>

export default function RegisterScreen(): ReactNode {
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser() {
    dispatch(registerAction(name, email, password, navigation));
  }

  return (
    <View style={styles.bgRegister}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>

      <View style={styles.formRegister}>
        <TextInput 
          onChangeText={name => setName(name)} 
          inputMode="text"
          placeholder="Name"
          style={styles.inputSize}
        />
        
        <TextInput 
          onChangeText={email => setEmail(email)} 
          inputMode="email"
          placeholder="Email"
          style={styles.inputSize}
        />

        <TextInput 
          onChangeText={password => setPassword(password)} 
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