import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipe from "./pages/Recipes/AddRecipe";
import Notification from "./pages/Recipes/Notification";
import DetailAccount from "./pages/DetailAccount/DetailAccount";
import HomeScreen from "./pages/Home/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PopularRecipe from "./pages/Recipes/PopularRecipe";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={"Main"} component={HomeScreen} options={{tabBarIcon: () => (<Ionicons name="home" size={30} /> )}} />
      <Tab.Screen name={"AddRecipe"} component={AddRecipe} options={{tabBarIcon: () => (<Ionicons name="add" size={30} /> )}} />
      <Tab.Screen name={"AllRecipe"} component={PopularRecipe} options={{tabBarIcon: () => (<Ionicons name="search" size={35} /> )}} />
      <Tab.Screen name={"Notification"} component={Notification} options={{tabBarIcon: () => (<Ionicons name="chatboxes" size={30} /> )}} />
      <Tab.Screen name={"DetailAccount"} component={DetailAccount} options={{tabBarIcon: () => (<Ionicons name="person" size={30} /> )}} />
    </Tab.Navigator>
  )
}