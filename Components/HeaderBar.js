import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const HeaderBar = () => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        <Image source={require("../assets/logo.png")} alt="N/A" style={styles.logo}/>
        <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
          <Icon name="bars" size={24} color="#222"/>
        </TouchableOpacity>
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.title}>Taste Hub</Text>
      </View>
      <View style={styles.rightSection}>
        {/* <TouchableOpacity onPress={handleSignOut}>
          <Icon name="sign-out" size={28} color="#ff4757"/>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  leftSection: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    letterSpacing: 1,
    textAlign: 'center'
  },
})