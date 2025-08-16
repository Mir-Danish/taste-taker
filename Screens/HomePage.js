import { Platform, ScrollView, StatusBar, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderBar from '../Components/HeaderBar'
import BottomBar from '../Components/BottomBar'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeContainer from '../Components/RecipeContainer';

const HomePage = () => {
  // console.log("hello 1")
  const changeScreen = useNavigation();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes))
      .catch(e => console.log(e));
  }, []);


  const addtoFavourites = async (itemId) => {
    try {
      const favs = JSON.parse(await AsyncStorage.getItem('favourites')) || [];
      if(!favs.includes(itemId)) {
        favs.push(itemId);
        await AsyncStorage.setItem('favourites',JSON.stringify(favs));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // console.log("hello 2")
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.recipeContainer} onPress={()=> changeScreen.navigate("DetailsScreen", {recipe: item})}>
    <Image
      source={{ uri: item.image }}
      style={styles.recipeImage}
      resizeMode="cover"
    />
    <Text style={styles.recipeTitle}>{item.name } </Text>
    <TouchableOpacity style={{backgroundColor:"#2AA10F",borderRadius:50,height:35, width:200,padding:7,marginBottom:10}} onPress={()=>addtoFavourites(item.name)} activeOpacity={0.7}>
   
      <Text style={{fontSize:18,fontWeight:"500",textAlign:"center"}}> {" "}Add to Favourites</Text>
    </TouchableOpacity>
  
    {/* <Text>{item.rating}</Text> */}
    {/* You can add more details here, like rating, cuisine, etc. */}
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <BottomBar />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
  },
  recipeContainer: {
    margin: 16,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#f8f8f8',
    elevation: 3,
    alignItems: 'center',
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 10,
    textAlign: 'center',
  },
});
  
