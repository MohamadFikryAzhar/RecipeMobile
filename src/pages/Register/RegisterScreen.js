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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser() {
    let registerData = {
      name: name,
      email: email,
      password: password
    };

    dispatch(registerAction(registerData))
      .then(() => {
        navigation.navigate('Login')
      })
      .catch(() => {
        navigation.navigate('Register')
      })
  }

  return (
    <View style={styles.bgRegister}>
      <Image source={require('./images/eggsandwich.jpg')} />
      <Text style={styles.fontTitle}>Welcome!</Text>
      <Text style={styles.fontSubTitle}>Log in to your existing account</Text>

      <View style={styles.formRegister}>
        <TextInput 
          onChangeText={name => setName(name)} 
          value={name}
          inputMode="text"
          placeholder="Name"
          style={styles.inputSize}
        />
        
        <TextInput 
          onChangeText={email => setEmail(email)} 
          value={email}
          inputMode="email"
          placeholder="Email"
          style={styles.inputSize}
        />

        <TextInput 
          onChangeText={password => setPassword(password)} 
          value={password}
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