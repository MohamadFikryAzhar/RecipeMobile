import { Image, ScrollView, View } from "react-native";
import styles from "./listCategoryStyle";

export default function ListCategory(): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.categoryStyle}>
        <Image source={require('./../../assets/Group47.jpg')} />
        <Image source={require('./../../assets/Group48.jpg')} />
        <Image source={require('./../../assets/Group49.jpg')} />
        <Image source={require('./../../assets/Group50.jpg')} />
        <Image source={require('./../../assets/Group47.jpg')} />
        <Image source={require('./../../assets/Group48.jpg')} />
        <Image source={require('./../../assets/Group49.jpg')} />
        <Image source={require('./../../assets/Group50.jpg')} />
        
      </View>
    </ScrollView>
  )
}