import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddRecipe from "./pages/Recipes/AddRecipe";
import Notification from "./pages/Recipes/Notification";
import DetailAccount from "./pages/DetailAccount/DetailAccount";
import HomeScreen from "./pages/Home/HomeScreen";
import { Image } from "react-native";
import styles from "./pages/Home/rootStyle";


const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name={"Main"} component={HomeScreen} options={{tabBarIcon: () => {
          return (<Image style={styles.homeIcon} source={require('./assets/home.jpg')} />)}}} />

      <Tab.Screen name={"AddRecipe"} component={AddRecipe} options={{tabBarIcon: () => {
          return (<Image style={styles.homeIcon} source={require('./assets/plus-square.jpg')} />)}}} />

      <Tab.Screen name={"Notification"} component={Notification} options={{tabBarIcon: () => {
          return (<Image style={styles.homeIcon} source={require('./assets/message-circle.jpg')} />)}}} />

      <Tab.Screen name={"DetailAccount"} component={DetailAccount} options={{tabBarIcon: () => {
          return (<Image style={styles.homeIcon} source={require('./assets/user.jpg')} />)}}} />
    </Tab.Navigator>
  )
}