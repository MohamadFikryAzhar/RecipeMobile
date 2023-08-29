import {StackNavigationProp} from '@react-navigation/stack';
import { Link, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../init/RootStackParams";
import { Image, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './rootStyle';
import { ReactNode } from 'react';

type homeScreenProp = StackNavigationProp<RootStackParams, 'Main'>

export default function HomeScreen(): ReactNode {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <ScrollView>
      <View style={styles.searchGroup}>
        <TextInput style={styles.searchBar} inputMode='search' placeholder='Search Recipe' />
      </View>

      <Text style={styles.textHome}>Popular Recipe</Text>
      <Link to={'/AllRecipe'} style={styles.subTextHome}>Popular, Check it Out</Link>
      <ScrollView horizontal={true}>
        <Image source={require('./../../assets/Rectangle7.jpg')} style={{marginRight: 10}}/>
        <Image source={require('./../../assets/Rectangle7.jpg')} style={{marginRight: 10}}/>
        <Image source={require('./../../assets/Rectangle7.jpg')} style={{marginRight: 10}}/>
        <Image source={require('./../../assets/Rectangle7.jpg')}/>
      </ScrollView>
      
      <View style={styles.categoryInfo}>
        <Text style={styles.textCategory}>New Recipes</Text>
        <Link style={styles.linkMoreCategory} to={'/Categories'}>
          <Text>More Category</Text>
        </Link>
      </View>
      <View style={styles.categoryStyle}>
        <Image source={require('./../../assets/Group47.jpg')} />
        <Image source={require('./../../assets/Group48.jpg')} />
        <Image source={require('./../../assets/Group49.jpg')} />
        <Image source={require('./../../assets/Group50.jpg')} />
      </View>

      <Text style={styles.textHome}>Popular For You</Text>
      <ScrollView horizontal={true}>
        <Image source={require('./../../assets/Rectangle55.jpg')} style={{marginRight: 10}}/>
        <Image source={require('./../../assets/Rectangle55.jpg')}/>
      </ScrollView>
    </ScrollView>
  )
}
