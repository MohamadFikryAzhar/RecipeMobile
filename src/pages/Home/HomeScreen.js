import { Link } from "@react-navigation/native";
import { Image, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './rootStyle';

export default function HomeScreen() {
  let ingredients = "Beef, Pepper, Chili, Tomato"
  let maxWord = 10
  let trimmedIngredient = ingredients.substring(0, maxWord);
  trimmedIngredient = ingredients.substring(0, Math.min(trimmedIngredient.length, trimmedIngredient.lastIndexOf(', ')))
  return (
    <ScrollView style={styles.HomeLayoutStyle}>
      <View style={styles.searchGroup}>
        <TextInput style={styles.searchBar} inputMode='search' placeholder='Search Recipe' />
      </View>

      <Text style={styles.textHome}>Popular Recipe</Text>
      <Link to={'/AllRecipe'} style={styles.subTextHome}>Popular, Check it Out</Link>
      <ScrollView horizontal={true}>
        <View style={styles.popularStyle}>
          <Image source={require('./../../assets/Rectangle7.jpg')}/>
          <Text style={styles.carouselText}>
            Sandwich with Egg
          </Text>
          <Image source={require('./../../assets/Rectangle7.jpg')}/>
          <Text style={styles.carouselText}>
            Sandwich with Egg
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.categoryInfo}>
        <Text style={styles.textCategory}>New Recipes</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.categoryStyle}>
          <Image source={require('./../../assets/Group47.jpg')} />
          <Text style={styles.categoryText}>
            Main
          </Text>
          <Image source={require('./../../assets/Group48.jpg')} />
          <Text style={styles.categoryText}>
            Boiled
          </Text>
          <Image source={require('./../../assets/Group49.jpg')} />
          <Text style={styles.categoryText}>
            Seafod
          </Text>
          <Image source={require('./../../assets/Group50.jpg')} />
          <Text style={styles.categoryText}>
            Pop
          </Text>
          <Image source={require('./../../assets/Group47.jpg')} />
          <Text style={styles.categoryText}>
            New
          </Text>
        </View>
      </ScrollView>

      <Text style={styles.textHome}>Popular For You</Text>
      <ScrollView horizontal={true}>
        <View style={styles.newRecipeStyle}>
          <Image source={require('./../../assets/Rectangle55.jpg')}/>
          <View style={styles.bgNewRecipe}>
            <Text style={styles.newRecipeTitle}>Beef Steak</Text>
            <Text style={styles.newRecipeIngredients}>{trimmedIngredient}</Text>
          </View>
          <Image source={require('./../../assets/Rectangle55.jpg')}/>
          <View style={styles.bgNewRecipe}>
            <Text style={styles.newRecipeTitle}>Spaghetti</Text>
            <Text style={styles.newRecipeIngredients}>{trimmedIngredient}</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}
