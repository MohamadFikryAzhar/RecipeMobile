import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipe from "./Recipes/AddRecipe";
import Notification from "./Recipes/Notification";
import DetailAccount from "./DetailAccount/DetailAccount";
import HomeScreen from "./Home/HomeScreen";
// import HomeIcon from './../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen name="AddRecipe" component={AddRecipe} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="DetailAccount" component={DetailAccount} />
    </Tab.Navigator>
  )
}