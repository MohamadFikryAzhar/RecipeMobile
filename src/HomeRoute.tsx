import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipe from "./pages/Recipes/AddRecipe";
import Notification from "./pages/Recipes/Notification";
import DetailAccount from "./pages/DetailAccount/DetailAccount";
import HomeScreen from "./pages/Home/HomeScreen";

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