import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Login/LoginScreen';
import 'react-native-gesture-handler'
import RegisterScreen from './src/pages/Register/RegisterScreen';
import HomeRoute from './src/HomeRoute';
import { useSelector } from 'react-redux';
import ListCategory from './src/pages/ListCategory/ListCategory';
import PopularRecipe from './src/pages/Recipes/PopularRecipe';
import UserRecipe from './src/pages/Recipes/UserRecipe';
import DetailRecipe from './src/pages/Recipes/DetailRecipe';
import EditRecipe from './src/pages/Recipes/EditRecipe';

const Stack = createNativeStackNavigator();

function App() {
  const login = useSelector(state => state.login);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          login.data.accesstoken ? (
            <>
              <Stack.Screen name="HomeRoute" component={HomeRoute} />
              <Stack.Screen name="Categories" component={ListCategory} />
              <Stack.Screen name="AllRecipe" component={PopularRecipe} />
              <Stack.Screen name="DetailRecipe" component={DetailRecipe} />
              <Stack.Screen name="UserRecipe" component={UserRecipe} />
              <Stack.Screen name="EditRecipe" component={EditRecipe} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
