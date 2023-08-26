import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "./registerStyle";
import { RootStackParams } from "../init/RootStackParams";
import {StackNavigationProp} from '@react-navigation/stack';
import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ColorMatch } from "../init/ColorMatch";

type authScreenProp = StackNavigationProp<RootStackParams, 'Register'>

export default function RegisterScreen(): JSX.Element {
  const navigation = useNavigation<authScreenProp>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.bgRegister}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>

      <View style={styles.formRegister}>
        <TextInput 
          onChangeText={setName} 
          value={name} 
          placeholder="Name"
          style={styles.inputSize}
        />
        
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
        <Link to={'/Main'} style={styles.fpStyle}>Forgot Password?</Link>
        <Button color={ColorMatch.orange} title="Register" onPress={() => navigation.navigate('Main')}></Button>
      </View>

      <Text style={styles.linkToLogin}>Have an account? <Link to={"/Login"}>Sign In</Link></Text>
    </View>
  )
}