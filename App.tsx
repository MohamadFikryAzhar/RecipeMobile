import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/Login/LoginScreen';
import 'react-native-gesture-handler'
import RegisterScreen from './src/pages/Register/RegisterScreen';
import HomeRoute from './src/HomeRoute';
import { Provider, connect } from 'react-redux';
import ListCategory from './src/pages/ListCategory/ListCategory';
import PopularRecipe from './src/pages/Recipes/PopularRecipe';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HomeRoute" component={HomeRoute} options={{headerShown: false}} />
          <Stack.Screen name="Categories" component={ListCategory} />
          <Stack.Screen name="AllRecipe" component={PopularRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;