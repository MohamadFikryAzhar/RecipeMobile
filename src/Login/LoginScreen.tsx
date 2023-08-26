import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./loginPage";
import { RootStackParams } from "../init/RootStackParams";
import {StackNavigationProp} from '@react-navigation/stack';
import { Link, useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ColorMatch } from "../Type/ColorMatch";

type authScreenProp = StackNavigationProp<RootStackParams, 'Auth'>

export default function LoginScreen(): JSX.Element {
  const navigation = useNavigation<authScreenProp>();
  const ref = useRef('')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.bgLogin}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>

      <View style={styles.formLogin}>
        <TextInput 
          onChangeText={setEmail} 
          value={email} 
          placeholder="Email"
          style={styles.inputSize}
        />

        <TextInput 
          onChangeText={setPassword} 
          value={password} 
          placeholder="Password"
          style={styles.inputSize}
          secureTextEntry={true}
        />
        <Text style={styles.fpStyle}>Forgot Password?</Text>
        <Button title="Login" color={ColorMatch.orange} onPress={() => navigation.navigate('Main')}></Button>
      </View>

      <Text style={styles.linkToRegister}>Don't have an account? <Link to={"/Register"}>Sign Up</Link></Text>
    </View>
  )
}