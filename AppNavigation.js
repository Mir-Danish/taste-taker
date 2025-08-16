import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import StarterScreen from './Auth/StarterScreen';
import LoginScreen from './Auth/LoginScreen';
import RegisterScreen from './Auth/RegisterScreen';

import HomePage from "./Screens/HomePage"
import DetailsPage from './Screens/DetailsPage';
import UserProf from './bottomPages/UserProf';
import FavouritesPage from './bottomPages/FavouritesPage';
import SearchPage from "./bottomPages/SearchPage"
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookMark from './Screens/BookMark';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (    
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen 
        name='Home' 
        component={HomePage}
        options={{
          title: 'Home',
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen 
        name='BookMark' 
        component={BookMark}
        options={{
          title: 'Bookmarks',
          drawerLabel: 'Bookmarks',
        }}
      />
      <Drawer.Screen 
        name='Favourites' 
        component={FavouritesPage}
        options={{
          title: 'Favourites',
          drawerLabel: 'Favourites',
        }}
      />
      <Drawer.Screen 
        name='Search' 
        component={SearchPage}
        options={{
          title: 'Search',
          drawerLabel: 'Search',
        }}
      />
      <Drawer.Screen 
        name='UserProfile' 
        component={UserProf}
        options={{
          title: 'Profile',
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  )
}



const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="StarterPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='StarterPage' component={StarterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='MainDrawer' component={MyDrawer} />
        <Stack.Screen name='DetailsScreen' component={DetailsPage} />
              </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default AppNavigation

const styles = StyleSheet.create({})
