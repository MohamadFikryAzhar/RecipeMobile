import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipe from "../Recipes/AddRecipe";
import Notification from "../Recipes/Notification";
import HomeScreen from "../Home/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddRecipe" component={AddRecipe}/>
      <Tab.Screen name="Notification" component={Notification}/>
    </Tab.Navigator>
  )
}